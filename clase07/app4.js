/**
 *  forEach
 *      Permite recorerr arrays
 * 
 */

const pendientes = [
        'Estudiar JavaScript', 
        'Hacer los ejercicios de JS', 
        'Ir Gym', 
        'Leer un buen libro', 'Comer'
];

// pendientes.forEach((pendiente, indice) => {
//     console.log(`Indice: ${indice} | ${pendiente}`);
// })

const arregloForEach = pendientes.forEach(pendiente => pendiente)

console.log(arregloForEach)
/**
 * 
 *  map
 * 
 *  Permite recorerr arrays y crear un array nuevo
 * 
 */

const arregloMap = pendientes.map(pendiente => pendiente );
console.log(arregloMap);