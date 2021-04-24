import catalog from "./catalog";

const catalogAnalog = {
  freeze: true,
  emf5: false,
  orbs: false,
  spiritBox: true,
  ghostWriting: false,
  fingerPrints: true
};

const filters = {
  freeze: false,
  emf5: "unknown",
  orbs: "unknown",
  spiritBox: "unknown",
  ghostWriting: "unknown",
  fingerPrints: "unknown"
}

// All twelve cards are compared 
const compare = (id) => {
  const filterArray = Object.values(filters);
  // const cardArray = Object.values(catalog[id].evidence);
  const cardArray = Object.values(catalogAnalog);
  let graveyard = false;
  for (let i=0; i < filterArray.length; i++) {
    let entry = filterArray[i];
    console.log("Entry = ", entry, "compared to = ", cardArray[i])
    if (cardArray[i] !== entry || cardArray[i] !== "unknown") {
      graveyard = true;
      break
    }
  }
  console.log(`${graveyard ? "Add to graveyard" : "Add to hand"}`);
}

compare();

// Retired shuffle method:

// shuffle(evidence, value) {
//   // value is t/f 
//   let nH, nG;
//   if (value === "unknown") {
//     // refilter the entire list?
//   } else {
//     // for each card in the hand, check if it matches the value keep in hand 
//     for (card of board.hand) {
//       catalog[card][evidence] === value ? nH.push(card) : nG.push(card);
//     }
//     // for each card in the graveyard, check if it matches the value move to hand
//     for (card of board.graveyard) {
//       catalog[card][evidence] === value ? nH.push(card) : nG.push(card);
//     }
//   }
//   // chech the graveyard for the opposite and pull it out.
//   update(board => ({ ...board, hand: newHand, graveyard: newGraveyard }))
//   //WHILE THIS IS COOL IT DOESN'T EVALUATE UNKNOWN.
// }

// if (card === state.table.cardId) {
//   graveyard = "exclude";
//   state.table.returnTo = "hand";
//   if (cardArray[i] !== entry || cardArray[i] !== "unknown") {
//     state.table.returnTo = "graveyard"; 
//     break;
//   }
// }

// let newHand, newGraveyard;

// update(state => ({...state, table: {...state.table, returnTo: toGraveyard ? "graveyard" : "hand"}}));