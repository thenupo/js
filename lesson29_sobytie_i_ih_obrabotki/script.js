"use strict"; 

// const btn = document.querySelector("button"),
     // overlay = document.querySelector(".overlay");


// старый способ назначения обработчика события - перезаписывает предыдущий
/* btn.onclick = function() {
    alert("You clicked the button!");
};

btn.onclick = function() {
    alert("Second click handler!");
}; */

// новый способ назначения обработчика события - позволяет назначать несколько обработчиков
/* btn.addEventListener('click', () => {
    alert("You clicked the button!");
});

btn.addEventListener('click', () => {
    alert("Second click handler!");
}); */

// событие mouseenter срабатывает, когда курсор мыши входит в элемент, на который назначен обработчик
/* btn.addEventListener('mouseenter', () => {
    console.log("Hover");
});  */

// используя объект события, можно получить информацию о событии, например, координаты мыши
/* btn.addEventListener('mouseenter', (e) => {
    console.log(e);
});  */
 
// e.target - это элемент, на котором произошло событие, в данном случае - кнопка, и мы можем удалить его из DOM, вызвав метод remove() на этом элементе
/* btn.addEventListener('mouseenter', (e) => {
    console.log(e.target); 
    e.target.remove();
}); */

// при клике на кнопку, она удаляется из DOM
/* btn.addEventListener('click', (e) => {
    e.target.remove();
});  */

// удаление обработчика события после первого клика
/* let i = 0; // cчетчик кликов
const deleteElement = (e) => {  // именнованная функция для удаления элемента
    console.log(e.target);  // получаем элемент, на котором произошло событие
    i++;  // увеличиваем счетчик кликов
    if (i === 1) {  // если клик ровно 1 раз, удаляем элемент
        btn.removeEventListener('click', deleteElement);  // removeEventListener удаляет обработчик события, который был назначен на элемент, в данном случае - кнопку, и мы передаем имя функции deleteElement, которая была назначена как обработчик события для клика на кнопку
    }
};

btn.addEventListener('click', deleteElement); */  // addEventListener назначает обработчик события для клика на кнопку, и мы передаем имя функции deleteElement, которая будет вызвана при каждом клике на кнопку, и внутри этой функции мы проверяем количество кликов и удаляем обработчик после первого клика.


// тут у нас пример всплытия события - когда мы кликаем на кнопку, событие всплывает до родительского элемента, в данном случае - overlay, и мы можем обработать это событие на обоих элементах
// let i = 0; 
// const deleteElement = (e) => { 
//    console.log(e.target); 
//    console.log(e.type);
/*  i++; 
    if (i === 1) {  
        btn.removeEventListener('click', deleteElement);  
    } */
// };

// btn.addEventListener('click', deleteElement); 
// overlay.addEventListener('click', deleteElement); 



/* const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault(); // отменяет стандартное поведение браузера при клике на ссылку, то есть переход по ссылке не произойдет 
    console.log(event.target); // выводим элемент, на котором произошло событие, в данном случае - ссылка
}); */



const btns = document.querySelectorAll("button"),
      overlay = document.querySelector(".overlay");

const deleteElement = (e) => { 
    console.log(e.target); 
    console.log(e.type);
};

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true}); // {once: true} - это опция, которая позволяет назначить обработчик события, который будет вызван только один раз, и после первого вызова он будет автоматически удален из элемента, в данном случае - кнопки
});