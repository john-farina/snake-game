// import { render, screen } from "@testing-library/react";
// import App from "./App";
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import moveSnakeAndDrawGrid from "./moveSnakeAndDrawGrid";

test("should move one space to left", () => {
  // DEFAULT GRID I SET UP IS THIS
  //    0     1     2     3
  // 0 [null, null, null, null],
  // 1 [null, null, null, null],
  // 2 [null, null, null, null],
  // 3 [null, null, null, null],

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
