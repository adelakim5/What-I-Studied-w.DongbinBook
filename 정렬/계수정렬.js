let array = [7, 5, 9, 0, 3, 1, 6, 2, 1, 4, 8, 0, 5, 2];

function countSort(array) {
  let count = Array(Math.max(...array) + 1).fill(0);

  for (let a of array) {
    count[a]++;
  }

  let res = [];
  for (let i = 0; i < count.length; i++) {
    for (let j = 0; j < count[i]; j++) {
      res.push(i);
    }
  }
  return res;
}

console.log(countSort(array));
// 데이터의 범위가 한정되어있으며 더 빠르게 동작해야 할 때는 계수정렬 사용
// 가장 큰 데이터와 가장 작은 데이터의 차이가 1,000,000을 넘지 않을 때 효과적
