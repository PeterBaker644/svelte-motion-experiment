<script>
  import { onMount } from 'svelte';
  import catalog from './catalog';
  import  { board, filters } from "./stores";
  import FilterButton from './FilterButton.svelte'
  export let hover, card;
  let mousex, mousey;
  $: ({disabled, hand, graveyard, table} = $board);
  $: ({ freeze, emf5, orbs, spiritBox, ghostWriting, fingerprints } = $filters);
  const filterList = Object.keys($filters);
  $: filterValues = Object.values($filters);

  function setMouse (event) {
    mousex = event.clientX;
    mousey = event.clientY;
  }

  // Recalculates which cards are filtered and where they ought to be.
 function shuffle(filters) {
  console.log("==== Shuffle started ====");
  let cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let handArray = [], graveyardArray = [], disabledArray = [];
  console.log("What is filters?", filters)
  for (let card of cards) {
    const filterArray = Object.values(filters);
    const cardArray = Object.values(catalog[card].evidence);
    let toGraveyard = false;
    // compare each line of evidence to the evidence provided by the filters.
    for (let i = 0; i < filterArray.length; i++) {
      let entry = filterArray[i];
      // console.log("Entry =", entry, "compared to = ", cardArray[i])
      if (entry !== "unknown" && entry !== cardArray[i]) {
        console.log("Adding to graveyard");
        toGraveyard = true;
        break;
      }
    };
    // Add each card to destination list and track whether it is disabled.
    if (card === table[0]) {
      // Doesn't actually work because of unreadable state
      console.log("table card detected")
      disabledArray.push(toGraveyard);
    } else if (toGraveyard === false) {
      handArray.push(card);
      disabledArray.push(toGraveyard);
    } else {
      graveyardArray.push(card);
      disabledArray.push(toGraveyard);
    };
  };
  console.log("hand:", handArray, "graveyard:", graveyardArray, "disabled:", disabledArray)
  update(board => ({ ...board, "disabled": disabledArray, "hand": handArray, "graveyard": graveyardArray })
  );
  console.log("==== Shuffle ended ====");
};

</script>

<svelte:window on:mousemove={setMouse}/>

<div class="tester">
  <p>Card: {card}</p>
  <p>Hover: {hover}</p>
  <p>Disabled: {disabled}</p>
  <p>Hand: {hand}</p>
  <p>Graveyard: {graveyard}</p>
  <p>Table: {table}</p>
  <!-- <p>Table Size: table{tableBorder} hand{handBorder}</p> -->
  <p>Mouse x:{mousex} y:{mousey}</p>
  <br />
  <p>Freeze: {freeze}</p>
  <p>emf5: {emf5}</p>
  <p>Orbs: {orbs}</p>
  <p>Spirit Box: {spiritBox}</p>
  <p>Ghost Writing: {ghostWriting}</p>
  <p>Fingerprints: {fingerprints}</p>
</div>
<div class="tester2">
  {#each filterList as filter, i}
    <FilterButton filterInfo={{ name: filter, type: filter, state: filterValues[i]}} />
  {/each}
  <button class="white" on:click="{()=>console.log($filters)}">Test</button>
</div>


<style>
  .tester2 {
    text-align: right;
    margin-right: 0.5em;
    /* backdrop-filter: blur(2px); */
  }
  .tester {
    text-align: left;
    position: absolute;
    z-index: 0;
  }
  p {
    font-size: small;
    margin: 0em;
    background-color: rgba(255, 255, 255, 0.8);
  }
</style>
