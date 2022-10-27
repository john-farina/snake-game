export default function drawGrid(columnRow) {
  let drawnGrid = [];

  for (let r = 0; r < columnRow; r++) {
    let row = [];

    for (let c = 0; c < columnRow; c++) {
      row.push(null);
    }

    drawnGrid.push(row);
  }

  return drawnGrid;
}
