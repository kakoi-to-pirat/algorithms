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
