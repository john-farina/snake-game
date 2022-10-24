import moveSnakeAndDrawGrid from "./moveSnakeAndDrawGrid";

// DEFAULT GRID I SET UP IS THIS
//           c o l u m n
//       0     1     2     3
// r  0 [null, null, null, null],
// o  1 [null, null, null, null],
// w  2 [null, null, null, null],
//    3 [null, null, null, null],

// test("should move one space to right", () => {
//   let snakeCoords = [
//     [2, 2],
//     [2, 1],
//     [2, 0],
//   ];
//   // - - - -
//   // - - - -
//   // T B H -
//   // - - - -

//   let movedGrid = [
//     [null, null, null, null],
//     [null, null, null, null],
//     [null, "TAIL", "BODY", "HEAD"],
//     [null, null, null, null],
//   ];

//   expect(moveSnakeAndDrawGrid(snakeCoords, "right")).toStrictEqual(movedGrid);
// });

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

  expect(moveSnakeAndDrawGrid(snakeCoords, "left")).toStrictEqual(movedGrid);
});

//make a function that draws snake and gameboard
