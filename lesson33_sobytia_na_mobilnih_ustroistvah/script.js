"use strict";

// touchstart (работает при касании элемента)
// touchmove (работает при движении пальца по экрану)
// touchend (работает при отрыве пальца от экрана)
// touchcenter (работает при касании элемента и отрыве пальца от экрана)
// touchleave (работает при выходе пальца за пределы элемента)
// touchcancel (работает при отмене касания)

window.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".box");

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });

    /* box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');
    });  */
});

// touches - список всех пальцев, которые в данный момент касаются поверхности
// targetTouches - список пальцев, которые взаимодействуют с конкретным элементом
// changedTouches - список пальцев, участвующих в текущем событии