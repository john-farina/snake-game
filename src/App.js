import "./App.scss";
import { useEffect, useMemo, useRef, useState } from "react";
import "normalize.css";
import drawGrid from "./functions/drawGrid";
import moveSnakeCoords from "./functions/moveSnakeCoords";
import randomFoodCoords from "./functions/randomFoodCoords";

// HEAD === Snake Head
// BODY === Snake Body
// TAIL === Snake Tail

function App() {
  let [snake, setSnake] = useState([
    [8, 8],
    [8, 9],
    [7, 9],
    [6, 9],
    [5, 9],
    [4, 9],
  ]);
  const foodCoords = useRef(randomFoodCoords());
  const grid = useMemo(
    () => drawGrid(10, snake, foodCoords.current),
    [snake, foodCoords.current]
  );
  const snakeDirection = useRef("left");
  const gameStart = useRef(false);

  useEffect(() => {
    const snakeInterval = setInterval(() => {
      if (gameStart.current) {
        setSnake((s) => moveSnakeCoords(s, snakeDirection.current));
      }
    }, 120);

    return () => clearInterval(snakeInterval);
  }, []);

  function allClicks(direction) {
    if (direction === "left") {
      snakeDirection.current = "left";
    }

    if (direction === "right") {
      snakeDirection.current = "right";
    }

    if (direction === "down") {
      snakeDirection.current = "down";
    }

    if (direction === "up") {
      snakeDirection.current = "up";
    }
  }

  const handleKeyDown = (event) => {
    console.log("pressed ", event.key);

    if (event.key === "ArrowUp") {
      allClicks("up");
    }

    if (event.key === "ArrowDown") {
      allClicks("down");
    }

    if (event.key === "ArrowLeft") {
      allClicks("left");
    }

    if (event.key === "ArrowRight") {
      allClicks("right");
    }

    if (event.key === "Enter") {
      if (!gameStart.current) {
        gameStart.current = true;
      } else {
        gameStart.current = false;
      }
    }
  };

  return (
    <>
      <h1>s n a k e</h1>
      <div className="gridContainer" onKeyDown={handleKeyDown} tabIndex="0">
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
                } else if (gridItem === "FOOD") {
                  return (
                    <div className="box food">
                      <p>FOOD</p>
                    </div>
                  );
                } else if (gridItem === "HEAD") {
                  return (
                    <div className="box snake">
                      <div className="snakeHead">
                        <div className="eye"></div>
                        <div className="eye"></div>
                      </div>
                    </div>
                  );
                } else if (gridItem === "BODY") {
                  return <div className="box snake snakeBody"></div>;
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

      <button onClick={() => allClicks("left")}>left</button>

      <button
        onClick={() => {
          allClicks("up");
        }}
      >
        up
      </button>

      <button
        onClick={() => {
          allClicks("down");
        }}
      >
        down
      </button>

      <button
        onClick={() => {
          allClicks("right");
        }}
      >
        right
      </button>

      <button onClick={() => (gameStart.current = true)}>start</button>

      <button onClick={() => (gameStart.current = false)}>stop</button>
    </>
  );
}

export default App;
