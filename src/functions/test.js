const _ = require("lodash");

function drawGrid(columnRow) {
  let drawnGrid = [];

  for (let r = 0; r < columnRow; r++) {
    let row = [];

    for (let c = 0; c < columnRow; c++) {
      row.push(null);
    }

    drawnGrid.push(row);
  }

  return drawnGrid;
}

function moveSnakeInGrid(snakeCoords, direction) {
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

function drawSnakeInGrid(snakeCoord, grid, direction) {
  let coords = _.cloneDeep(snakeCoord);

  // console.log("before");
  // for (let i = 0; i < coords.length; i++) {
  //   console.log(coords[i]);
  // }

  if (direction === "left") {
    coords = moveSnakeInGrid(coords, "left");
    // for (let i = 0; i < coords.length; i++) {
    //   console.log(coords[i]);
    // }
    // console.log("COORDS", coords);
  }

  // draw snake in grid using snakeCoords
  for (let i = 0; i < coords.length; i++) {
    let rowCoord = coords[i][0];
    let columnCoord = coords[i][1];

    //if (first element in array?) = HEAD
    if (i === 0) {
      grid[rowCoord][columnCoord] = "HEAD";
    } else if (i === coords.length - 1) {
      //if (last element in array?) = TAIL
      grid[rowCoord][columnCoord] = "TAIL";
    } else {
      grid[rowCoord][columnCoord] = "BODY";
    }
  }

  return grid;
}

let grid = drawGrid(4);

for (let i = 0; i < grid.length; i++) {
  console.log(grid[i]);
}

let snakeCoord = [
  [3, 1],
  [3, 2],
  [3, 3],
];

grid = drawSnakeInGrid(snakeCoord, grid);

console.log("spawn snake:");
for (let i = 0; i < grid.length; i++) {
  console.log(grid[i]);
}

// snakeCoord = moveSnakeInGrid(snakeCoord, "left");
grid = drawSnakeInGrid([], grid);
grid = drawSnakeInGrid(snakeCoord, grid, "left");

console.log("move snake left:");
for (let i = 0; i < grid.length; i++) {
  console.log(grid[i]);
}
