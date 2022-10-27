const _ = require("lodash");

export default function moveSnakeCoords(snakeCoords, direction) {
  let snakeCoord = _.cloneDeep(snakeCoords);
  // first grid test (using default coord - no moving)
  // drawSnakeInGrid(snakeCoord);

  //remove tail in array then place new head in front
  snakeCoord.pop();

  if (direction === "left") {
    // place FIRST: get head row & get head column - 1 = (left)
    snakeCoord.unshift([snakeCoord[0][0], snakeCoord[0][1] - 1]);

    console.log("Left", snakeCoord);
    return snakeCoord;
  }

  if (direction === "right") {
    // take head coord and add one to column (right)
    snakeCoord.unshift([snakeCoord[0][0], snakeCoord[0][1] + 1]);

    console.log("Right", snakeCoord);
    return snakeCoord;
  }

  if (direction === "up") {
    // get head row - 1 (up); take head column num (default for up)
    snakeCoord.unshift([snakeCoord[0][0] - 1, snakeCoord[0][1]]);

    console.log("Up", snakeCoord);
    return snakeCoord;
  }

  if (direction === "down") {
    // get head row + 1 (down); take head column num (default for down)
    snakeCoord.unshift([snakeCoord[0][0] + 1, snakeCoord[0][1]]);

    console.log("Down", snakeCoord);
    return snakeCoord;
  }
}
