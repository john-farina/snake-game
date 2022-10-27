import clearSnakeFromGrid from "./clearSnakeFromGrid";
import moveSnakeCoords from "./moveSnakeCoords";
const _ = require("lodash");

export default function drawSnakeInGrid(snakeCoord, grid, direction) {
  let coords = _.cloneDeep(snakeCoord);

  grid = clearSnakeFromGrid(grid);

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
