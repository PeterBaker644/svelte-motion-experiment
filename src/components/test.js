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
    console.log("THESTING")
  }
  console.log(`${graveyard ? "Add to graveyard" : "Add to hand"}`);
}

compare();