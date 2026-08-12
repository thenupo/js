"use strict";

let num = 50;

while (num <= 55) {    // цикл while тут выполняется до тех пор, пока условие (num <= 55) истинно
    console.log(num);
    num++;
} 


do {                    // цикл do while выполняется хотя бы один раз, а затем проверяет условие (num < 55)
    console.log(num);   
    num++;
}
while (num < 55); 


for (let i = 1; i < 8; i++) {   // цикл for выполняется, пока условие (i < 8) истинно, с шагом увеличения i на 1
    if (i === 6) {              
        break;                  // если i равно 6, то цикл прерывается выоплнением команды break, и дальнейшие итерации не выполняются
        // continue;            // если i равно 6, то текущая итерация пропускается и цикл продолжается со следующей итерации
    }

    console.log(i);
}




/* ---- ---------------   Задачи по циклам для тренировки: ---------   -----*/ 

// Уровень 1. Совсем просто
// Задача 1. Числа от 1 до 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}  

// Задача 2. Числа от 10 до 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
 
// Задача 3. Чётные числа
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Второй способ 
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Задача 4. Нечётные числа
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}

// Уровень 2. Работа с диапазонами
// Задача 5. От 20 до 50
for (let i = 20; i <= 50; i++) {
    console.log(i);
}

// Задача 6. Числа, делящиеся на 5
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) 
        console.log(i);
}

// Задача 7. Делятся одновременно на 3 и 5
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0)
        console.log(i);
}

// Уровень 3. Сумма
// Задача 8. Сумма от 1 до 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = i + sum;
}
console.log(sum);

// Задача 9. Сумма от 1 до 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);

// Задача 10. Сумма только чётных
let sum = 0;
for (let i = 2; i <= 100; i += 2) {
    sum = sum + i;
}
console.log(sum);

// Задача 11. Сумма только нечётных
let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
        sum = sum + i;
    }
}
console.log(sum);

// Уровень 4. Счётчики
// Задача 12. Сколько чисел делится на 7 
let count = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 7 === 0)
        count++;
}
console.log(count);

// Задача 13. Сколько чётных
let count = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0)
        count++;
}
console.log(count);

// Задача 14. Сумма и количество
let sum = 0;
let count = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
        sum = sum + i;
        count++;
    }
}
console.log(`Количество: ${count}, Сумма: ${sum}`);

// Уровень 5. Таблица умножения
// Задача 15. Таблица умножения на 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
}                  


// Задача 16. Таблица умножения на 7
for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}  

// Уровень 6. Вложенные циклы
// Задача 17. Прямоугольник
for (let i = 1; i <= 4; i++) {
    let line = "";
    for (let k = 1; k <= 5; k++) {
        line = line + "*";
    }
    console.log(line);
}

// Задача 18. Квадрат
for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let k = 1; k <= 5; k++) {
        line = line + "*";
    }
    console.log(line);
}

// Задача 19. Лесенка
for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let k = 1; k <= i; k++) {
        line = line + "*";
    }
    console.log(line);
}

// Задача 20. Перевёрнутая лесенка
for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let k = 1; k <= 6 - i; k++) {
        line = line + "*";
    }
    console.log(line);
}

// Уровень 7. Уже приходится думать
// Задача 21. Факториал 
let result = 1;
for (let i = 1; i <= 5; i++) {
    result = result * i;
}
console.log(result);

// Задача 22. Степень числа
let number = 2;
let power = 5;
let result = 1;
for (let i = 1; i <= power; i++) {
    result = result * number;
}
console.log(result);

// Задача 23. Найти количество цифр
let number = 12345;
let count = 0;
while (number > 0) {
    number = Math.floor(number / 10);
    count++;
}
console.log(count);

// Задача 24. Сумма цифр числа
let number = 1234;
let sum = 0;
while (number > 0) {
    let digit = number % 10;
    sum = sum + digit;
    number = Math.floor(number / 10);
}
console.log(sum);

