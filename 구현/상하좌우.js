const n = 5;
const plans = ["R", "R", "R", "U", "D", "D"];

let [currX, currY] = [1, 1];
for (let plan of plans) {
  [currX, currY] = go(plan, currX, currY);
}

console.log(`${currX} ${currY}`);

function go(currDirection, currX, currY) {
  switch (currDirection) {
    case "R":
      if (currY + 1 > n) return [currX, currY];
      currY++;
      break;
    case "L":
      if (currY - 1 < 1) return [currX, currY];
      currY++;
      break;
    case "U":
      if (currX - 1 < 1) return [currX, currY];
      currX--;
      break;
    case "D":
      if (currX + 1 > n) return [currX, currY];
      currX++;
      break;
  }
  return [currX, currY];
}
