import { writable, derived } from 'svelte/store';
import catalog from './catalog';

export const borders = writable({
  table: "",
  hand: ""
})

export const filters = writable({
  freeze: "unknown",
  emf5: "unknown",
  orbs: "unknown",
  spiritBox: "unknown",
  ghostWriting: "unknown",
  fingerprints: "unknown"
});

const board = () => {

  const state = {
    disabled: [false,false,false,false,false,false,false,false,false,false,false,false],
    "hand": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    "graveyard": [],
    "table": []
  }
  // consider rewriting so each object is its own data entry.

  const { subscribe, set, update } = writable(state);

  const methods = {

    // Recalculates which cards are filtered and where they ought to be.
    shuffle(filters) {
      let cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      let hand = [], graveyard = [], disabled = [];
      console.log("What is filters?", filters)
      for (let card of cards) {
        const filterArray = Object.values(filters);
        const cardArray = Object.values(catalog[card].evidence);
        let toGraveyard = false;
        // compare each line of evidence to the evidence provided by the filters.
        for (let i=0; i < filterArray.length; i++) {
          let entry = filterArray[i];
          // console.log("Entry =", entry, "compared to = ", cardArray[i])
          if (entry !== "unknown" && entry !== cardArray[i]) {
            console.log("Adding to graveyard");
            toGraveyard = true; 
            break;
          }
        };
        // Add each card to destination list and track whether it is disabled.
        if (card === state["table"][0]) {
          // Doesn't actually work because of unreadable state.
          console.log("table card detected")
          disabled.push(toGraveyard);
        } else if (toGraveyard === false) {
          hand.push(card);
          disabled.push(toGraveyard);
        } else {
          graveyard.push(card);
          disabled.push(toGraveyard);
        };
      };
      console.log("hand:",hand,"graveyard:",graveyard,"disabled:",disabled)
      update(state => ({...state, "disabled":disabled, "hand":hand, "graveyard":graveyard}));
    },

    //
    drop(card, hover) {
      //
      // This is a completely broken function. It will never return properly because state is never updated.
      //
      const destination = hover;
      const location = (state.table[0] === card) ? "table" : state.hand.includes(card) ? "hand" : "graveyard";
      console.log("Calculating Drop ...")
      console.log("destination: ", destination, "location: ", location, "card: ", card);
      if (location === destination) {
      } else if (destination === "table" && state["table"].length > 0) {
        // add the card to the table, move the table card to wherever.
        let tableCardState = state.disabled[state["table"][0]];
        let locList = [...state[tableCardState ? "graveyard" : "hand"]]
        locList.push(state["table"]);
        update(state => ({...state, ["table"]:card, [tableCardState ? "graveyard" : "hand"]:locList}));
      } else {
        // remove the card from the location and add to the destination.
        let locList = [...state[location]], destList = [...state[destination]];
        console.log("location:", location, locList);
        locList.splice(locList.indexOf(card),1);
        // there could be a quicksort here.
        destList.push(card);
        update(state => ({...state, [location]:locList, [destination]:destList}));
      }
    },

    reset() {
      set({
          disabled: [false,false,false,false,false,false,false,false,false,false,false,false],
          "hand": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          "graveyard": [],
          "table": []
        }
      )
    }

  }
  return {
    subscribe,
    ...methods
  }
};

export default board();