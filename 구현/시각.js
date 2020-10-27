const n = 5;

let cnt = 0;

for (let i = 0; i <= n; i++) {
  for (let j = 0; j < 60; j++) {
    for (let k = 0; k < 60; k++) {
      const str = k.toString() + j.toString() + i.toString();
      if (str.includes("3")) cnt++;
    }
  }
}

console.log(cnt);
