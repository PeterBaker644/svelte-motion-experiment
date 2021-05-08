import catalog from './catalog';
// Recalculates which cards are filtered and where they ought to be.

const sorter = (a,b) => a-b;

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
  console.log("==== Drop started ====");
  const { disabled, table, hand } = currentBoard;
  const destination = hover;
  const location = (table[0] === card) ? "table" : hand.includes(card) ? "hand" : "graveyard";
  let locList = [...currentBoard[location]], 
      destList = [...currentBoard[destination]];
  if (location === destination) {
    // Do Nothing.
  } else if (destination === "table" && table.length > 0) {
    // add the card to the table, move the table card to wherever.
    let tableCardDest = disabled[table[0]] ? "graveyard" : "hand";
    if (tableCardDest === location) {
      // add the table card to the loclist
      locList.splice(locList.indexOf(card), 1);
      locList.push(table[0]);
      locList.sort(sorter);
      console.log(locList);
      // UPDATE
      board.update(board => ({...board, table: [card], [location]: locList}))
      // update the hand with the table card and the updated location list.
    } else {
      let returnList = [...currentBoard[tableCardDest]]
      // add the table card to the loclist
      // remove the card from the tableCardDest list
      // update all three lists
      locList.splice(locList.indexOf(card), 1);
      returnList.push(table[0]);
      returnList.sort(sorter);
      // UPDATE
      board.update(board => ({...board, table: [card], [tableCardDest]: returnList, [location]: locList }));
    }
    
  } else {
    // remove the card from the location and add to the destination.
    console.log("locList:", locList);
    locList.splice(locList.indexOf(card), 1);
    destList.push(card);
    destList.sort(sorter);
    // UPDATE
    board.update(board => ({ ...board, [location]: locList, [destination]: destList }));
  }
  console.log("==== Drop Complete ====")
};

export function reset() {
  set({
    disabled: [false, false, false, false, false, false, false, false, false, false, false, false],
    "hand": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    "graveyard": [],
    "table": []
  })
};

