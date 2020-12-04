const array = [15, 27, 12];

// function countSort(array) {
//   let count = Array(Math.max(...array) + 1).fill(0);
//   for (let a of array) {
//     count[a]++;
//   }
//   let res = "";
//   for (let i = count.length - 1; i >= 0; i--) {
//     if (count[i] === 0) continue;
//     res += i + "\n";
//   }
//   return res.trim();
// }

// console.log(countSort(array));

// 데이터가 10,000개 이하이므로 어떤 정렬을 사용해도 무방
let res = "";
array.sort((a, b) => b - a).forEach((e) => (res += e + "\n"));
console.log(res.trim());
