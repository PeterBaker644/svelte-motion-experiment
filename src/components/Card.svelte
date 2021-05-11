<script>
  import { spring } from "svelte/motion";
  import { board, borders } from "./stores.js";
  import { drop } from "./boardMethods";
  import defineCoords from "./defineCoords.js";
  import { pannable } from "./pannable.js";
  export let info;

  let 
    hover = "hand",
    click;
  const 
    initCardCoords = {
      x: window.innerWidth / 2,
      y: window.innerHeight,
      rotation: 0,
    },
    coords = spring(initCardCoords, { stiffness: 0.02, damping: 0.4 });

  $: ({ disabled } = $board);
  $: ({ tableBorder, handBorder, width } = $borders);
  $: newCoords = defineCoords(info.id, $board, $borders);
  $: if ($board) {
    coords.set(newCoords);
  }

  function calcHover(event) {
    let x = event.detail.x;
    let y = event.detail.y;
    if (y > handBorder) {
      return "hand";
    } else if (x > tableBorder) {
      return "graveyard";
    } else {
      return "table";
    }
  }

  function handlePanStart(event) {
    hover = calcHover(event);
    click = true;
    coords.stiffness = 0.1;
    coords.damping = 0.4;
    setTimeout(() => click = false, 200);
  }

  function handlePanMove(event) {
    coords.update(($coords) => ({
      x: $coords.x + event.detail.dx,
      y: $coords.y + event.detail.dy,
      rotation: ($coords.x - (width - 150) / 2) * 0.05,
    }));
  }

  function handlePanEnd(event) {
    if (click && hover === "table") {
      hover = disabled[info.id] ? "graveyard" : "hand";
    } else if (click) {
      hover = "table";
    } else {
      hover = calcHover(event);
    };
    click = true;
    drop(info.id, hover, $board, board);
    coords.stiffness = 0.03;
    coords.damping = 0.4;
    coords.set(newCoords);
  }

</script>

<div
  class="card {disabled[info.id] ? 'disabled' : 'normal'}"
  use:pannable
  on:panstart={handlePanStart}
  on:panmove={handlePanMove}
  on:panend={handlePanEnd}
  style="transform:
		translate({$coords.x}px,{$coords.y}px)
		rotate({$coords.rotation}deg);"
>
  <h2>{info.name}{info.id}</h2>
  <div class="image">Fake Image</div>
  <div class="details">
    <p>hover: {hover}</p>
    <p>WK:</p>
    <p>PWR:</p>
  </div>
  <p>newCoords: {Math.round(newCoords.x)},{Math.round(newCoords.y)}</p>
  <p>coords: {Math.round($coords.x)},{Math.round($coords.y)}</p>
</div>

<style>
  h2,
  p {
    margin: 0em;
  }

  h2 {
    color: #ff3e00;
    font-size: 2em;
    text-align: left;
    padding-left: 0.5em;
  }

  .card {
    position: absolute;
    border-radius: 4px;
    border: 0.1em solid black;
    border-radius: 0.4em;
    background-color: rgba(255, 255, 255, 0.9);
    display: grid;
    gap: 0;
    align-items: center;
    cursor: move;
    z-index: 1;
    left: 0;
    top: 0;
    height: 280px;
    width: 200px;
  }
  .disabled {
    background-color: rgba(155, 155, 155, 0.9);
  }

  .details {
    margin: 0em;
  }

  .image {
    width: 150px;
    height: 100px;
    margin: 0.2em 0em;
    border: 1px solid black;
    justify-self: center;
  }
</style>
