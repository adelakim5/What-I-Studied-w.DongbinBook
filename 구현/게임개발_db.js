const [n, m] = [4, 4];
let [x, y, d] = [1, 1, 0];
const map = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
];

let visit = Array.from(Array(n), () => Array(m).fill(false));
visit[x][y] = true;
// console.log(visit);

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

function turnLeft() {
  d -= 1;
  if (d === -1) d = 3;
}

let cnt = 1;
let turnTime = 0;
while (true) {
  turnLeft();
  nx = x + dx[d];
  ny = y + dy[d];
  if (!visit[nx][ny] && map[nx][ny] === "0") {
    visit[nx][ny] = true;
    x = nx;
    y = ny;
    cnt++;
    turnTime = 0;
    continue;
  } else {
    turnTime++;
  }
  if (turnTime === 4) {
    // 4 방향 모두 불가능이면
    nx = x - dx[d];
    ny = y - dy[d];
    if (map[nx][ny] === "0") {
      x = nx;
      y = ny;
    } else break;
    turnTime = 0;
  }
}

console.log(cnt);
