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
