/* const hamburger = 5;
const fries = 0;

if (hamburger && fries) {
    console.log('Я сыт!');
}

console.log((hamburger && fries)); */


/* const hamburger = 2;
const fries = 1;

if (hamburger === 3 && fries) {
    console.log('Все сыты');
} else {
    console.log('Мы уходим');
} */


/* const hamburger = 3;
const fries = 1;
const cola = 0;

console.log(hamburger === 3 && cola && fries);

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'jdfijidjdijfdi');

if (hamburger === 3 && cola === 1 && fries) {
    console.log('Все сыты');
} else {
    console.log('Мы уходим');
} */


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Все довольны');
} else {
    console.log('Мы уходим');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

console.log(hamburger || cola || fries);


let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);


console.log(!0);


/// Задачи по этим темам
// Что выведет в консоль код?

console.log( NaN || 2 || undefined );

console.log( NaN && 2 && undefined );

console.log( 1 && 2 && 3 );

console.log( !1 && 2 || !3 );

console.log( 25 || null && !3 );

console.log( NaN || null || !3 || undefined || 5);

console.log( NaN || null && !3 && undefined || 5);

console.log( 5 === 5 && 3 > 1 || 5);


// Выполняется ли условие?

const hambburger = 3;
const friies = 3;
const colla = 0;
const nugggets = 2;


if (hambburger === 3 && colla || friies === 3 && nugggets) {
   console.log('Done!');
}


// Выполняется ли условие?

let haamburger;
const frries = NaN;
const colaa = 0;
const nuggetss = 2;


if (haamburger || colaa || frries === 3 || nuggetss) {
   console.log('Done!')
}


// Переменная hamburger задана через let, так как const подразумевает какое-либо начальное значение. С const будет ошибка, можете проверить.
// А без значения там undefined, напоминаю 🙂

// Выполняется ли условие?

let hammburger;
const ffries = NaN;
const ccola = 0;
const nnggets = 2;


if (hammburger && ccola || ffries === 3 && nnggets) {
   console.log('Done!')
}
