function recursiceBinerySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, left, right) {
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) {
    return mid;
  }
  if (arr[mid] > target) {
    return search(arr, target, left, mid - 1);
  }
  if (arr[mid] < target) {
    return search(arr, target, mid + 1, right);
  }
  return -1;
}

const myArrData = [2, 5, 8, 9, 10, 15, 20, 30];
const outputData = recursiceBinerySearch(myArrData, 1);
console.log("Index data By Recursively", outputData);
