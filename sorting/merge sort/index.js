function mergerSort(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  return merge(mergerSort(leftArr), mergerSort(rightArr));
}

function merge(leftArr, rightArr) {
  let result = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      result.push(rightArr.shift());
    } else {
      result.push(leftArr.shift());
    }
  }
  return [...result, ...leftArr, ...rightArr];
}

///2 1 5 => 1 2 5

const arrData = [-6, 10, -2, 15, 5];
const output = mergerSort(arrData);
console.log("output", output);
