/*
Названия месяцев
Напишите простой модуль типа weekday, преобразующий номера месяцев (начиная с нуля) в названия и обратно. 
Выделите ему собственное пространство имён, 
т.к. ему потребуется внутренний массив с названиями месяцев, и используйте чистый JavaScript,
 без системы загрузки модулей.
*/

const month = (() => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return {
    name: (number) => months[number],
    number: (name) => months.indexOf(name),
  };
})();
