<script>
import { boardState } from "./stores";
export let filterInfo = {
  name: "Freezing",
  type: freeze
};

const filterType = () => {
  // for every entry of the array boardstate.hand
  let newHand, newGraveyard;
  // boardState lists have to evidence entry!!!!
  for (const [i, entry] of boardState.hand.entries()) { 
    let value = entry.evidence[filterInfo.type];
    // if the type is false
    // This really needs to be a switch based on the input of the function (true/false/unknown??)
    // Right now this function only filters for positive matches, not negative, and not unknown.
    value ? newHand.push(value) : newGraveyard.push(value);
  }
  update(state => ({...state, hand:newHand, graveyard:newGraveyard}));
}

// This creates a new array of matches. This are the indexes for the elements that should be removed from the hand.
let addToGraveyard = boardState.evidence.filter(entry => entry[!filterInfo.entry]);
</script>

<div>

</div>

<style>

</style>