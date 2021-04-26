
function defineCoords(card, {hand, graveyard, table}, {width, height}){
  let x, y, rotation;
  if (card === table[0]) {
    y = 50;
    x = 50;
    rotation = 0;
  } else if (graveyard.includes(card)) {
    // Graveyard Placement
    x = width - 250;
    y = 25 + (50 * graveyard.indexOf(card));
    rotation = 0;
  } else {
    // Hand Placement
    let space = 125
    if (width < (100 * hand.length)) {
      space = (width - 300) / hand.length;
    }
    x = ((width)/2) - ((space*hand.length)/2)+(hand.indexOf(card)+1)*space -150;
    y = height - 350;
    rotation = ((x - (width-150)/2) * 0.05);
  }
  return {x:x, y:y, rotation:rotation};
}

export default defineCoords;