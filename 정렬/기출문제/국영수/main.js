const input = require("fs").readFileSync("stdin.txt").toString().trim().split("\n");
// const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n")
const n = +input[0];
let arr = input.slice(1).map((e) =>
  e.split(" ").map((e, i) => {
    if (i >= 1) e = +e;
    return e;
  })
);

arr.sort((a, b) => {
  if (a[1] === b[1]) {
    if (a[2] === b[2]) {
      if (a[3] === b[3]) {
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
      }
      if (a[3] < b[3]) return 1;
      if (a[3] > b[3]) return -1;
    }
    if (a[2] < b[2]) return -1;
    if (a[2] > b[2]) return 1;
  }
  if (a[1] < b[1]) return 1;
  if (a[1] > b[1]) return -1;
});

let res = "";
for (let student of arr) {
  res += student[0] + "\n";
}
console.log(res.trim());
