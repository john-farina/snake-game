const _ = require("lodash");
import drawSnakeInGrid from "./drawSnakeInGrid";

export default function moveSnakeInGrid(snakeCoords, direction) {
  let snakeCoord = _.cloneDeep(snakeCoords);

  // first grid test (using default coord - no moving)
  drawSnakeInGrid(snakeCoord);

  //remove tail in array then place new head in front
  snakeCoord.pop();

  if (direction === "left") {
    // place FIRST: get head row & get head column - 1 = (left)
    snakeCoord.unshift([snakeCoord[0][0], snakeCoord[0][1] - 1]);

    console.log("Left");
    return drawSnakeInGrid(snakeCoord);
  }

  if (direction === "right") {
    // take head coord and add one to column (right)
    snakeCoord.unshift([snakeCoord[0][0], snakeCoord[0][1] + 1]);

    console.log("Right");
    return drawSnakeInGrid(snakeCoord);
  }

  if (direction === "up") {
    // get head row - 1 (up); take head column num (default for up)
    snakeCoord.unshift([snakeCoord[0][0] - 1, snakeCoord[0][1]]);

    console.log("Up");
    return drawSnakeInGrid(snakeCoord);
  }

  if (direction === "down") {
    // get head row + 1 (down); take head column num (default for down)
    snakeCoord.unshift([snakeCoord[0][0] + 1, snakeCoord[0][1]]);

    console.log("Down");
    return drawSnakeInGrid(snakeCoord);
  }
}

/////////////////////// (!NODE TESTS!)
// each row is 0-4

// let snakeCoords = [
//   [2, 1],
//   [2, 2],
//   [2, 3],
// ];
// moveSnakeAndDrawGrid(snakeCoords, "left");

// let coord = [
//   [2, 2],
//   [2, 1],
//   [2, 0],
// ];
// moveSnakeAndDrawGrid(coord, "right");

// let coords = [
//   [1, 3],
//   [2, 3],
//   [3, 3],
// ];
// moveSnakeAndDrawGrid(coords, "up");

// let coords = [
//   [2, 3],
//   [1, 3],
//   [0, 3],
// ];
// moveSnakeAndDrawGrid(coords, "down");
