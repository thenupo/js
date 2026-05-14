"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
}

showFirstMessage("hello");
console.log(num); 


/* function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(4, 6));
console.log(calc(4, 10));
 */

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
sayHello('Антон');


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