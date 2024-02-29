const months = ['Enero', 'Febrero', 'Marzo'];

months[2] = 'March'; //cambiando valor

months[3] = "Abril"; //agregar

//.push agrega elementos al final
months.push('Mayo');
months.push('Junio');

console.table(months);


const cart = [];  //array vacio


const product1 = {
    description : 'Mouse optico',
    price: 10000
}

cart.push(product1);

const product2 = {
    description : 'Teclado mecanico',
    price: 50000
}
const product3 = {
    description : 'Celular',
    price: 1000000
}

cart.push(product2);
cart.push(product3);

const product4 = {
    description : 'Monitor 20"',
    price: 10000000
}
// .unshift agrega elementos al principio del array
cart.unshift(product4);
console.table(cart);

//Eliminar elementos del principio del array
months.shift();

//eliminar el ultimo elemento del array
months.pop();

console.table(months);


// .splice elimina 1 o mas elementos a partir de la posición dada
cart.splice(1,2);
console.table(cart);


//Destructuring con arreglos

const numbers = [8, 96, 47, 23, 51, 82, 22];
const [, , , , , num ] = numbers;

console.log(num);

/**
 * iterar arreglos
 * 
 *  for..each
 * 
 * Sintaxis:
 *      array.forEach(function(item){
 *          código
 *      })
 */

numbers.forEach(function(num){
    console.log('Numero', num);
})

const carrito = [
    {nombre: 'Mouse optico', precio: 10000},
    {nombre: 'Teclado mecanico', precio: 50000},
    {nombre: 'Celular', precio: 1000000},
    {nombre: 'Monitor 20"', precio: 10000000},
];

carrito.forEach(function(item){
    console.log(`${item.nombre} -  Precio: ${item.precio}`);
})
