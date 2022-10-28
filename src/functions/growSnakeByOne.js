const _ = require("lodash");

export default function growSnakeByOne(snakeCoords, snakeDirection) {
  let coords = _.cloneDeep(snakeCoords);

  // if snake is facing left place one to the right (one after tail)
  if (snakeDirection === "left") {
    //           first row,   tail row value, tail column + 1;   (add to right of tail)
    coords.push([coords[0][0], coords[coords.length - 1][1] + 1]);

    for (let i = 0; i < coords.length; i++) {
      console.log(coords[i]);
    }
  }
  return coords;
}
