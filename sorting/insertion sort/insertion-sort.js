function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
}

const myArrData = [10, 2, 4, 5, 8, 12, 11, 66, 55, 9, 35];
const outputData = insertionSort(myArrData);
console.log("Sort Data", outputData);
