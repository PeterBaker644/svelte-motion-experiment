<script>
  import { onMount } from "svelte";
  import Board from "./components/Board.svelte";
  import { reset } from "./components/boardMethods";
  import { borders } from "./components/stores";

  let debug = false;

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
    <button style="width:100px; margin:0.5rem" on:click={reset}>Reset</button>
    <h1>
      Svelte Motion Test
    </h1>
    <button style="width:100px; margin:0.5rem" on:click={() => debug = debug ? false : true}>Debug Mode</button>
  </header>
  <Board {debug}/>
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
    flex-grow: 1;
  }

  header {
    height: 100px;
    display: flex;
  }

  .container {
    height: 100%;
  }
</style>
