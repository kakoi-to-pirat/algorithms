function _lineSearch(item = 1, list = NUM_LIST) {
  let result = null;

  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (item === element) {
      result = index;
      break;
    }
  }

  return result;
}

function _binarySearch(item, arr) {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2);
    const res = arr[midIndex];

    if (res === item) {
      return midIndex;
    }

    if (res > item) {
      endIndex = midIndex - 1;
    }

    if (res < item) {
      startIndex = midIndex + 1;
    }
  }

  return null;
}

function _selectionSort(arr) {
  const sortedArr = [];
  let newArr = arr;

  for (let index = 0; index < arr.length; index++) {
    const smallest = findSmallest(newArr);
    smallest && sortedArr.push(smallest);
    newArr = pop(newArr, smallest);
  }

  return sortedArr;
}