
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

console.log(arrObj[1]);  // выводим значение свойства объекта arrObj по ключу 1

arrObj.b = '1234';  // способ добавления нового свойства в объект arrObj с ключом 'b' и значением '1234'
arrObj['b'] = '1234';

console.log(arrObj['b']);  // выводим значение свойства объекта arrObj по ключу 'b'
console.log(arrObj.b); 