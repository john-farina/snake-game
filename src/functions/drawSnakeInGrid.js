import drawGrid from "./drawGrid";

export default function drawSnakeInGrid(snakeCoord) {
  let grid = drawGrid(4);

  // draw snake in grid using snakeCoords
  for (let i = 0; i < snakeCoord.length; i++) {
    let rowCoord = snakeCoord[i][0];
    let columnCoord = snakeCoord[i][1];

    //if (first element in array?) = HEAD
    if (i === 0) {
      grid[rowCoord][columnCoord] = "HEAD";
    } else if (i === snakeCoord.length - 1) {
      //if (last element in array?) = TAIL
      grid[rowCoord][columnCoord] = "TAIL";
    } else {
      grid[rowCoord][columnCoord] = "BODY";
    }
  }

  return grid;
}
