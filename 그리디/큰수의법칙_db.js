// 1. 제일 큰 수와 그 다음 큰 수만 저장
let [n, m, k] = [5, 8, 3];
const data = [2, 4, 5, 4, 6].sort((a, b) => b - a);
const first = data[0];
const second = data[1];
let result = 0;

while (true) {
  for (let i = 0; i < k; i++) {
    if (!m) break; // m이 0이라면 break
    result += first;
    m -= 1; // 더할 때마다 1씩 빼기 => 앞으로 m-1개를 더해야 하니까
  }
  if (!m) break; // m만큼 다 더했으면 break
  result += second; // 두번째로 큰 수 한번 더하기
  m -= 1; // second 한번 더했으니까 m에서 -1 하기
}

console.log(result);
