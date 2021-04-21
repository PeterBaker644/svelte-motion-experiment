import { writable } from 'svelte/store';

export const boardState = writable(
  {
    hand: [],
    graveyard: [],
    table: {
      cardId: "",
      returnTo: false
    },
    hover: false, 
    drop: () => {
    },
    filter: () => {
    }
  }
);