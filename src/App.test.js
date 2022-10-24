import moveSnakeAndDrawGrid from "./moveSnakeAndDrawGrid";

// DEFAULT GRID I SET UP IS THIS
//    0     1     2     3
// 0 [null, null, null, null],
// 1 [null, null, null, null],
// 2 [null, null, null, null],
// 3 [null, null, null, null],

test("should move one space to left", () => {
  let snakeCoords = [
    [2, 1],
    [2, 2],
    [2, 3],
  ];

  let movedGrid = [
    [null, null, null, null],
    [null, null, null, null],
    ["HEAD", "BODY", "TAIL", null],
    [null, null, null, null],
  ];

  expect(moveSnakeAndDrawGrid(snakeCoords, "left")).toStrictEqual(movedGrid);
});

//make a function that draws snake and gameboard
