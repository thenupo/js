"use strict";

if (4 == 4) {            // == сравнивает только значения
    console.log('Ok!');
} else {
    console.log('Error');
};

if (4 == 9) {           // == сравнивает только значения
    console.log('Ok!');
} else {
    console.log('Error');
}


const num = 50;      

if (num < 40) {
    console.log('Error');
} else if (num > 100) {      // разница между else if и if в том, что else if срабатывает только если предыдущий if не сработал
    console.log('Много');
} else {                     // разница между else if и else в том, что else срабатывает только если предыдущий if и else if не сработали
    console.log('Ok!');
}


(num === 50) ? console.log('Ok!') : console.log('Error');  // тринарный оператор, ? - означает "если", : - "иначе"


const num = 50;

switch (num) {      // switch - конструкция, которая проверяет значение переменной и выполняет соответствующий блок кода
    case 49:        // case - проверяет значение переменной
        console.log('Неверно');
        break;      // break - останавливает выполнение кода после выполнения блока case
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('В точку!');
        break;
    default:        // default - выполняется, если ни один из case не сработал
        console.log('Не в этот раз');
        break;
}