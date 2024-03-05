const pendientes = [
    'Estudiar JavaScript', 
    'Hacer los ejercicios de JS', 
    'Ir Gym', 
    'Leer un buen libro', 'Comer'
];

const carrito = [
    {nombre: 'Mouse optico', precio: 10000},
    {nombre: 'Teclado mecanico', precio: 50000},
    {nombre: 'Celular', precio: 1000000},
    {nombre: 'Monitor 20"', precio: 10000000},
    {nombre: 'Monitor 18"', precio: 10000000},
    {nombre: 'Monitor 26"', precio: 10000000},
];


/**
 * 
 * for..of
 * 
 *  sintaxis
 *      for(variable of array){
 *  
 *          codigo        
 *      }
 */


    for(let pendiente of pendientes){
        console.log(pendiente);
    }

    for(let producto of carrito){
        console.log(producto.precio)
    }

/**
 * 
 *  for..in
 *      sintaxis:
 *          for(variable in array){
 *              codigo
 *          }
 */

const auto = {
    modelo: "Lamburghini",
    year: 2024,
    motor: '9.0'
}

for(let item in auto){
    console.log(`${auto[item]}`) // auto[motor]
}

