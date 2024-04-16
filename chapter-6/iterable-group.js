/*
Итерируемые группы
Сделайте класс Group из предыдущего упражнения итерируемым.
Если вы не помните точный вид интерфейса итератора, перечитайте раздел, посвященный этому интерфейсу, ранее в данной главе.
Если для представления членов группы вы использовали массив, не возвращайте просто итератор,
 созданный путем вызова метода Symbol.iterator для массива. 
Это бы сработало, но оно не соответствует цели данного упражнения.
Если ваш итератор ведет себя странно, когда группа изменяется во время
итерации, — это нормально.
*/

class Group {
  constructor() {
    this.group = [];
  }

  add(item) {
    if (!this.group.includes(item)) {
      this.group = [...this.group, item];
    }
  }
  delete(item) {
    this.group = this.group.filter((i) => i !== item);
  }
  has(item) {
    return this.group.includes(item);
  }

  static from(iterable) {
    let group = new Group();
    for (i of iterable) {
      group.add(i);
    }
    return group;
  }
  [Symbol.iterator]() {
    let index = 0;
    let group = this.group;
    return {
      next() {
        if (index < group.length) {
          return {
            value: group[index++],
            done: false,
          };
        } else {
          return { done: true };
        }
      },
    };
  }
}

//Проверка
let group = new Group();
group.add(1);
group.add(2);
group.add(3);

for (let value of group) {
  console.log(value);
}
