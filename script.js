let obj = receipt();
console.log(obj);

let deliv = 9000;

let menu = 'Вы заказали '

for(const key in obj) {
    menu = menu + `${key}`;
    for (const newKey in obj[key]) { 
        menu = newKey == 'info' ? menu + `${obj[key][newKey]}, ` : menu + '';
        deliv = newKey == 'price' ? deliv + obj[key][newKey] : deliv;
    }
}

console.log(`${menu} | Общая стоимость ${deliv} с доставкой (9000)`);
