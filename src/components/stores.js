import { writable } from 'svelte/store';

export const borders = writable({
  tableBorder: "",
  handBorder: "",
  width: "",
  height: ""
})

export const filters = writable({
  freeze: "unknown",
  emf5: "unknown",
  orbs: "unknown",
  spiritBox: "unknown",
  ghostWriting: "unknown",
  fingerprints: "unknown"
});


export const board = writable({
  disabled: [false, false, false, false, false, false, false, false, false, false, false, false],
  "hand": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  "graveyard": [],
  "table": []
});