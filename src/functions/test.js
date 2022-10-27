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

function clearSnakeFromGrid(grid) {
  for (let i = 0; i < grid.length; i++) {
    // console.log(newGrid[i]);
    for (let c = 0; c < grid[i].length; c++) {
      // console.log(newGrid[i][c]);
      if (grid[i][c] === "HEAD") {
        grid[i][c] = null;
      }
      if (grid[i][c] === "BODY") {
        grid[i][c] = null;
      }
      if (grid[i][c] === "TAIL") {
        grid[i][c] = null;
      }
    }
  }
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

function drawSnakeInGrid(snakeCoord, grid, direction) {
  let coords = _.cloneDeep(snakeCoord);

  clearSnakeFromGrid(grid);

  if (direction === "left") {
    coords = moveSnakeCoords(coords, "left");
  }
  if (direction === "right") {
    coords = moveSnakeCoords(coords, "right");
  }
  if (direction === "up") {
    coords = moveSnakeCoords(coords, "up");
  }
  if (direction === "down") {
    coords = moveSnakeCoords(coords, "down");
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

//// THE TEST (switch each functions to seperate ones, same functionality(easier))
let grid = drawGrid(4);

let snakeCoord = [
  [3, 2],
  [3, 1],
];

grid = drawSnakeInGrid(snakeCoord, grid, "right");

/// (! FIXED WITH A CLEAR SNAKE FROM GRID FUNCTION !) ///
