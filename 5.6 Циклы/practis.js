//Задание 6.

/*
Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.
*/

let arrayItem = 81;
let arrayFist = [72, 22, 14, 43, 27, 19, 2, 41, 81, arrayItem];
let condt = "true";
for (let i = 0; i < arrayFist.length -1; i++) {
if (arrayFist[i] == arrayFist[i + 1]) {
condt = "false";
} 
}
 console.log(condt)



//Задание 7.

/*
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
*/

let arraySecond = [6, 1, 2, "три", true, 4, 0, null];
let arrayEven = arraySecond.filter(item => item % 2 == 0 && item !== null && item !== 0  );
let arrayOdd = arraySecond.filter(item => item % 2 !== 0 && item !== null && item !== 0  );
let arrayNull = arraySecond.filter(item => item === 0 || item === null );

console.log(arrayEven);
console.log(arrayOdd);
console.log(arrayNull);