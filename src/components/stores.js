import { writable } from 'svelte/store';
import catalog from './catalog';

export const filters = writable({
  freeze: "unknown",
  emf5: "unknown",
  orbs: "unknown",
  spiritBox: "unknown",
  ghostWriting: "unknown",
  fingerPrints: "unknown"
});

const board = () => {

  const state = {
    disabled: [false,false,false,false,false,false,false,false,false,false,false,false],
    "hand": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    "graveyard": [],
    "table": [],
    hover: false
  }

  const { subscribe, set, update } = writable(state);

  const methods = {
    shuffle() {
      let cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      let hand = [], graveyard = [], disabled = [];
      for (card of cards) {
        const filterArray = Object.values(filters);
        const cardArray = Object.values(catalog[card].evidence);
        let toGraveyard = false;
        // compare each line of evidence to the evidence provided by the filters.
        for (let i=0; i < filterArray.length; i++) {
          let entry = filterArray[i];
          console.log("Entry = ", entry, "compared to = ", cardArray[i])
          if (cardArray[i] !== entry || cardArray[i] !== "unknown") {
            toGraveyard = true; 
            break;
          }
        };
        // Add each card to destination list and track whether it is disabled.
        if (card === state["table"][0]) {
          disabled.push(toGraveyard);
        } else if (toGraveyard === false) {
          hand.push(card);
          disabled.push(toGraveyard);
        } else {
          graveyard.push(card);
          disabled.push(toGraveyard);
        };
      };
      update(state => ({...state, "disabled":disabled, "hand":hand, "graveyard":graveyard}));
    },

    drop(card) {
      const destination = state.hover;
      const location = (state["table"][0] === card) ? "table" : state["hand"].includes(card) ? "hand" : "graveyard";
      if (location === destination) {
        break
      // remove the card from the location and add to the destination.
      } else if (destination === "table") {
        // add the card to the table, move the table card to wherever.
        if (state["table"].length > 0) {
          let tableCardState = state.disabled[state["table"][0]];
          let locList = [...state[tableCardState ? "graveyard" : "hand"]]
          locList.push(state.table);
          update(state => ({...state, ["table"]:card, [tableCardState ? "graveyard" : "hand"]:locList}));
        } else {
          update(state => ({...state, ["table"]:card}));
        }
      } else {
        let locList = [...state[location]], destList = [...state[destination]];
        locList.splice(locList.indexOf(card),1);
        destList.push(card);
        update(state => ({...state, [location]:locList, [destination]:destList}));
      }
    },

    reset() {
      set({
          disabled: [false,false,false,false,false,false,false,false,false,false,false,false],
          "hand": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          "graveyard": [],
          "table": [],
          hover: false
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