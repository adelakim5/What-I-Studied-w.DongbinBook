// a = 97

const input = "c2";

const [col, row] = input.split("");
let cnt = 0;
const [x, y] = [+row - 1, col.charCodeAt() - 97];

const dx = [2, 1, 2, 1, -2, -1, -2, -1];
const dy = [1, 2, -1, -2, 1, 2, -1, -2];

for (let i = 0; i < 8; i++) {
  const nx = x + dx[i];
  const ny = y + dy[i];
  if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8) {
    cnt++;
  }
}

console.log(cnt);
