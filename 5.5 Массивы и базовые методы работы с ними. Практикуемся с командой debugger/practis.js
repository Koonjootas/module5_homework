//Задание 5.
/*
Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8,]
console.log(arr.length)
arr.reverse();
arr.forEach(function(item, index, array) {
    console.log(item);
})

