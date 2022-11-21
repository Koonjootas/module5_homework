// Задание 8.
/*
Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

Используйте шаблонные строки.
*/

let myMap = new Map();
myMap.set ('Кошка', 'Жив1');
myMap.set ('Собака', 'Жив2');
myMap.set ('Кролик', 'Жив3');
myMap.set ('Крокодил-дил-дил', 'Жив4');

let myMapItems =[];

for (let name of myMap.keys()) {
    myMapItems.push(name)
}
for (let prop of myMap.values()){
    myMapItems.push(prop)
}

for (let i = 0; i < 4; i++) {
    console.log(console.log(`Ключ — ${myMapItems[i]}, значение — ${myMapItems[i+4]}`))
}

