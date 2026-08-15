"use strict";

const box = document.getElementById("box"),
      btns = document.getElementsByTagName("button"),
      circles = document.getElementsByClassName("circle"),
      wrapper = document.querySelector(".wrapper"),
      hearts = wrapper.querySelectorAll(".heart"),
      oneHeart = wrapper.querySelector(".heart");    
      
// box.style.backgroundColor = "blue";
// box.style.width = "500px";

box.style.cssText = "background-color: blue; width: 500px";

btns[1].style.borderRadius = "100%"; 
circles[0].style.backgroundColor = "red";

/* for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = "blue";
} */

hearts.forEach(item => {
    item.style.backgroundColor = "blue";
});

const div = document.createElement('div');
// const txt = document.createTextNode("Тут был я");

div.classList.add("black");

wrapper.append(div);  
// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].before(div); 
// hearts[0].after(div); 

// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove(); 
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello World!</h1>"; 
// div.textContent = "Hello";

div.insertAdjacentHTML("afterend", "<h2>Hello</h2>"); 




/* ==========================================================================
   1. УПРАВЛЕНИЕ СТИЛЯМИ
   ========================================================================== */

// Точечная смена (сохраняет остальные стили, свойства в camelCase)
box.style.backgroundColor = "blue";
box.style.width = "500px";
btns[1].style.borderRadius = "100%"; 

// Массовая перезапись (полностью заменяет инлайновый атрибут style)
box.style.cssText = "background-color: blue; width: 500px;";


/* ==========================================================================
   2. ПЕРЕБОР ЭЛЕМЕНТОВ
   ========================================================================== */

// Перебор через forEach (для NodeList из querySelectorAll)
hearts.forEach(item => {
    item.style.backgroundColor = "blue";
});

// Классический цикл (для HTMLCollection из getElementsByClassName / TagName)
/* for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = "blue";
} */


/* ==========================================================================
   3. СОЗДАНИЕ И КЛАССЫ
   ========================================================================== */

const div = document.createElement('div'); // Создать тег в памяти
div.classList.add("black");                // Добавить класс (.add, .remove, .toggle)


/* ==========================================================================
   4. ВСТАВКА В DOM-ДЕРЕВО
   ========================================================================== */

// --- СОВРЕМЕННЫЕ МЕТОДЫ ---
wrapper.append(div);   // Внутрь wrapper, в самый конец
wrapper.prepend(div);  // Внутрь wrapper, в самое начало

hearts[0].before(div); // Снаружи, ПЕРЕД hearts[0] (как сосед)
hearts[0].after(div);  // Снаружи, ПОСЛЕ hearts[0] (как сосед)

// --- УСТАРЕВШИЕ (ТРЕБУЮТ РОДИТЕЛЯ) ---
// wrapper.appendChild(div);             // Аналог append
// wrapper.insertBefore(div, hearts[1]); // Аналог before


/* ==========================================================================
   5. УДАЛЕНИЕ И ЗАМЕНА
   ========================================================================== */

// Удаление:
circles[0].remove();               // Современно
// wrapper.removeChild(hearts[1]); // Устарело

// Замена:
hearts[0].replaceWith(circles[0]);           // Современно: заменить hearts[0] на circles[0]
// wrapper.replaceChild(circles[0], hearts[0]); // Устарело: replaceChild(кто, кого)


/* ==========================================================================
   6. ВСТАВКА КОНТЕНТА И HTML
   ========================================================================== */

// Вставка HTML-структуры (парсит теги, риск XSS при внешних данных)
div.innerHTML = "<h1>Hello World!</h1>"; 

// Безопасная вставка чистого текста (не парсит теги)
// div.textContent = "Hello";

// Вставка верстки в конкретную позицию относительно div:
// Позиции: 'beforebegin' (до), 'afterbegin' (внутрь в начало), 'beforeend' (внутрь в конец), 'afterend' (после)
div.insertAdjacentHTML("afterend", "<h2>Hello</h2>");