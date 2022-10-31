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
// 15x15 grid always (idk why thats what i chose)

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
  let snakeUpdateTime = 120;

  //take a number make it 000 and return the number requested ex: getStyledNum(8, 1) === 0
  //            getStyledNum(8, 3) === 8 (because its returning 008 technically)
  //
  function getStyledNum(number, whichPlace) {
    let numStr = (number - 2).toString();
    let array = [];

    if (numStr.length === 1) {
      array.push(0);
      array.push(0);
    }

    if (numStr.length === 2) {
      array.push(0);
    }

    for (let i = 0; i < numStr.length; i++) {
      array.push(Number(numStr[i]));
    }

    // console.log(array);

    if (whichPlace === 1) {
      return array[0];
    }

    if (whichPlace === 2) {
      return array[1];
    }

    if (whichPlace === 3) {
      return array[2];
    }
  }
  console.log(getStyledNum(16, 1));

  function eatCube() {
    setSnake((s) => growSnakeByOne(s, snakeDirection.current));
    foodCoords.current = randomFoodCoords(snake);
  }

  function foodToHeadCollision(snakeHeadCoords, foodCoords) {
    // console.time("foodToHeadCollision");
    if (
      snakeHeadCoords[0][0] === foodCoords[0] &&
      snakeHeadCoords[0][1] === foodCoords[1]
    ) {
      eatCube();
    } else {
    }
    // console.timeEnd("foodToHeadCollision");
  }

  function snakeToWallCollision(snake, gridSize, gameStart) {
    let size = gridSize - 1;
    let headRow = snake[0][0];
    let headColumn = snake[0][1];

    // if going left & snakeColumn = 0 (LOOSE)
    if (headColumn === 0) {
      //time out so u can quickly move and avoid dying
      setTimeout(() => {
        if (snakeDirection.current === "left") {
          alert("you stink loser");
          gameStart.current = false;
        }
      }, snakeUpdateTime - 50);
    }

    // if going right & snakeColumn = gridSize (LOOSE)
    if (headColumn === size) {
      setTimeout(() => {
        if (snakeDirection.current === "right") {
          alert("you stink loser");
          gameStart.current = false;
        }
      }, snakeUpdateTime - 50);
    }

    // if going up & snakeRow = 0 (LOOSE)
    if (headRow === 0) {
      setTimeout(() => {
        if (snakeDirection.current === "up") {
          alert("you stink loser");
          gameStart.current = false;
        }
      }, snakeUpdateTime - 50);
    }

    // if going down & snakeRow = gridSize(LOOSE)
    if (headRow === size) {
      setTimeout(() => {
        if (snakeDirection.current === "down") {
          alert("you stink loser");
          gameStart.current = false;
        }
      }, snakeUpdateTime - 50);
    }
  }

  const foodCollision = useMemo(
    () => foodToHeadCollision(snake, foodCoords.current),
    [snake]
  );

  const { scoreOne, scoreTwo, scoreThree } = useMemo(() => {
    const one = getStyledNum(snake.length, 1);
    const two = getStyledNum(snake.length, 2);
    const three = getStyledNum(snake.length, 3);

    return { scoreOne: one, scoreTwo: two, scoreThree: three };
  }, [snake]);

  const { snakeToSnakeCollis, snakeToWallCollis } = useMemo(() => {
    // {destructuring, stuff, wow}
    // const { a, b } = { a: "hello", b: "hello from b" };

    const snakeToSnakeCollided = snakeToSnakeCollision(snake, gameStart);

    const snakeToWallCollided = snakeToWallCollision(
      snake,
      grid.length,
      gameStart
    );

    return {
      snakeToSnakeCollis: snakeToSnakeCollided,
      snakeToWallCollis: snakeToWallCollided,
    };
  }, [snake]);

  useEffect(() => {
    const snakeInterval = setInterval(() => {
      if (gameStart.current) {
        setSnake((s) =>
          moveSnakeCoords(s, snakeDirection.current, grid.length)
        );
      }
    }, snakeUpdateTime);

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
    // console.log("pressed ", event);

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
      {/* <h1>s n a k e</h1>
      <h2>{snakeDirection.current}</h2> */}
      <main className="device" onKeyDown={handleKeyDown} tabIndex="0">
        <div className="gridContainer">
          <div className="topRow">
            <div className="scoreCounter">
              <div className="number">
                <p>{scoreOne}</p>
              </div>
              <div className="number">
                <p>{scoreTwo}</p>
              </div>
              <div className="number">
                <p>{scoreThree}</p>
              </div>
            </div>
          </div>
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
                    return <div className="box snake snakeTail"></div>;
                  }
                })}
              </div>
            );
          })}
        </div>

        <div className="buttonContainer">
          <div className="top">
            <button
              onTouchStart={() => handleKeyDown("MoveUp")}
              onClick={() => handleKeyDown("MoveUp")}
            >
              up
            </button>
          </div>

          <div className="middle">
            <button
              onTouchStart={() => handleKeyDown("MoveLeft")}
              onClick={() => handleKeyDown("MoveLeft")}
            >
              left
            </button>

            <button
              onTouchStart={() => handleKeyDown("MoveRight")}
              onClick={() => handleKeyDown("MoveRight")}
            >
              right
            </button>
          </div>

          <div className="bottom">
            <button
              onTouchStart={() => handleKeyDown("MoveDown")}
              onClick={() => handleKeyDown("MoveDown")}
            >
              down
            </button>
          </div>
        </div>

        <button onClick={() => (gameStart.current = true)}>start</button>

        <button onClick={() => (gameStart.current = false)}>stop</button>
      </main>
    </>
  );
}

export default App;
