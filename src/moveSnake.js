function moveSnake(grid, direction) {
  let snakeSize = 0;
  let newGrid = grid;
  let oldHeadLocation = [];
  let tailLocation = [];
  // adding alot of comments so i can work through the issues

  //move left
  if (direction === "left") {
    //loop through each row
    for (let r = 0; r < newGrid.length; r++) {
      //loop through each item(column) in row
      for (let c = 0; c < newGrid[r].length; c++) {
        //FIND THE HEAD AND MOVE IT ONE TO THE LEFT
        if (newGrid[r][c] === "SH") {
          console.log(
            `HEAD: row: ${r}; column: ${c}; \n(newGrid[${r}][${c}] = ${newGrid[r][c]})`
          );

          snakeSize++;

          // log old location for tail to be moved too
          oldHeadLocation = [r, c];
          // cant switch it here because tail loop catches it
          newGrid[r][c] = "SB";

          if (c !== 0) {
            // 1 to left
            newGrid[r][c - 1] = "SH";
          } else {
            console.log("error there is a wall");
          }
        }

        //FIND THE TAIL AND MOVE IT TO THE EMPTY SPOT HEAD MADE WHILE ALSO CHANGING TO A BODY AND FLIPPING THE BODY AT THE END TO BE A TAIL (confusing)
        if (newGrid[r][c] === "ST") {
          console.log(
            `TAIL: row: ${r}; column: ${c}; \n(newGrid[${r}][${c}] = ${newGrid[r][c]})`
          );

          snakeSize++;

          tailLocation = [r, c];
          newGrid[r][c] = null;
          newGrid[tailLocation[0]][tailLocation[1] - 1] = "ST";
        }

        if (newGrid[r][c] === "SB") {
          console.log(
            `BODY: row: ${r}; column: ${c}; \n(newGrid[${r}][${c}] = ${newGrid[r][c]})`
          );

          snakeSize++;
        }

        //THIS IS AN EMPTY ROW LOOP NOT SURE WHAT ILL DO HERE
        console.log(`row: ${r} column: ${c}: is empty`);
      }
    }

    console.log(
      `oldHeadLocation ${oldHeadLocation}, tailLocation ${tailLocation}; ((${snakeSize}))\ngrid after changes:`
    );
    for (row of newGrid) {
      console.log(row);
    }
  }

  //move right
  if (direction === "right") {
  }
}

let grid = [
  [null, null, null, null],
  [null, null, null, null],
  [null, "SH", "SB", "ST"],
  [null, null, null, null],
];

moveSnake(grid, "left");
