/*
Представьте, что у вас есть функция primitiveMultiply, которая в 20 % случаев умножает два числа, 
а в остальных 80 % случаев возникает исключение типа MultiplicatorUnitFailure. 
Напишите функцию, оборачивающую эту неуклюжую функцию и просто продолжающую попытки до тех пор, пока вызов не завершится успешно, после чего возвращающую результат.
Убедитесь, что вы обрабатываете только те исключения, которые рассчитываете обработать
*/

function tryAgain(primitiveMultiply) {
  try {
    return primitiveMultiply();
  } catch (err) {
    if (err instanceof MultiplicatorUnitFailure) {
      return tryAgain(primitiveMultiply);
    } else {
      throw new Error('Другая ошибка');
    }
  }
}
