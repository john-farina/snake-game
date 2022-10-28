import "./App.scss";
import { useEffect, useState } from "react";
import "normalize.css";
import drawGrid from "./functions/drawGrid";
import drawSnakeInGrid from "./functions/drawSnakeInGrid";
import moveSnakeCoords from "./functions/moveSnakeCoords";

// HEAD === Snake Head
// BODY === Snake Body
// TAIL === Snake Tail

function App() {
  let [grid, setGrid] = useState(drawGrid(10));
  let [snake, setSnake] = useState([
    [4, 4],
    [4, 5],
    [4, 6],
  ]);

  useEffect(() => {
    setInterval(() => {
      setGrid(() => drawSnakeInGrid(snake, grid));
    }, 1000);
  }, []);

  function leftClick() {
    setSnake(() => moveSnakeCoords(snake, "left"));
  }

  return (
    <>
      <h1>s n a k e</h1>
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
                } else if (gridItem === "HEAD") {
                  return (
                    <div className="box snake">
                      <p>S-HEAD</p>
                      <div className="snakeHead">
                        <div className="eye"></div>
                        <div className="eye"></div>
                      </div>
                    </div>
                  );
                } else if (gridItem === "BODY") {
                  return <div className="box snake snakeBody">S-BODY</div>;
                } else if (gridItem === "TAIL") {
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
      <button
        onClick={() => {
          leftClick();
        }}
      >
        left
      </button>
    </>
  );
}

export default App;
