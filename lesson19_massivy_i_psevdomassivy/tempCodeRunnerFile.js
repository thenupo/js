const products = [
    {
        name: "Телефон",
        price: 200000
    },
    {
        name: "Ноутбук",
        price: 500000
    },
    {
        name: "Наушники",
        price: 50000
    }
];

let total = 0;
for (let i = 0; i < products.length; i++) {
    console.log(`${products[i].name} - ${products[i].price}`);
    total = total + products[i].price;
    if (products[i].price > 100000) {
        console.log(`Дорогой товар: ${products[i].name}`);
    }
}
console.log(`Общая стоимость: ${total}`);