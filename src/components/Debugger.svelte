<script>
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
  
</script>

<svelte:window on:mousemove={setMouse}/>

<div class="readout">
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
<div class="filter-buttons">
  {#each filterList as filter, i}
    <FilterButton filterInfo={{ name: filter, type: filter, state: filterValues[i]}} />
  {/each}
  <button class="white" on:click="{()=>console.log($board)}">Test</button>
</div>


<style>
  * {
    z-index: 4;
  }
  .filter-buttons {
    text-align: right;
    margin-right: 0.5em;
    position: absolute;
    right: 0;
    /* backdrop-filter: blur(2px); */
  }
  .readout {
    text-align: left;
    position: absolute;
  }
  p {
    font-size: small;
    margin: 0em;
    background-color: rgba(255, 255, 255, 0.8);
  }
</style>
