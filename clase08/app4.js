const carrito = [
    {nombre: 'Mouse optico', precio: 10000},
    {nombre: 'Teclado mecanico', precio: 50000},
    {nombre: 'Celular', precio: 1000000},
    {nombre: 'Monitor 20"', precio: 10000000},
    {nombre: 'Laptop 15"', precio: 50000000}
];

const result = carrito.filter( product => product.precio >= 1000000);
console.log(result)

const result2 = carrito.filter(product => product.nombre != 'Celular')
console.log(result2)