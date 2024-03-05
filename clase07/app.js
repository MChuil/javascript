/**
 *  Ciclo For
 *  
 *      Sintaxis:
 *      for(valor inicial; condicional; incrementador o decrementador){
 *          
 *          codigo
 * 
 *      }
 * 
 *      valor inicial: Se declara una variable y se le asiga un valor, ej: let i = 0
 *      condicional: La comparación de 2 valores, ej. i < 10
 *      incrementador o decrementador: Es la variable indicada en el primer parametro, ej: i++ o i--
 * 
 * 
 *      Cuando la condición es falsa se termina de repetir el código.
 *      Importante: TENER CUIDADO DE NO CREAR CICLOS INFINITOS
 * 
 * 
 *      break; //Sale del ciclo aunque no se haya llegado al final
 * 
 *      continue; // retorna 
 */


for(let i = 0; i <= 10; i++){
    if(i % 2 == 0){
        console.log(`El número ${i} es PAR`);
    }else{
        console.log(`El número ${i} es IMPAR`);
    }
}


const carrito = [
    {nombre: 'Mouse optico', precio: 10000},
    {nombre: 'Teclado mecanico', precio: 50000},
    {nombre: 'Celular', precio: 1000000},
    {nombre: 'Monitor 20"', precio: 10000000},
    {nombre: 'Monitor 18"', precio: 10000000},
    {nombre: 'Monitor 26"', precio: 10000000},
];

console.log(carrito.length)

for(let x = 0; x < carrito.length; x++){
    console.log(carrito[x]) //carrito[0]
}


/**
 *      break;
 */

for(let y = 0; y <= 10000; y++){
    if(y == 2){
        console.log("He encontrado el numero 2");
        break;
    }else{
        console.log(`Numero: ${y}`)
    }
}


/**
 *  continue
 */
for(let y = 0; y <= 10; y++){
    if(y == 5){
        console.log("EURECA!!! He encontrado el numero...");
        continue;
    }
    console.log(`Numero: ${y}`)
}


/**
 * 
 * Ejercicio: Adivina el número
 *      1) definir una variable con un numero que ustedes elijan entre 1 y 10
 *      2) preguntar por prompt, al usuario, que nos diga el numero que estamos pensando
 *      3) maximo 5 intentos
 */

const response = prompt('Adivina el numero que estoy pensando entre 1 y 10');