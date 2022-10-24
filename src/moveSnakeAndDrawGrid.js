const _ = require("lodash");

function drawSnakeInGrid(snakeCoord) {
  let grid = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ];

  // draw snake in grid using snakeCoords
  for (let i = 0; i < snakeCoord.length; i++) {
    let rowCoord = snakeCoord[i][0];
    let columnCoord = snakeCoord[i][1];
    console.log("drawSnakeInGridFunction", snakeCoord[i]);

    //if (first element in array?) = Head
    if (i === 0) {
      grid[rowCoord][columnCoord] = "HEAD";
    } else if (i === snakeCoord.length - 1) {
      //last element in array
      grid[rowCoord][columnCoord] = "TAIL";
    } else {
      grid[rowCoord][columnCoord] = "BODY";
    }
  }

  return grid;
}

export default function moveSnakeAndDrawGrid(snakeCoords, direction) {
  let snakeCoord = _.cloneDeep(snakeCoords);

  //first grid test (using default coord - no moving)
  drawSnakeInGrid(snakeCoord);

  if (direction === "left") {
    // Remove LAST
    snakeCoord.pop();

    // place FIRST: get head row & get head column - 1 = (left)
    snakeCoord.unshift([snakeCoord[0][0], snakeCoord[0][1] - 1]);

    console.log("after the shift to left");
    return drawSnakeInGrid(snakeCoord);
  }
}

///////// (!NODE TESTS!)
// each row is 0-4
// let snakeCoords = [
//   [2, 1],
//   [2, 2],
//   [2, 3],
// ];
// moveSnakeAndDrawGrid(snakeCoords, "left");
