const [n, m] = [5, 6];
const map = ["101010", "111111", "000001", "111111", "111111"].map((e) => e.split("").map((i) => +i));
let ans = bfs([0, 0]);
console.log(ans);

function bfs(start) {
  let q = [];
  q.push(start);
  const dx = [0, -1, 0, 1];
  const dy = [1, 0, -1, 0];
  while (q.length) {
    let [x, y] = q.shift();
    if (x === n - 1 && y === m - 1) return map[x][y];
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && ny >= 0 && nx < n && ny < m && map[nx][ny] !== 0) {
        // visit[nx][ny] = true;
        map[nx][ny] = map[x][y] + 1;
        q.push([nx, ny]);
      }
    }
  }
}

console.log(map);
