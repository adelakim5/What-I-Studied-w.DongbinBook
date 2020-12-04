const input = require("fs").readFileSync("stdin.txt").toString().trim().split("\n");
const n = +input[0];
let arr = input[1]
  .split(" ")
  .map((e) => +e)
  .sort((a, b) => a - b);
console.log(arr[Math.floor(n / 2)]);
