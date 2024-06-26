/*
  Шахматная доска
  Напишите программу, которая создает строку, представляющую сетку 8×8, используя для разделения строк символы новой строки.
  В каждой позиции сетки стоит либо пробел, либо символ "#". Эти символы должны располагаться в шахматном порядке.
  Передавая данную строку в console.log, вы должны получить что-то вроде этого:
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  Если вы уже написали программу, которая генерирует этот узор, определите
  привязку size = 8 и измените программу так, чтобы она работала для любого
  size, выводя сетку заданных ширины и высоты.
*/

let size = 8;
let chessBoard = '';
for (let row = 0; row < size; row++) {
  for (let col = 0; col < size; col++) {
    if ((row + col) % 2 === 0) {
      chessBoard = chessBoard + '#';
    } else {
      chessBoard = chessBoard + ' ';
    }
  }
  chessBoard = chessBoard + '\n';
}
console.log(chessBoard);
