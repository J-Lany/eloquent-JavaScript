/*
Regexp-гольф.

Термином «кодовый гольф» называют игру, цель которой - описать определенную программу как можно меньшим количеством символов.
Аналогично regexp-гольф — это практика создания как можно более коротких регулярных выражений, описывающих данный шаблон и только его.
Для каждого из следующих элементов напишите регулярное выражение, позволяющее проверить, встречается ли в строке какая-либо из указанных подстрок. 
Регулярное выражение должно соответствовать только строкам, содержащим одну из описанных подстрок. Не беспокойтесь о границах слов, если явно не указано иное. Когда ваше выражение сработает, проверьте, нельзя ли сделать его еще короче.
1. car и cat.
2. pop и prop.
3. ferret, ferry и ferrari.
4. Любое слово, оканчивающееся на ious.
5. Пробельный символ, за которым следуют точка, запятая, двоеточие или точка с запятой.
6. Слово длиннее шести букв.
7. Слово без буквы е (или Е).
В качестве справочного пособия используйте список в разделе «Резюме» этой главы. Проверьте каждое решение с помощью нескольких тестовых строк.
*/

//1. car и cat.
const check1 = /^(?=.*car)(?=.*cat)/i;
console.log(check1.test('carct'));

//2. pop и prop.
const check2 = /^(?=.*pop)(?=.*prop)/i;
console.log(check2.test('popprop'));

//3. ferret, ferry и ferrari.
const check3 = /^(?=.*ferret)(?=.*ferry)(?=.*ferrari)/i;
console.log(check3.test('ferret, ferry и ferrari.'));

//4. Любое слово, оканчивающееся на ious.
const check4 = /\b.*ious\b/i;
console.log(check4.test('i have appious'));

//5. Пробельный символ, за которым следуют точка, запятая, двоеточие или точка с запятой
const check5 = /\s[.,:;]/;
console.log(check5.test('i have appious .,'));

//6. Слово длиннее шести букв.
const check6 = /\b\w{7,}\b/;
console.log(check6.test('i have appious .,'));

//7. Слово без буквы е (или Е).
const check7 = /\b(?![\w]*[еЕ])[\w]+\b/i;
console.log(check7.test('ie have appioeus'));
