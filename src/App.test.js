// import { render, screen } from "@testing-library/react";
// import App from "./App";
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import moveSnake from "./moveSnake";

test("should move one space to left", () => {
  let grid = [
    [null, null, null, null],
    [null, null, null, null],
    [null, "SH", "SB", "ST"],
    [null, null, null, null],
  ];

  let movedGrid = [
    [null, null, null, null],
    [null, null, null, null],
    ["SH", "SB", "ST", null],
    [null, null, null, null],
  ];

  expect(moveSnake(grid, "left")).toBe(movedGrid);
});
