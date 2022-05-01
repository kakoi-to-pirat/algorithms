function findSmallest(array) {
  let smallest = array[0];

  for (let index = 0; index < array.length; index++) {
    if (array[index] < smallest) {
      smallest = array[index];
      smallestIndex = index;
    }
  }

  return smallest;
}

function pop(array, el) {
  const newArr = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (element !== el) {
      newArr.push(element);
    }
  }

  return newArr;
}

function head(arr) {
  return arr[0];
}

function tail(arr) {
  return pop(arr, arr[0]);
}

function max(arr) {
  if (arr.length == 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1];
  }
  const subMax = max(tail(arr));
  return arr[0] > subMax ? arr[0] : subMax;
}

function sum(arr = []) {
  if (arr.length < 1) {
    return 0;
  }
  return head(arr) + sum(tail(arr));
}

function factorial(x) {
  if (x <= 1) {
    return x;
  }
  return x * factorial(x - 1);
}
