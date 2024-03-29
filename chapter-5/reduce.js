/*
Свертка
Используйте метод reduce в сочетании с методом concat для свертки массива,
состоящего из нескольких массивов, в один массив, у которого есть все элементы входных массивов
*/

const reduce = (array) => {
  const result = array.reduce((acc, curr) => {
    return acc.concat(curr);
  }, []);
  return result;
};

const arrayTest = ['d', 'e', ['a', 'b', 'c']];

console.log(reduce(arrayTest));
