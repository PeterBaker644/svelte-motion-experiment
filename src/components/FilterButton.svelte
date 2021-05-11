<script>
import { board, filters } from "./stores";
import { shuffle } from "./boardMethods";
export let filterInfo = {
  name: "Freezing",
  type: "freeze",
  state: "unknown"
};

const updateFilters = (value) => {
  console.log("You clicked the button");
  filters.update(filters => ({...filters, [filterInfo.type]:value}));
  shuffle($filters, $board, board);
};

</script>

<div class="filter">
  <h3>{filterInfo.name}</h3>
  <button class="{(filterInfo.state && filterInfo.state !== "unknown") ? "white" : "grey"}" on:click="{() => updateFilters(true)}">
    Confirmed
  </button>
  <button class="{filterInfo.state === "unknown" ? "white" : "grey"}" on:click="{() => updateFilters("unknown")}">
    Unknown
  </button>
  <button class="{!filterInfo.state ? "white" : "grey"}" on:click="{() => updateFilters(false)}">
    Denied
  </button>
</div>

<style>
  h3 {
    display: inline;
    margin: 0em;
  }
  .filter {
    position: relative;
    left: 0;
  }
  .white {
    background-color: white;
  }
  .grey {
    background-color: gray;
  }
</style>