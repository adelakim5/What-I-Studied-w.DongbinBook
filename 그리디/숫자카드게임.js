// const [n, m] = [3, 3];
// const cards = [
//   [3, 1, 2],
//   [4, 1, 4],
//   [2, 2, 2],
// ];

const [n, m] = [2, 4];
const cards = [
  [7, 3, 1, 8],
  [3, 3, 3, 4],
];

let max = 0;
for (let cardRow of cards) {
  const card = cardRow.sort((a, b) => a - b);
  if (max < card[0]) max = card[0];
}
console.log(max);
