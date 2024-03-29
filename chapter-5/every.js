/*
Метод every
Для массивов существует метод every, аналогичный методу some.
Этот метод возвращает true, когда заданная функция возвращает true для каждого элемента массива.
В некотором смысле some — это версия оператора || для массивов, а метод every подобен оператору &&.
Реализуйте метод every, принимающий в качестве параметров массив и предикативную функцию.
Напишите две версии: одну с использованием цикла, а вторую — с применением метода some.
*/

//Первый вариант с циклом:
function every(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i])) return false;
  }
  return true;
}

//Второй вариант с применением метода some:
function every2(arr, func) {
  return !arr.some((el) => !func(el));
}

// Для проверки:
const testArr = [1, 2, 3, 4, 5];
const testFunc1 = (num) => {
  return num > 10;
};
const testFunc2 = (num) => {
  return num < 10;
};
