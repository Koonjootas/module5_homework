// 5.4 Строки. Числа


//Задание 3.
/*
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
*/

function reverseString(str) {
    return str.split("").reverse().join("");
  }
  reverseString("Hello");


//Задание 4.
/*
Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.
*/

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
  console.log( randomInteger(0, 100) );