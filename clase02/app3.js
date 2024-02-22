
/**
 *  Operadores de comparación
 *  como su nombre lo dice comparan datos y dan como resultado falso o verdadero
 *  <   menor q
 *  >   mayor q
 *  <=  menor o igual q
 *  >=  mayor o igual q
 *  ==  igual q
 *  === 
 *  !=  diferente q
 */

const number1 = 25;
const number2 = 10;
const number3 = "25";

// mayor que
console.log(number1 > number2);
console.log(number2 > number3); // 30 > 25


// menor que
console.log(number1< number2);


console.log(number1 >= number2); //

//revisar si 2 numeros son iguales
console.log(number1 == number3); // true

// comparador estricto
console.log('Comparación estricta', number1 === parseInt(number3)); // true

console.log(typeof number1);
console.log(typeof number3);


// Diferente
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2); // true

console.log(number1 != number3); // false

// diferenciación estricta
console.log(number1 !== number3); // true
