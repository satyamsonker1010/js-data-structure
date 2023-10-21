function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let left = [];
  let right = [];
  let pivot = arr.at(-1);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arrData = [10, -2, 1, -6, 50, 25];
const quickSortAlgo = quickSort(arrData);
console.log(quickSortAlgo);

///worst case => O(n*n);//Already sorted;
//avrage case => O(nlogn);
