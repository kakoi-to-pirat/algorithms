const LIST_LENGTH = 20000000;
const RANDOM_LIST_LENGTH = 1000;

const NUM_LIST = [];
const RANDOM_NUM_LIST = [];

for (let index = 0; index < LIST_LENGTH; index++) {
  NUM_LIST[index] = index + 1;
}

for (let index = 0; index < RANDOM_LIST_LENGTH; index++) {
  RANDOM_NUM_LIST[index] = Math.floor(Math.random() * RANDOM_LIST_LENGTH);
}

let timeStart = 0;

const print = (msg, color = "#577") =>
  console.debug(`%c${msg}`, `color: ${color}`);

const before = () => {
  timeStart = performance.now();
  print(`Старт ${timeStart.toFixed(3)} мс`);
};

const after = () => {
  const timeFinish = performance.now();

  print(`Финиш ${timeFinish.toFixed(3)} мс`);
  print(`Выполнили за ${(timeFinish - timeStart).toFixed(3)} мс`, "#937");
};

// О большое описывает насколько быстро работает алгоритм.
// Позволяет сравнить количество операций.
// Дает понимание как возрастает время выполнения алгоритма с ростом размера списка.

/**
 *
 * Линейный поиск / Line Search
 * Сложность: линейная O(n) //  128
 *
 * Ищем порядковый номер искомого значения в коллекции
 *
 * @param {*} item
 * @param {*} list
 */
function lineSearch(item = 1, list = NUM_LIST) {
  print(
    `Ищем индекс значения '${item}' в коллекции из ${list.length} элементов \n Сложность: линейная, O(n) = ${list.length}`
  );

  before();

  let result = null;

  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (item === element) {
      result = index;
      break;
    }
  }

  after();

  return result;
}

/**
 * Бинарный поиск / Binary Search
 * Сложность: логарифмическая O(log n) // log 128 = 7
 *
 * Ищем порядковый номер искомого значения в коллекции
 *
 * @param {*} item
 * @param {*} list
 */
function binarySearch(item = 1, list = NUM_LIST) {
  print(`Ищем индекс значения '${item}' в коллекции из ${
    list.length
  } элементов \n
  Сложность: логарифмическая O(log n) // log ${list.length} = ${Math.ceil(
    Math.log2(list.length)
  )}`);

  before();

  let low = 0; // начальная граница списка
  let hight = list.length - 1; // конечная граница списка

  // пока больше одного элемента...
  while (low <= hight) {
    const mid = Math.floor((low + hight) / 2); // ...из середины списка проверяем...
    const guess = list[mid]; // ...значение

    // print({ low, mid, hight, guess });

    // значение найдено
    if (guess === item) {
      after();
      return mid; // возвращаем позицию
    }

    // много
    if (guess > item) {
      hight = mid - 1; // уходим в левую половину
      // мало
    } else {
      low = mid + 1; // уходим в правую половину
    }
  }

  after();

  return null; // ничего не найдено
}

/**
 * Сортировка выбором | Selection Sort
 * Сложность:  квадратичное O(n * n) // условно
 *
 * Сортируем массив чисел последовательным перебором каждого элемента
 *
 * @param {*} array
 * @returns
 */
function selectionSort(array = RANDOM_NUM_LIST) {
  print(
    `Сортируем массив из ${
      array.length
    } элементов.\nСложность: O(n * n) = ${Math.pow(array.length, array.length)}`
  );

  before();

  const sortedArr = [];
  let newArr = array;

  for (let index = 0; index < array.length; index++) {
    const smallest = findSmallest(newArr); // ищем наименьший элемент в массиве
    smallest !== undefined && sortedArr.push(smallest); // добавлявем наименьший элемент в сортированный массив
    newArr = pop(newArr, smallest); // формируем новый массив для поиска, исключая найденной наименьшее
  }

  after();

  return sortedArr;
}

function quickSort(array = RANDOM_NUM_LIST) {
  print(
    `Сортируем массив из ${array.length} элементов.\nСложность O(n * log n): ${
      array.length * Math.ceil(Math.log2(array.length))
    }`
  );

  let sortedArr;

  function _quickSort(array) {
    if (array.length < 2) {
      return array;
    }

    const pivot = array[0];
    const less = array.filter((i) => i < pivot);
    const greathr = array.filter((i) => i > pivot);

    return [..._quickSort(less), pivot, ..._quickSort(greathr)];
  }

  before();

  sortedArr = _quickSort(array);

  after();

  return sortedArr;
}
