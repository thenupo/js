"use strict";

let number = 4.6;

console.log(-4/0);
console.log('string' * 9);

const persone = 'Alex'; 

const bool = false;

//console.log(something);

let und;
console.log(und);

const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

// console.log(obj.name);
console.log(obj["name"]);

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[1]);


// ------------------------------------------------------------------------
// Разница между объектами и массивами и неочевидные синтаксические возможности 

const arrr = ['a', 'b', 'c'];  // Массивы это перечень информации по порядку

arrr[10] = '3456';

console.log(arrr);

const arrObj = {
    0: 'a',
    1: 'b',
    2: 'c',
    abc: {
        df: [{}, {}],
        def: {
            
        }
    }
};
const b = 'b';

// arrObj.b = '1234';
arrObj['b'] = '1234';

console.log(arrObj['b']);
console.log(arrObj.b);


// const objj = {a: 1, b:2};  // Структура хранения данных в парном формате
const objj = {
    Anna: 500,
    'Alice': 800
};