// let [n, k] = [25, 3];
// let cnt = 0;

// while (true) {
//   if (n === 1) break;
//   n = n % k === 0 ? Math.floor(n / k) : n - 1;
//   cnt++;
// }

// console.log(cnt);

// 만약 n이 100억 이상의 큰 수라면?
// n이 k의 배수가 되도록 효율적으로 한 번에 빼는 방식으로 소스코드를 작성
let [n, k] = [25, 3];
let cnt = 0;
while (true) {
  if (n === 1) break;
  if (n === 2) {
    cnt++;
    break;
  }
  if (n % k !== 0) {
    const diff = n - Math.floor(n / k) * k;
    cnt += diff;
    n -= diff;
  }
  n = Math.floor(n / k);
  cnt++;
}

console.log(cnt);
