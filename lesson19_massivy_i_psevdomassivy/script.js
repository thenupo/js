"use strict";

const arr = [1, 12, 3, 26, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

/* arr[99] = 0;
console.log(arr.length);
console.log(arr); */

/* arr.forEach(function(item, i, arr) {                     // перебор массива по каждому элементу
    console.log(`${i}: ${item} внутри массива ${arr}`);
}); */

arr.pop();      // удаляет последний элемент в массиве
arr.push(10);   // добавляет элемент в конец массива в этом случае элемент 10

// console.log(arr);

/* for (let i = 0; i < arr.length; i++) {   // перебрать элементы массива с помощью цикла
    console.log(arr[i]);
} */

/* for (let value of arr) {         // перебрать элементы массива с помощью конструкции for of
    console.log(value)
} */


/* const str = prompt("", "");
const products = str.split(", ");
console.log(products); */

/* const str = prompt("", "");
const products = str.split(", ");
console.log(products.join('; ')); */

/* const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));  */