// binery search

// Time complexity is O(logn);

function binerySearch(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left <= right) {
    let midIndex = Math.floor((left + right) / 2);
    if (arr[midIndex] === target) {
      return midIndex;
    }
    if (arr[midIndex] > target) {
      right = midIndex - 1;
    }
    if (arr[midIndex] < target) {
      left = midIndex + 1;
    }
  }
  return -1;
}

const myArr = [2, 5, 8, 9, 10, 15, 20, 30];
const output = binerySearch(myArr, 10);
console.log("Index data", output);
