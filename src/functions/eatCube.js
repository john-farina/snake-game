import growSnakeByOne from "./growSnakeByOne";
import randomFoodCoords from "./randomFoodCoords";

export default function eatCube(setSnake) {
  setSnake((s) => growSnakeByOne(s, snakeDirection.current));
  foodCoords.current = randomFoodCoords(snake);
}
