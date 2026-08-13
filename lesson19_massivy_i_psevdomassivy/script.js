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




// СӘЛ ПӘЛ ТАПСЫРМАЛАР


// Задача 1. Список имён

const names = ["Антон", "Алекс", "Иван", "Макс"];
let counter = 0;
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
    counter++;
}
console.log(`Количество: ${counter}`);


// Задача 2. Объект студента

const student = {
    name: "Нурболат",
    age: 22,
    city: "Алматы"
};

console.log(`Имя: ${student.name}`);
console.log(`Возраст: ${student.age}`);
console.log(`Город: ${student.city}`);

student.age = 23;

console.log(`Имя: ${student.name}`);
console.log(`Возраст: ${student.age}`);
console.log(`Город: ${student.city}`);


// Задача 3. Массив объектов

const users = [
    {
        name: "Антон",
        age: 22
    },
    {
        name: "Алекс",
        age: 17
    },
    {
        name: "Иван",
        age: 25
    }
];

for (let i = 0; i < users.length; i++) {
    console.log(users[i].name);
}
console.log("Совершеннолетние:");
for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
        console.log(users[i].name);
    }
}

// Задача 4. Товары

const products = [
    {
        name: "Телефон",
        price: 200000
    },
    {
        name: "Ноутбук",
        price: 500000
    },
    {
        name: "Наушники",
        price: 50000
    }
];

let total = 0;
for (let i = 0; i < products.length; i++) {
    console.log(`${products[i].name} - ${products[i].price}`);
    total = total + products[i].price;
    if (products[i].price > 100000) {
        console.log(`Дорогой товар: ${products[i].name}`);
    }
}
console.log(`Общая стоимость: ${total}`);


// Задача 5.  Массив объектов + изменение

const users = [
    {
        name: "Антон",
        age: 22,
        isAdmin: false
    },
    {
        name: "Алекс",
        age: 17,
        isAdmin: false
    },
    {
        name: "Иван",
        age: 30,
        isAdmin: true
    }
];

// 1. Вывести всех пользователей
for (let i = 0; i < users.length; i++) {
    console.log(users[i].name);
}

// 2. Вывести совершеннолетних
console.log("Совершеннолетние:");
for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
        console.log(users[i].name);
    }
}

// 3. Вывести администраторов
console.log("Администраторы:");
for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === true) {
        console.log(users[i].name);
    }
}

// 4. Добавить совершеннолетним isAdult: true
for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
        users[i].isAdult = true;
    }
}
console.log(users);