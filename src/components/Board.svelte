<script>
  import Card from "./Card.svelte";
  import Debugger from "./Debugger.svelte";
  import catalog from './catalog';
  
  let size = 10,
    hover = "hand",
    card = 1;
  // let tablex = document.getElementById("table").clientWidth;
  // let tabley = document.getElementById("table").clientHeight;

</script>



<main on:mousedown={() => (size = 20)} on:mouseup={() => (size = 10)}>
  <!-- reminder to spread cards no more than 100px apart. Can be less but never more. -->

  <div class="debug">
    <Debugger {card} {hover} />
  </div>

  <div id="table">
    <div id="frame">
      <p>Place card here</p>
    </div>
  </div>
  <div id="graveyard" />
  <div id="hand">
    <p>The current size is {size}.</p>
  </div>
  <ul>
    {#each catalog as card}
      <Card info={card}/>
    {/each}
  </ul>
  <!-- <Card id={1}/>
  <Card id={2}/> -->
  <!-- <Card setCoords={{x:100, y:5}}/>   -->
  <!-- <CardNew id={3} setCoords={{ x: 100, y: 5 }} /> -->
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

  #frame {
    height: 350px;
    width: 275px;
    border: 0.2em solid lightgrey;
    border-radius: 0.4em;
    place-self: center;
    place-content: center;
    color: lightgrey;
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
  }

  #table p {
    position: relative;
    top: 50%;
    margin: 0em;
  }

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
