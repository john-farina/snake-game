// import drawGrid from "./drawGrid";
// import drawSnakeInGrid from "./drawSnakeInGrid";
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

function moveSnakeCoords(snakeCoords, direction) {
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

function drawSnakeInGrid(snakeCoord, grid) {
  let coords = _.cloneDeep(snakeCoord);

  grid = clearSnakeFromGrid(grid);

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

function clearSnakeFromGrid(grid) {
  let newGrid = grid;

  for (let i = 0; i < newGrid.length; i++) {
    for (let c = 0; c < newGrid[i].length; c++) {
      if (newGrid[i][c] === "HEAD") {
        newGrid[i][c] = null;
      }

      if (newGrid[i][c] === "BODY") {
        newGrid[i][c] = null;
      }

      if (newGrid[i][c] === "TAIL") {
        newGrid[i][c] = null;
      }
    }
  }

  return newGrid;
}

function growSnakeByOne(snakeCoords, snakeDirection) {
  let coords = _.cloneDeep(snakeCoords);

  // if snake is facing left place one to the right (one after tail)
  if (snakeDirection === "left") {
    //           first row,   tail row value, tail column + 1;   (add to right of tail)
    coords.push([coords[0][0], coords[coords.length - 1][1] + 1]);

    for (let i = 0; i < coords.length; i++) {
      console.log(coords[i]);
    }
  }
  return coords;
}

//// THE TEST
// (switch each functions to seperate ones, same functionality(easier))

let grid = drawGrid(4);
let snakeDirection = "left";
let snakeCoord = [
  [1, 1],
  [1, 2],
];

grid = drawSnakeInGrid(snakeCoord, grid);

// snakeCoord = moveSnakeCoords(snakeCoord, "right");
snakeCoord = growSnakeByOne(snakeCoord, snakeDirection);

grid = drawSnakeInGrid(snakeCoord, grid);

for (let i = 0; i < grid.length; i++) {
  console.log(grid[i]);
}

/// (! FIXED WITH A CLEAR SNAKE FROM GRID FUNCTION !) ///
