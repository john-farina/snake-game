import "./App.scss";
import { useState } from "react";
import "normalize.css";

// arrays with a array, strings null, "F", "S"

function App() {
  // SH === Snake Head
  // SB === Snake Body
  // ST === Snake Tai
  let [grid, setGrid] = useState([
    [null, null, null, "F", null, null],
    [null, null, null, null, null, null],
    [null, "SH", "SB", "ST", null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
  ]);

  function addRandomFoodToGrid(array) {}
  // console.log(grid);
  return (
    <>
      <h1>hello</h1>
      <div className="gridContainer">
        {grid.map((row) => {
          return (
            <div className="gridRow">
              {row.map((gridItem) => {
                if (gridItem === null) {
                  return (
                    <div className="box emptyGrid">
                      <p>GRID</p>
                    </div>
                  );
                } else if (gridItem === "F") {
                  return (
                    <div className="box food">
                      <p>FOOD</p>
                    </div>
                  );
                } else if (gridItem === "SH") {
                  return (
                    <div className="box snake">
                      <p>S-HEAD</p>
                      <div className="snakeHead">
                        <div className="eye"></div>
                        <div className="eye"></div>
                      </div>
                    </div>
                  );
                } else if (gridItem === "SB") {
                  return <div className="box snake snakeBody">S-BODY</div>;
                } else if (gridItem === "ST") {
                  return (
                    <div className="box snake snakeTail">
                      <p>S-TAIL</p>
                    </div>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
