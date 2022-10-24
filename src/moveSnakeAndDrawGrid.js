const _ = require("lodash");
const { compileString } = require("sass");

function drawSnakeInGrid(snakeCoord) {
  let grid = [
    [null, null, null, null],
    [null, null, null, null],
    //     head  body  tail
    [null, null, null, null],
    [null, null, null, null],
  ];
  //draw snake in grid using snakeCoords
  for (let i = 0; i < snakeCoord.length; i++) {
    let rowCoord = snakeCoord[i][0];
    let columnCoord = snakeCoord[i][1];
    console.log(snakeCoord[i]);

    //if first element in array
    if (i === 0) {
      grid[rowCoord][columnCoord] = "HEAD";
    } else if (i === snakeCoord.length - 1) {
      //last element in array
      grid[rowCoord][columnCoord] = "TAIL";
    } else {
      grid[rowCoord][columnCoord] = "BODY";
    }
  }

  //console.log newGrid rows for testing
  // for (rows of grid) {
  //   console.log(rows);
  // }

  return grid;
}

export default function moveSnakeAndDrawGrid(snakeCoords, direction) {
  let snakeCoord = _.cloneDeep(snakeCoords);

  console.log("first snake");
  drawSnakeInGrid(snakeCoord);

  if (direction === "left") {
    console.log("before shift");
    // for (coords in snakeCoord) {
    //   console.log(coords, snakeCoord[coords]);
    // }

    //remove tail
    snakeCoord.pop();

    // create new head that is one less then old heads column (going left)
    // get head row & get head column - 1 (left)
    snakeCoord.unshift([snakeCoord[0][0], snakeCoord[0][1] - 1]);

    console.log("after the shift to left");
    return drawSnakeInGrid(snakeCoord);
  } else {
  }
}

// each row is 0-4
let snakeCoords = [
  [2, 1],
  [2, 2],
  [2, 3],
];

// moveSnakeAndDrawGrid(snakeCoords, "left");
