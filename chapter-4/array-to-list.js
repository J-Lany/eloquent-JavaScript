/*
Список
Объекты как обобщенные скопления значений можно использовать для построения любых структур данных.
Одной из таких распространенных структур данных является список (не путать с массивом). 
Список — это иерархический набор объектов, где первый объект содержит ссылку на
второй, второй — на третий и т. д.
В результате получается примерно такая цепочка объектов:
let list = {
    value: 1,
    rest: {
        value: 2,
          rest: {
            value: 3,
            rest: null
          }
     }
};
Одно из приятных свойств списков — то, что они могут совместно использовать часть собственной структуры.
Например, если я создам два новых
значения, {value: 0, rest: list} и {value: -1, rest: list} (где list указывает
на определенную ранее привязку), то эти значения будут независимыми спи сками, но оба они будут задействовать одну и ту же структуру, образующую
последние три их элемента. Исходный список также является корректным списком, состоящим из трех элементов.
Напишите функцию arrayToList, которая строит список, чья структура подобна показанной, если передать функции массив [1, 2, 3] в качестве аргумента.
Напишите также функцию listToArray, создающую массив из списка.
Затем добавьте вспомогательную функцию prepend, принимающую элемент и список и создающую новый список, в котором заданный элемент добавлен в начало исходного списка.
*/

//Задача 1
function arrayToList(array) {
  let result = {};
  let temp = result;

  for (let index = 0; index < array.length; index++) {
    const isLast = index === array.length - 1;

    temp['value'] = array[index];
    temp['rest'] = isLast ? null : {};

    temp = temp['rest'];
  }
  return result;
}

//Задача 2
function listToArray(list) {
  const result = [];
  let { value, rest } = list;
  if (rest == null) {
    result.push(value);
    return result;
  }
  result.push(value);
  result.push(...listToArray(rest));
  return result;
}

//Задача 3
function prepend(item, list) {
  return { value: item, rest: { ...list } };
}
