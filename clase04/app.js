const product = {
    name     : "Pc Gamer",
    price    : 25000000,
    quantity : 8,
    color    : 'negro',
    promotion: true
}

console.log(Object.keys(product)); //muestra solo las llaves del objeto
console.log(Object.values(product)); //muestra solo los valores de cada llave
console.log(Object.entries(product)); //muestra 

console.log(product);