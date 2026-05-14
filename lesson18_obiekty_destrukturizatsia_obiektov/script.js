"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

// console.log(Object.keys(options).length);  // объекттті массивке айналдырып ішінде қанша ключ бар екенін білуге болады
// console.log(Object.keys(options));  // объекттті массивке айналдырады

/* console.log(options);

console.log(options["colors"]["border"]);

delete options.name;

console.log(options); */

// барлық ключтарды алмайды тек colorsқа дейінгі ключтарды шығарып береді
/* for (let key in options) {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
}
 */

// бұл тәсілмен барлық ключтарды свойстваларымен шығарып береді
/* for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
} */

// типа счетчик арқылы ішінде қанша ключ бар екенін көруге болады
/* let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            // counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter); */