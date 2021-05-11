<script>
  import Card from "./Card.svelte";
  import Debugger from "./Debugger.svelte";
  import { board } from "./stores"
  import catalog from './catalog';
import TableData from "./TableData.svelte";
  
  let 
    hover = "hand",
    card = 1;
  // let tablex = document.getElementById("table").clientWidth;
  // let tabley = document.getElementById("table").clientHeight;

  $: ({ table } = $board);
  $: currentCard = catalog[table[0]];

</script>

<main>

  <!-- <div class="debug">
    <Debugger {card} {hover} />
  </div> -->

  <div id="table">
    <h2 style='position:absolute'>Table</h2>
    <div id="frame">
      <p>Place card here</p>
    </div>
    <TableData card={currentCard || ""}/>
  </div>
  <div id="graveyard">
    <h2 style='position:absolute'>Graveyard</h2>
  </div>
  <div id="hand">
    <h2 style='position:absolute'>Hand</h2>
  </div>
  <ul>
    {#each catalog as card}
      <Card info={card}/>
    {/each}
  </ul>
</main>

<style>
  main {
    position: relative;
    text-align: center;
    max-width: 240px;
    margin: 0em;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas:
      "table graveyard"
      "hand hand";
    grid-template-rows: 70% 1fr;
    grid-template-columns: 1fr 300px;
  }

  h2 {
    color: black;
    margin: 0;
    padding: 0.25em 0.5em;
  }

  #frame {
    height: 375px;
    width: 300px;
    border: 0.2em solid grey;
    border-radius: 0.4em;
    /* place-self: center;
    place-content: center; */
    color: grey;
    z-index: 0;
  }

  #graveyard {
    grid-area: graveyard;
    background-color: cadetblue;
  }

  #hand {
    grid-area: hand;
    text-align: left;
    background-color: bisque;
  }

  #table {
    grid-area: table;
    background-color: burlywood;
    display: grid;
    grid-template-columns: 300px 1fr;
  }

  /* #table p {
    position: relative;
    top: 50%;
    margin: 0em;
  } */

  .debug {
    position: absolute;
    width: 100%;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
