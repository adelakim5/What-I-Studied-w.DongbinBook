let array = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8];

function quickSort(start, end, array) {
  if (start >= end) return;
  let pivot = start;
  let left = start + 1;
  let right = end;
  while (left <= right) {
    // 피벗보다 큰 데이터를 찾을 때까지 반복
    while (left <= end && array[pivot] >= array[left]) {
      left++;
    }
    //  피벗보다 작은 데이터를 찾을 때까지 반복
    while (right > start && array[pivot] <= array[right]) {
      right--;
    }
    if (left > right) {
      let temp = array[pivot];
      array[pivot] = array[right];
      array[right] = temp;
    } else {
      let temp = array[left];
      array[left] = array[right];
      array[right] = temp;
    }
  }
  quickSort(start, right - 1, array);
  quickSort(right + 1, end, array);
}

quickSort(0, array.length - 1, array);
console.log(array);
