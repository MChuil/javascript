const carrito = [
    {nombre: 'Mouse optico', precio: 10000},
    {nombre: 'Teclado mecanico', precio: 50000},
    {nombre: 'Celular', precio: 1000000},
    {nombre: 'Monitor 20"', precio: 10000000},
    {nombre: 'Laptop 15"', precio: 50000000}
];


// con un foreach
let result = '';
carrito.forEach((product, index)=>{
    if(product.nombre == 'Laptop 15"'){
        result = carrito[index];  //carrito[4]
    }
})
console.log(result)



// con .find
const result2 = carrito.find( product => product.nombre == 'Laptop 13"')
console.log("Con .find", result2)