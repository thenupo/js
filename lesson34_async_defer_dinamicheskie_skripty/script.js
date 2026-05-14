"use strict";

const p = document.querySelectorAll('p');
console.log(p);

/* const script = document.createElement('script');
script.src = 'test.js';
script.async = false; // по умолчанию async=true, если не указать, то будет асинхронная загрузка
document.body.append(script); */


function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false; // по умолчанию async=true, если не указать, то будет асинхронная загрузка
    document.body.append(script);
}

loadScript('test.js');
loadScript('some.js');