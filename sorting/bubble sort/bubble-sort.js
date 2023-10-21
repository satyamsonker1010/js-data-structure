function bubbleSort(arr) {
  let status;
  do {
    status = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let tamp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tamp;
        status = true;
      }
    }
  } while (status);
  return arr;
}

const myArrData = [10, 2, 4, 5, 8, 12, 11, 66, 55, 9, 35];
const outputData = bubbleSort(myArrData);
console.log("Sort Data", outputData);
