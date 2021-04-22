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

export const locations = writable({

})

const board = () => {

  const state = {
    locations: ["hand","hand","hand","hand","hand","hand","hand","hand","hand","hand","hand","hand",],
    hand: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    graveyard: [],
    table: {
      cardId: false,
      returnTo: false
    },
    hover: false
  }

  const { subscribe, set, update } = writable(state);

  const methods = {
    shuffle() {
      let cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      // loop through every card in the deck.
      let hand = [], graveyard = [];
      for (card of cards) {
        const filterArray = Object.values(filters);
        const cardArray = Object.values(catalog[card].evidence);
        const table = (card === state.table.cardId);
        let toGraveyard = false;
        // compare each line of evidence to the evidence provided by the filters.
        for (let i=0; i < filterArray.length; i++) {
          let entry = filterArray[i];
          console.log("Entry = ", entry, "compared to = ", cardArray[i])
          // if the card is on the table, change it's destination instead.
          if (cardArray[i] !== entry || cardArray[i] !== "unknown") {
            toGraveyard = true; 
            break;
          }
        };
        // if there are any contradictions, add the card to the graveyard, else keep in the hand.
        if (table) {
          // This might do it? I have absolutely no idea though. CHECK
          update(state => ({...state, table: {...state.table, returnTo: toGraveyard ? "graveyard" : "hand"}}));
        } else if (toGraveyard === false) {
          hand.push(card);
        } else {
          graveyard.push(card)
        };
      }
      update(state => ({state, hand:hand, graveyard:graveyard}))
    },

    drop() {

    },

    //   reset() {
    // set()
  }
  return {
    subscribe,
    ...methods
  }
};

export default board();