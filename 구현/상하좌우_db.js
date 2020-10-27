const n = 5;
const plans = ["R", "R", "R", "U", "D", "D"];
let x = 1;
let y = 1;

const moveTypes = ["L", "R", "U", "D"];
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

for (let plan of plans) {
  for (let i in moveTypes) {
    if (moveTypes[i] === plan) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;

      if (nx < 1 || ny < 1 || nx > n || ny > n) continue;
      x = nx;
      y = ny;
    }
  }
}

console.log(`${x} ${y}`);
