<script>
  import { onMount } from "svelte";
  import Board from "./components/Board.svelte";
  import { borders } from "./components/stores";

  function setBoundaries() {
    let tableBorder = document.getElementById("table").clientWidth;
    let handBorder = 100 + document.getElementById("table").clientHeight;
    borders.set({
      tableBorder: tableBorder,
      handBorder: handBorder,
      width: window.innerWidth,
      height: window.innerHeight
    });
    console.log("resizing");
  }

  onMount(() => {setBoundaries()});
</script>

<svelte:window on:resize={() => setBoundaries()} />

<div class="container">
  <header>
    <h1>Svelte Motion Test</h1>
  </header>
  <Board />
</div>

<style>
  h1 {
    color: #ff3e00;
    text-align: center;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    margin: 0;
    padding: 4px;
  }

  header {
    height: 100px;
  }

  .container {
    height: 100%;
  }
</style>
