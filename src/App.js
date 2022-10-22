import "./App.css";
import { useState } from "react";
import "normalize.css";

// arrays with a array, strings null, "F", "S"

function App() {
  let [grid, setGrid] = useState([
    [null, null, null, "F"],
    [null, null, null, null],
    [null, null, null, null],
    ["S", null, null, null],
  ]);
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
                    <div className="box">
                      <p>GRID</p>
                    </div>
                  );
                } else if (gridItem === "F") {
                  return (
                    <div className="box">
                      <p>FOOD</p>
                    </div>
                  );
                } else if (gridItem === "S") {
                  return (
                    <div className="box">
                      <p>SNAKE</p>
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
