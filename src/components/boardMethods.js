import catalog from './catalog';
// Recalculates which cards are filtered and where they ought to be.
export function shuffle(filters, {table}, board) {
  console.log("==== Shuffle started ====");
  let cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let handArray = [], graveyardArray = [], disabledArray = [];
  console.log("What is filters?", filters)
  for (let card of cards) {
    const filterArray = Object.values(filters);
    const cardArray = Object.values(catalog[card].evidence);
    let toGraveyard = false;
    // compare each line of evidence to the evidence provided by the filters.
    for (let i = 0; i < filterArray.length; i++) {
      let entry = filterArray[i];
      // console.log("Entry =", entry, "compared to = ", cardArray[i])
      if (entry !== "unknown" && entry !== cardArray[i]) {
        console.log("Adding to graveyard");
        toGraveyard = true;
        break;
      }
    };
    // Add each card to destination list and track whether it is disabled.
    if (card === table[0]) {
      // Doesn't actually work because of unreadable state
      console.log("table card detected")
      disabledArray.push(toGraveyard);
    } else if (toGraveyard === false) {
      handArray.push(card);
      disabledArray.push(toGraveyard);
    } else {
      graveyardArray.push(card);
      disabledArray.push(toGraveyard);
    };
  };
  console.log("hand:", handArray, "graveyard:", graveyardArray, "disabled:", disabledArray)
  board.update(board => ({ ...board, "disabled": disabledArray, "hand": handArray, "graveyard": graveyardArray })
  );
  console.log("==== Shuffle ended ====");
};


export function drop(card, hover, currentBoard, board) {
  //
  // Needs to be tweaked to sort the cards every time something is updated. 
  // Introduce a sorting function to handle this..
  //
  console.log("==== Drop started ====");
  const { disabled, table, hand } = currentBoard;
  const destination = hover;
  const location = (table[0] === card) ? "table" : hand.includes(card) ? "hand" : "graveyard";
  console.log("Calculating Drop ...")
  console.log("destination: ", destination, "location: ", location, "card: ", card);
  if (location === destination) {
  } else if (destination === "table" && table.length > 0) {
    // add the card to the table, move the table card to wherever.
    let tableCardState = disabled[table[0]];
    let locList = [...currentBoard[tableCardState ? "graveyard" : "hand"]]
    locList.push(table);
    board.update(board => ({ ...board, ["table"]: card, [tableCardState ? "graveyard" : "hand"]: locList }));
  } else {
    // remove the card from the location and add to the destination.
    // having an issue here ("not iterable")
    let locList = [...currentBoard[location]], destList = [...currentBoard[destination]];
    console.log("locList:", locList);
    locList.splice(locList.indexOf(card), 1);
    // there could be a quicksort here.
    destList.push(card);
    board.update(board => ({ ...board, [location]: locList, [destination]: destList }));
    console.log("==== Drop Complete ====")
  }
};

export function reset() {
  set({
    disabled: [false, false, false, false, false, false, false, false, false, false, false, false],
    "hand": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    "graveyard": [],
    "table": []
  }
  )
};

