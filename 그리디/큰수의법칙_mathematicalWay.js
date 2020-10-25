let [n, m, k] = [5, 8, 3];
const data = [2, 4, 5, 4, 6].sort((a, b) => b - a);
const size = Math.floor(m / (k + 1)); // 수열이 몇번 반복되는지
const remainingSize = m % (k + 1); // size가 나눠떨어지지 않으면? 나머지만큼 가장 큰 수가 추가로 더해짐
const sum = 3 * data[0] + data[1]; // 한 수열의 합
const result = sum * size + remainingSize; // 한 수열의 합 * 수열의 반복 개수 + 나머지 만큼 가장 큰 수 추가로 더함
console.log(result);
