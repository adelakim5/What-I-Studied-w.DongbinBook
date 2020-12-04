let array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

function insertSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (array[j] < array[j - 1]) {
        // 만얖 앞에있는 애가 나보다 크면
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp; // 자리 바꾸기
      } else break; // 앞에있는 애가 나보다 작으면 멈춤
    }
  }
  return array;
}

console.log(insertSort(array));
// 거의 정렬되어있는 상태로 입력이 주어지면 삽입정렬이 좋음
