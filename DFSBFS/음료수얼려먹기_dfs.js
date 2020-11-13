const n = 15;
const m = 14;
const input = [
  ["00000111100000"],
  ["11111101111110"],
  ["11011101101110"],
  ["11011101100000"],
  ["11011111111111"],
  ["11011111111100"],
  ["11000000011111"],
  ["01111111111111"],
  ["00000000011111"],
  ["01111111111000"],
  ["00011111111000"],
  ["00000001111000"],
  ["11111111110011"],
  ["11100011111111"],
  ["11100011111111"],
];
const iceBox = input.map((e) => e[0].split(""));
let cnt = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (dfs(i, j)) cnt++;
  }
}

console.log(cnt);

function dfs(x, y) {
  if (x < 0 || y < 0 || x >= n || y >= m) return false;
  if (iceBox[x][y] === "0") {
    iceBox[x][y] = "1";
    dfs(x + 1, y);
    dfs(x, y + 1);
    dfs(x - 1, y);
    dfs(x, y - 1);
    return true;
  }
  return false;
}
