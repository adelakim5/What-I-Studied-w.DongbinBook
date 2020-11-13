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
// console.log(iceBox);

let visit = Array.from(Array(n), () => Array(m).fill(false));
let cnt = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (iceBox[i][j] === "1") continue;
    if (visit[i][j]) continue;
    visit[i][j] = true;
    bfs([i, j]);
    cnt++;
  }
}

console.log(cnt);

function bfs(start) {
  let q = [];
  q.push(start);
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  while (q.length) {
    let [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
        if (visit[nx][ny] || iceBox[nx][ny] === "1") continue;
        visit[nx][ny] = true;
        q.push([nx, ny]);
      }
    }
  }
}
