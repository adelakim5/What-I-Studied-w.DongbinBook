let array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) minIndex = j;
    }
    let temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
}

console.log(selectionSort(array));
