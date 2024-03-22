/* 1. Построение треугольника в цикле
    Напишите цикл, который делает семь вызовов console.log и выводит следующий треугольник:
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/
const createTriangle = () => {
  let triangleRow = '#';
  while (triangleRow.length <= 7) {
    console.log(triangleRow);
    triangleRow = triangleRow + '#';
  }
};
/* 
 FizzBuzz
 Напишите программу, в которой с помощью console.log выводятся все чис-ла от 1 до 100 с двумя исключениями.
 Для чисел, кратных 3, вместо числа выводится "Fizz"
 Для чисел, кратных 5 (но не 3), — "Buzz".
 Когда это заработает, измените программу так, чтобы она печатала:
 "FizzBuzz" для чисел, которые делятся и на 3, и на 5
  (и по-прежнему печатайте "Fizz" или "Buzz" для чисел, кратных только одному из них).
*/

const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};
