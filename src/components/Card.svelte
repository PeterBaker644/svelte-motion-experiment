<script>
	import { spring } from 'svelte/motion';
	import { pannable } from './pannable.js';
	export let setCoords = {x: 0, y: 0};
  const dragSpring = {stiffness: 0.1, damping: 0.4}; 
  const dropSpring = {stiffness: 0.02, damping: 0.4}; 
  const stopSpring = {stiffness: 0.02, damping: 0.4};
	const coords = spring(setCoords, stopSpring);

  let card = {
    width:200,
    height:280
  };

	function handlePanStart() {
		coords.stiffness = 0.1;
    coords.damping = 0.4;
	}

	function handlePanMove(event) {
		coords.update($coords => ({
			x: $coords.x + event.detail.dx,
			y: $coords.y + event.detail.dy
		}));
	}

	function handlePanEnd(event) {
		coords.stiffness = 0.03;
		coords.damping = 0.4;
		coords.set(setCoords);
	}
</script>

<div class="card"
	use:pannable
	on:panstart={handlePanStart}
	on:panmove={handlePanMove}
	on:panend={handlePanEnd}
	style="transform:
		translate({$coords.x}px,{$coords.y}px)
		rotate({($coords.x * 0.1)}deg);
    height:{card.height}px;
    width:{card.width}px;"
>
  <h2>Monster Name</h2>
  <div class="image">Fake Image</div>
  <div class="details">
    <p>STR:</p>
    <p>WK:</p>
    <p>PWR:</p>
  </div>
  <p>coords: {Math.round($coords.x)},{Math.round($coords.y)}</p>
</div>

<style>
  h2,p {
    margin: 0em;
  }

  h2 {
    color: #ff3e00;
  }

	.card {
		position: absolute;
		left: calc(50% - 200px / 2);
		bottom: calc(15% - 280px / 2);
		border-radius: 4px;
    border: 0.2em solid black;
    border-radius: 0.4em;
    background-color: rgba(255, 255, 255, 0.9);
    display: grid;
    gap: 0;
    align-items: center;
		cursor: move;
    z-index: 1;
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