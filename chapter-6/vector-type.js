/*
Тип вектора
Напишите класс Vec, который представляет вектор в двумерном пространстве.
Вектор принимает параметры x и y (числа) и сохраняет их в свойствах с тем же именем.
Напишите для прототипа Vec два метода, plus и minus, которые принимают в качестве параметра другой вектор
 и возвращают новый вектор, представляющий собой сумму или разность значений x и y для двух векторов (this
и параметра).
Добавьте в прототип свойство-геттер length, которое вычисляет длину вектора — расстояние от точки (x, y) до начала координат (0, 0)
*/

class Vec {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
  }
  plus(vector) {
    const sumX = this.x + vector.x;
    const sumY = this.y + vector.y;
    return new Vec(sumX, sumY);
  }
  minus(vector) {
    const diffX = this.x - vector.x;
    const diffY = this.y - vector.y;
    return new Vec(diffX, diffY);
  }
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
