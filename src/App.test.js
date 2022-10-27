import drawSnakeInGrid from "./functions/drawSnakeInGrid";
import drawGrid from "./functions/drawGrid";

// DEFAULT GRID I SET UP IS THIS
//           c o l u m n
//       0     1     2     3
// r  0 [null, null, null, null],
// o  1 [null, null, null, null],
// w  2 [null, null, null, null],
//    3 [null, null, null, null],

test("should move one space down", () => {
  let snakeCoords = [
    [2, 3],
    [1, 3],
    [0, 3],
  ];
  //0 - - - T
  //1 - - - B
  //2 - - - H
  //3 - - - -
  let movedGrid = [
    [null, null, null, null],
    [null, null, null, "TAIL"],
    [null, null, null, "BODY"],
    [null, null, null, "HEAD"],
  ];
  let grid = drawGrid(4);

  //spawn snake
  grid = drawSnakeInGrid(snakeCoords, grid);

  //move snake
  grid = drawSnakeInGrid(snakeCoords, grid, "down");

  expect(grid).toStrictEqual(movedGrid);
});

test("should move one space up", () => {
  let snakeCoords = [
    [1, 3],
    [2, 3],
    [3, 3],
  ];
  //0 - - - -
  //1 - - - H
  //2 - - - B
  //3 - - - T

  let movedGrid = [
    [null, null, null, "HEAD"],
    [null, null, null, "BODY"],
    [null, null, null, "TAIL"],
    [null, null, null, null],
  ];
  let grid = drawGrid(4);

  //spawn snake
  grid = drawSnakeInGrid(snakeCoords, grid);

  //move snake
  grid = drawSnakeInGrid(snakeCoords, grid, "up");

  expect(grid).toStrictEqual(movedGrid);
});

test("should move one space to right", () => {
  let snakeCoords = [
    [2, 2],
    [2, 1],
    [2, 0],
  ];
  // - - - -
  // - - - -
  // T B H -
  // - - - -

  let movedGrid = [
    [null, null, null, null],
    [null, null, null, null],
    [null, "TAIL", "BODY", "HEAD"],
    [null, null, null, null],
  ];
  let grid = drawGrid(4);

  //spawn snake
  grid = drawSnakeInGrid(snakeCoords, grid);

  //move snake
  grid = drawSnakeInGrid(snakeCoords, grid, "right");

  expect(grid).toStrictEqual(movedGrid);
});

test("should move one space to left", () => {
  let snakeCoords = [
    [2, 1],
    [2, 2],
    [2, 3],
  ];
  // - - - -
  // - - - -
  // - H B T
  // - - - -

  let movedGrid = [
    [null, null, null, null],
    [null, null, null, null],
    ["HEAD", "BODY", "TAIL", null],
    [null, null, null, null],
  ];

  let grid = drawGrid(4);
  //spawn snake
  grid = drawSnakeInGrid(snakeCoords, grid);

  //move snake
  grid = drawSnakeInGrid(snakeCoords, grid, "left");

  expect(grid).toStrictEqual(movedGrid);
});
