const carrito = [
    {nombre: 'Mouse optico', precio: 10000},
    {nombre: 'Teclado mecanico', precio: 50000},
    {nombre: 'Celular', precio: 1000000},
    {nombre: 'Monitor 20"', precio: 10000000},
    {nombre: 'Laptop 15"', precio: 50000000}
];


// con foreach
let total = 0;
carrito.forEach( product => total += product.precio)

console.log('Total a pagar', total)

// con .reduce
let total2 = carrito.reduce((total, product) => total + product.precio,  0)
console.log('Total a pagar con reduce', total2)
