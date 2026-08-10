"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
}

showFirstMessage("hello");
console.log(num); 


function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(4, 6));
console.log(calc(4, 10));


function ret() {
    let num = 50;

    //

    return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function() {
    console.log("Hello");
};

logger();


// const calc = (a, b) => a + b;
const calc = (a, b) => {
    console.log('1');
    return a + b;
};

console.log(calc(10, 10));


//   (д) Еще раз про аргументы функций
const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);


// (д) Про важность return
const ussdCurr = 28;
const discount = 0.9;

function convertt(amountt, curr) {
    return curr * amountt;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convertt(500, ussdCurr);
promotion(res);


function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('Done');
}

test();


function doNothing() {};
console.log(doNothing() === undefined);


// домашка функции 
function sayHello(name) {
    return `Привет, ${name}!`;
}
console.log(sayHello('Антон'));


function returnNeighboringNumbers(number) {
    return [number - 1, number, number + 1];
}
console.log(returnNeighboringNumbers(5));


function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

console.log(getMathResult(10, 5));





/// ЗАДАчки по функциям 

// Задача 1. Приветствие
function sayHello() {
    console.log('Привет!');
}
sayHello();


// Задача 2. Приветствие по имени
function sayHello(name) {
    return `Привет, ${name}!`;
}
console.log(sayHello('Антон'));
console.log(sayHello('Нурболат'));


// Задача 3. Сложение
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 3));
console.log(sum(10, 20));


// Задача 4. Умножение
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 4));


// Уровень 2. Условия внутри функций
// Задача 5. Совершеннолетие
function checkAge(age) {
    if (age >= 18) {
        return "Совершеннолетний";
    } else {
        return "Не совершеннолетний";
    }
}
console.log(checkAge(22));
console.log(checkAge(15));


// Задача 6. Положительное или отрицательное
function checkNumber(number) {
    if (number > 0) {
        return "Положительное";
    } else if (number < 0) {
        return "Отрицательное";
    } else if (number === 0) {
        return "Ноль";
    }
}
console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));


// Задача 7. Чётное или нечётное
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(10));
console.log(isEven(7));


// Уровень 3. Функции + строки
// Задача 8. Длина имени
function getNameLength(name) {
    return name.length;
}
console.log(getNameLength("Антон"));


// Задача 9. Большие буквы
function makeUpper(text) {
    return text.toUpperCase();
}
console.log(makeUpper("javascript"));


// Задача 10. Проверка слова
function hasJavaScript(text) {
    if (text.includes("JavaScript")) {
        return true;
    } else {
        return false;
    }
}
console.log(hasJavaScript("Я изучаю JavaScript"));
console.log(hasJavaScript("Я изучаю Python"));


// Уровень 4. Function Expression и Arrow Function
// Задача 11. Function Expression
const subtract = function(a, b) {
    return a - b;
}
console.log(subtract(10, 3));


// Задача 12. Arrow Function
const multiply = (a, b) => {
    return a * b;
}
console.log(multiply(5, 5));


// Задача 13. Короткая Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(5, 5));


// Уровень 5. Уже надо подумать
// Задача 14. Максимальное число
function getMax(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(getMax(10, 5));
console.log(getMax(3, 8));


// Задача 15. Калькулятор
function calculate(a, b, operation) {
    if (operation === "+") {
        return a + b;
    } else if (operation === "-") {
        return a - b;
    } else if (operation === "*") {
        return a * b;
    } else if (operation === "/") {
        return a / b;
    } else {
        return "Неизвестная операция";
    }
}
console.log(calculate(10, 5, "+"));
console.log(calculate(10, 5, 'sfce'));


// Задача 16. Самая сложная пока
function createUserInfo(name, age) {
    name = name.trim();
    name = name[0].toUpperCase() + name.slice(1);
    let status;
    if (age < 18) {
        status = "несовершеннолетний";
    } else {
        status = "совершеннолетний";
    }
    return `Имя: ${name}, возраст: ${age}, статус: ${status}`;
}
console.log(createUserInfo("   anton   ", 22));
console.log(createUserInfo("   alex   ", 16));