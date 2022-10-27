import drawGrid from "./drawGrid";
import drawSnakeInGrid from "./drawSnakeInGrid";

//// THE TEST
// (switch each functions to seperate ones, same functionality(easier))

let grid = drawGrid(4);
let snakeCoord = [
  [3, 2],
  [3, 1],
];

grid = drawSnakeInGrid(snakeCoord, grid);

grid = drawSnakeInGrid(snakeCoord, grid, "right");

/// (! FIXED WITH A CLEAR SNAKE FROM GRID FUNCTION !) ///
