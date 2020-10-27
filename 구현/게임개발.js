const [n, m] = [4, 4];
const [x, y, d] = [1, 1, 0];
const map = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
];

let visit = Array.from(Array(n), () => Array(m).fill(false));
visit[x][y] = true;
let cnt = 1;
let dx = [];
let dy = [];
move(x, y, d);
console.log(cnt);

function move(x, y, d) {
  console.log(`x:${x}, y:${y}, d:${d}`);
  let nx = 0;
  let ny = 0;
  if (d === 0) {
    // 북이면
    dx = [0, 1, 0, -1];
    dy = [-1, 0, 1, 0];
    for (let i = 0; i < 4; i++) {
      nx = x + dx[i];
      ny = y + dy[i];
      if (nx > 0 && ny > 0 && nx < n - 1 && ny < n - 1) {
        if (map[nx][ny] === 0 && !visit[nx][ny]) {
          visit[nx][ny] = true;
          cnt++;
          move(nx, ny, 3);
          //   return [nx, ny, 3]; // 서로 감
        }
      }
    }
    if (x + 1 > 0 && y > 0 && x + 1 < n && y < n) {
      if (map[x + 1][y] === 0 && !visit[x + 1][y]) {
        visit[x + 1][y] = true;
        cnt++;
        move(x + 1, y, d);
      }
    }
  } else if (d === 1) {
    // 동이면
    dx = [-1, 0, 1, 0];
    dy = [0, -1, 0, 1];
    for (let i = 0; i < 4; i++) {
      nx = x + dx[i];
      ny = y + dy[i];
      if (nx > 0 && ny > 0 && nx < n - 1 && ny < n - 1) {
        if (map[nx][ny] === 0 && !visit[nx][ny]) {
          visit[nx][ny] = true;
          cnt++;
          move(nx, ny, 0);
          //   return [nx, ny, 0]; // 북으로 감
        }
      }
    }
    if (x > 0 && y - 1 > 0 && x < n && y - 1 < n) {
      if (map[x][y - 1] === 0 && !visit[x][y - 1]) {
        visit[x][y - 1] = true;
        cnt++;
        move(x, y - 1, d);
      }
    }
  } else if (d === 2) {
    // 남이면
    dx = [0, -1, 0, 1];
    dy = [1, 0, -1, 0];
    for (let i = 0; i < 4; i++) {
      nx = x + dx[i];
      ny = y + dy[i];
      if (nx > 0 && ny > 0 && nx < n - 1 && ny < n - 1) {
        if (map[nx][ny] === 0 && !visit[nx][ny]) {
          visit[nx][ny] = true;
          cnt++;
          move(nx, ny, 1);
          //   return [nx, ny, 1]; // 동으로 감
        }
      }
    }
    if (x - 1 > 0 && y > 0 && x - 1 < n && y < n) {
      if (map[x - 1][y] === 0 && !visit[x - 1][y]) {
        cnt++;
        visit[x - 1][y] = true;
        move(x - 1, y, d);
      }
    }
  } else {
    // 서면
    dx = [1, 0, -1, 0];
    dy = [0, 1, 0, -1];
    for (let i = 0; i < 4; i++) {
      nx = x + dx[i];
      ny = y + dy[i];
      if (nx > 0 && ny > 0 && nx < n - 1 && ny < n - 1) {
        if (map[nx][ny] === 0 && !visit[nx][ny]) {
          visit[nx][ny] = true;
          cnt++;
          move(nx, ny, 2);
          //   return [nx, ny, 2]; // 남으로 감
        }
      }
    }
    if (x > 0 && y + 1 > 0 && x < n && y + 1 < n) {
      if (map[x][y + 1] === 0 && !visit[x][y + 1]) {
        visit[x][y + 1] = true;
        cnt++;
        move(x, y + 1, d);
      }
    }
  }
  // 더이상 갈 길이 없으면
  return;
}
