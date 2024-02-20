/**
 *      String Methods
 */

const product = 'Laptop de 14" Dell';

console.log("Producto", product);


//conocer la cantidad de letras en un string
console.log ("longitud", product.length)


//indicar la posición en la que inicia la cadena a buscar
console.log(product.indexOf('HP'));


//indica si el string existe en la cadena
console.log(product.includes('Laptop')); // true/false


// Concatenar String

const producto = 'Teclado Mecanico';
let precio = 15000;

console.log('El producto ' + producto + ' tiene el precio de ' + precio);