import "./App.scss";
import "normalize.css";
import { useEffect, useMemo, useRef, useState } from "react";
import drawGrid from "./functions/drawGrid";
import moveSnakeCoords from "./functions/moveSnakeCoords";
import randomFoodCoords from "./functions/randomFoodCoords";
import growSnakeByOne from "./functions/growSnakeByOne";
import snakeToSnakeCollision from "./functions/snakeToSnakeCollision";

// HEAD === Snake Head
// BODY === Snake Body
// TAIL === Snake Tail

function App() {
  let [snake, setSnake] = useState([
    [8, 12],
    [8, 13],
  ]);
  const foodCoords = useRef(randomFoodCoords(snake));
  const grid = useMemo(
    () => drawGrid(15, snake, foodCoords.current),
    [snake, foodCoords.current]
  );
  const snakeDirection = useRef("left");
  const gameStart = useRef(false);

  function eatCube() {
    setSnake((s) => growSnakeByOne(s, snakeDirection.current));
    foodCoords.current = randomFoodCoords(snake);
  }

  function foodToHeadCollision(snakeHeadCoords, foodCoords) {
    if (
      snakeHeadCoords[0][0] === foodCoords[0] &&
      snakeHeadCoords[0][1] === foodCoords[1]
    ) {
      eatCube();
    } else {
    }
  }

  const foodCollision = useMemo(
    () => foodToHeadCollision(snake, foodCoords.current),
    [snake]
  );

  const snakeCollision = useMemo(
    () => snakeToSnakeCollision(snake, gameStart),
    [snake]
  );

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
      if (snakeDirection.current !== "right") {
        snakeDirection.current = "left";
      }
    }

    if (direction === "right") {
      if (snakeDirection.current !== "left") {
        snakeDirection.current = "right";
      }
    }

    if (direction === "down") {
      if (snakeDirection.current !== "up") {
        snakeDirection.current = "down";
      }
    }

    if (direction === "up") {
      if (snakeDirection.current !== "down") {
        snakeDirection.current = "up";
      }
    }
  }

  const handleKeyDown = (event, direction) => {
    console.log("pressed ", event);

    if (event.key === "f") {
      eatCube();
    }

    if (event.key === "ArrowUp" || event === "MoveUp") {
      allClicks("up");
    }

    if (event.key === "ArrowDown" || event === "MoveDown") {
      allClicks("down");
    }

    if (event.key === "ArrowLeft" || event === "MoveLeft") {
      allClicks("left");
    }

    if (event.key === "ArrowRight" || event === "MoveRight") {
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
      <h2>{snakeDirection.current}</h2>
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
                  return <div className="box food"></div>;
                } else if (gridItem === "HEAD") {
                  return (
                    <div className={`box snake ${snakeDirection.current}`}>
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

      <div className="buttonContainer">
        <div className="top">
          <button onClick={handleKeyDown.bind(this, "MoveUp")}>up</button>
        </div>

        <div className="middle">
          <button onClick={handleKeyDown.bind(this, "MoveLeft")}>left</button>

          <button onClick={handleKeyDown.bind(this, "MoveRight")}>right</button>
        </div>

        <div className="bottom">
          <button onClick={handleKeyDown.bind(this, "MoveDown")}>down</button>
        </div>
      </div>

      <button onClick={() => (gameStart.current = true)}>start</button>

      <button onClick={() => (gameStart.current = false)}>stop</button>
    </>
  );
}

export default App;
