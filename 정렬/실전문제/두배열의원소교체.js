let [n, k] = [5, 3];
let a = [1, 2, 5, 4, 3];
let b = [5, 5, 6, 6, 5];

a.sort((a, b) => a - b);
b.sort((a, b) => b - a);
for (let i = 0; i < k; i++) {
  if (a[i] < b[i]) {
    let temp = a[i];
    a[i] = b[i];
    b[i] = temp;
  } else break;
}

console.log(a.reduce((acc, val) => acc + val, 0));

// a = countSort(a);
// b = countSort(b);

// for (let i = 0; i < n; i++) {
//   if (a[i] < b[b.length - 1] && k > 0) {
//     a[i] = b.pop();
//     k--;
//   }
// }

// console.log(a.reduce((acc, val) => acc + val, 0));

// function countSort(array) {
//   let count = Array(Math.max(...array) + 1).fill(0);
//   for (let a of array) {
//     count[a]++;
//   }
//   let res = [];
//   for (let i = 0; i < count.length; i++) {
//     if (count[i] === 0) continue;
//     for (let j = 0; j < count[i]; j++) {
//       res.push(i);
//     }
//   }
//   return res;
// }
