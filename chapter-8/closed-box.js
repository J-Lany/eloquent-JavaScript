/*
Запертый ящик
Рассмотрим следующий (довольно надуманный) объект:
const box = {
locked: true,
unlock() { this.locked = false; },
lock() { this.locked = true; },
_content: [],
get content() {
if (this.locked) throw new Error("Заперто!");
return this._content;
}
};
Это ящик с замком. В ящике есть массив, но его можно получить, только если отпереть ящик.
Прямой доступ к частному свойству _content запрещен.
Напишите функцию withBoxUnlocked, которая принимает в качестве аргумента функциональное значение, отпирает ящик, запускает функцию, а затем
гарантирует, что прежде, чем завершить работу, ящик снова будет заперт независимо от того, возвратила функция-аргумент нормальный результат или вызвала исключение.
Если хотите заработать дополнительные баллы, убедитесь, что при вызове withBoxUnlocked, когда ящик уже открыт, он остается открытым.
*/
const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error('Заперто!');
    return this._content;
  },
};
function withBoxUnlocked(func) {
  try {
    box.unlock();
    func();
  } finally {
    box.lock();
  }
}
