export default function randomFoodCoords() {
  // let maxNum = grid.length - 1;
  let ran1 = Math.floor(Math.random() * 10);
  let ran2 = Math.floor(Math.random() * 10);
  if (ran1 !== 0) {
    ran1 += 1;
  }
  if (ran2 !== 0) {
    ran2 += 1;
  }
  return [ran1, ran2];
}
