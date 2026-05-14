// console.log(document.head);    показывает только head
// console.log(document.documentElement); показывает весь html код
// console.log(document.body.childNodes); // показывает все узлы внутри body
// console.log(document.body.firstChild); показывает первый узел внутри body
// console.log(document.body.firstElementChild); // показывает первый элемент внутри body
// console.log(document.body.lastChild); показывает последний узел внутри body
// console.log(document.body.lastElementChild); // показывает последний элемент внутри body

// console.log(document.querySelector('#current').parentNode); // показывает родителя элемента с id current 
// console.log(document.querySelector('#current').parentElement); // показывает родителя элемента с id current, но только если он является элементом (т.е. не текстовым узлом)


// console.log(document.querySelector('[data-current="3"]').nextSibling); // показывает следующий узел после элемента с атрибутом data-current="3"
// console.log(document.querySelector('[data-current="3"]').previousSibling); // показывает предыдущий узел перед элементом с атрибутом data-current="3"

// console.log(document.querySelector('[data-current="3"]').nextElementSibling); // показывает следующий элемент после элемента с атрибутом data-current="3"
// console.log(document.querySelector('[data-current="3"]').previousElementSibling); // показывает предыдущий элемент перед элементом с атрибутом data-current="3"


for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}  // перебираем все узлы внутри body, и если узел является текстовым (nodeName == '#text'), то пропускаем его с помощью continue. В итоге в консоли будут показаны только элементы внутри body.