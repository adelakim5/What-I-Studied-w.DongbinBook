// const [n, m, k] = [5, 7, 2];
const [n, m, k] = [5, 8, 3];
const arr = [2, 4, 5, 4, 6];
// const arr = [3, 4, 3, 4, 3];
const arrCopy = arr.slice().sort((a, b) => b - a);
let temp = "";
let sum = 0;
let totalCnt = 0;
let cnt = 0;
while (totalCnt < m) {
  temp += arrCopy[0] + " ";
  sum += arrCopy[0];
  cnt++;
  totalCnt++;
  if (cnt === k) {
    sum += arrCopy[1];
    temp += arrCopy[1] + " ";
    totalCnt++;
    cnt = 0;
  }
}
console.log(`temp: ${temp}`);
console.log(sum);
