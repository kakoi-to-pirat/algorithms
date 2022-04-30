const LIST_LENGTH = 20000000;
const NUM_LIST = [];

for (let index = 0; index < LIST_LENGTH; index++) {
  NUM_LIST[index] = index + 1;
}

let timeStart = 0;

const print = (msg, color = "#577") =>
  console.debug(`%c${msg}`, `color: ${color}`);

const before = (item, list, msg) => {
  print(msg);

  print(
    `Ищем индекс значения '${item}' в коллекции из ${list.length} элементов`
  );

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
  before(item, list, `Сложность: линейная, O(n) = ${list.length}`);

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
  before(
    item,
    list,
    `Сложность: логарифмическая O(log n) // log ${list.length} = ${Math.ceil(
      Math.log2(list.length)
    )}`
  );

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
