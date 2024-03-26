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

let triangleRow = '#';

while (triangleRow.length <= 7) {
  console.log(triangleRow);
  triangleRow = triangleRow + '#';
}
