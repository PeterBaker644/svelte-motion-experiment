<script>
import { boardState } from "./stores";
export let filterInfo = {
  name: "Freezing",
  type: freeze
};

const filterType = () => {
  // for every entry of the array boardstate.hand
  let newHand, newGraveyard;
  for (const [i, entry] of boardState.hand.entries()) { 
    let value = entry.evidence[filterInfo.type];
    // if the type is false
    value ? newHand.push(value) : newGraveyard.push(value);
  }
  update()
}

// This creates a new array of matches. This are the indexes for the elements that should be removed from the hand.
let addToGraveyard = boardState.evidence.filter(entry => entry[!filterInfo.entry]);
</script>

<div>

</div>

<style>

</style>