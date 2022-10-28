import drawSnakeInGrid from "./functions/drawSnakeInGrid";
import moveSnakeCoords from "./functions/moveSnakeCoords";
import growSnakeByOne from "./functions/growSnakeByOne";
import drawGrid from "./functions/drawGrid";

// DEFAULT GRID I SET UP IS THIS
//           c o l u m n
//       0     1     2     3
// r  0 [null, null, null, null],
// o  1 [null, null, null, null],
// w  2 [null, null, null, null],
//    3 [null, null, null, null],

test("should grow one length to the right", () => {
  //0 - - - -
  //1 - H T -
  //2 - - - -
  //3 - - - -
  let snakeDirection = "left";
  let snakeCoords = [
    [1, 1],
    [1, 2],
  ];
  let grid = drawGrid(4);

  snakeCoords = growSnakeByOne(snakeCoords, snakeDirection);
  grid = drawSnakeInGrid(snakeCoords, grid);

  let movedGrid = [
    [null, null, null, null],
    [null, "HEAD", "BODY", "TAIL"],
    [null, null, null, null],
    [null, null, null, null],
  ];

  expect(grid).toStrictEqual(movedGrid);
});

///////////////////////////////// MOVEMENT TESTS
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

  snakeCoords = moveSnakeCoords(snakeCoords, "down");
  grid = drawSnakeInGrid(snakeCoords, grid);

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

  snakeCoords = moveSnakeCoords(snakeCoords, "up");
  grid = drawSnakeInGrid(snakeCoords, grid);

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

  snakeCoords = moveSnakeCoords(snakeCoords, "right");
  grid = drawSnakeInGrid(snakeCoords, grid);

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

  snakeCoords = moveSnakeCoords(snakeCoords, "left");
  grid = drawSnakeInGrid(snakeCoords, grid);

  expect(grid).toStrictEqual(movedGrid);
});
