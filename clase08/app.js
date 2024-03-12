const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto']


const carrito = [
    {nombre: 'Mouse optico', precio: 10000},
    {nombre: 'Teclado mecanico', precio: 50000},
    {nombre: 'Celular', precio: 1000000},
    {nombre: 'Monitor 20"', precio: 10000000},
    {nombre: 'Laptop 15"', precio: 50000000}
];


// comprobar si existe un mes(mayo) en el array months
// for(let i = 0; i < months.length; i++){
//     if(months[i] === 'Enero'){
//         console.log('Existe el mes de Enero');
//     }
// }

// months.forEach((month)=>{
//     if(month == 'Junio'){
//         console.log('El mes de Junio existe')
//     }
// })

// metodo includes
const result = months.includes('Diciembre');
console.log(result)

//metodo some en un arreglo de objetos

const result2 = carrito.some( product => product.nombre == 'Proyector')
console.log(result2)

const result3 = months.some( month => month === 'Febrero');
console.log('Resultado de busqueda (some)', result3)