<script>
  import board, { filters } from "./stores";
  import FilterButton from './FilterButton.svelte'
  $: ({disabled, hover, hand, graveyard, table} = $board);
  $: ({ freeze, emf5, orbs, spiritBox, ghostWriting, fingerprints } = $filters);
  const filterList = Object.keys($filters);
  $: filterValues = Object.values($filters);
</script>

<div class="tester">
  <p>Disabled: {disabled}</p>
  <p>Hover: {hover}</p>
  <p>Hand: {hand}</p>
  <p>Graveyard: {graveyard}</p>
  <p>Table: {table}</p>
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
  }
  p {
    font-size: small;
    margin: 0em;
    background-color: rgba(255, 255, 255, 0.8);
  }
</style>
