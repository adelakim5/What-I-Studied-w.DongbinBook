const input = ["홍길동 95", "이순신 77"].map((e) => {
  let temp = e.split(" ");
  return [temp[0], +temp[1]];
});
let res = "";
input.sort((a, b) => a[1] - b[1]).forEach((e) => (res += e[0] + " "));
console.log(res.trim());
