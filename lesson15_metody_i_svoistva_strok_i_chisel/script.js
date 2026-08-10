"use strict";

const str = "test";

console.log(str[2] = 'd');   // это ошибка, так как строки неизменяемы

console.log(str.length);            // свойство length возвращает длину строки
console.log(str.toUpperCase());     // метод toUpperCase() делает все буквы строки заглавными
console.log(str.toLowerCase());     // метод toLowerCase() делает все буквы строки строчными
console.log(str);


// Разница между свойстом и методом, свойсто - мы хотим получить информацию пишется без (), метод - мы просим выполнить действие, пишется с ().


const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));    // метод indexOf() возвращает индекс строки, с которого начинается подстрока, если подстрока не найдена, то возвращается -1


const logg = "Hello world";

console.log(logg.slice(6, 11));         // метод slice() возвращает часть строки от start до end (не включая end)
console.log(logg.substring(6, 11));     // метод substring() похож на slice(), но не поддерживает отрицательные значения
console.log(logg.substr(6, 5));         // метод substr() отрезает часть строки от start и длиной length


const num = 12.2;
console.log(Math.round(num));           // метод Math.round() округляет число до ближайшего целого


const test = "12.2px";
console.log(parseInt(test));            // метод parseInt() преобразует строку в целое число, игнорируя символы после числа
console.log(parseFloat(test));          // метод parseFloat() преобразует строку в число с плавающей точкой, игнорируя символы после числа


