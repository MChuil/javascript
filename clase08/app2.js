const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto']


const carrito = [
    {nombre: 'Mouse optico', precio: 10000},
    {nombre: 'Teclado mecanico', precio: 50000},
    {nombre: 'Celular', precio: 1000000},
    {nombre: 'Monitor 20"', precio: 10000000},
    {nombre: 'Laptop 15"', precio: 50000000}
];

months.forEach((month, i) =>{
    if(month === 'Mayo'){
        console.log(`Encontrado en el indice ${i}`)
    }
})

// Encontrar el indice en un array
const indice = months.findIndex(month => month === 'Noviembre')
console.log(`Indice encontrado: ${indice}`);

const indice2 = carrito.findIndex( product => product.precio == 50000);
console.log(`Precio encontrado en el indice: ${indice2}`);
