const number1 = 89;
const number2 = 68946;
const number3 = 3.1416;
const number4 = .569689;
const number5 = 4;

const text = "89";
console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);
console.log(text);

// Operaciones
let result;
//Suma
result = number1 + number2;

//Resta
result = number3 - number4;

//Multiplicación
result = number3 * number4;

//División
result = number1 / 2;

//Residuo
result = number1 % number5;

console.info("Resultado", result);


//Objeto Math
console.log(Math.PI);
console.log(Math.round(4.1));
console.log(Math.round(4.6));

// redondear hacia arriba
console.log(Math.ceil(9.1));

// redondear hacia abajo
console.log(Math.floor(56.999))

// Raiz cuadrada
console.log(Math.sqrt(144));

// Potencia
console.log(Math.pow(4, 3));

// minimo
console.log(Math.min(2, 8, 45, 4, 9, -1));
//maximo
console.log(Math.max(2, 8, 45, 4, 9, -1));

// Aleatorios
console.log(Math.random());

// Aleatorios en un rango
console.log(Math.floor(Math.random()*50));


// orden en las operación

let resultado;

resultado = 20 + 30 * 2; //  80
resultado = (20 + 30) * 2; //  100

// 20% de descuento en mi total del carrito de compras
resultado =  (20 + 30 + 40 + 50 + 80) * .2; //

console.info(resultado);

/**
 * Orden de prioridad
 *  ()
 *  * /
 *  + -
 */

// Incrementos y decrementos
/**
 * incrementar en una unidad ++
 * ejemplo:
 *  porcentaje++
 *  ++porcentaje
 * 
 * 
 * decrementar en una unidad --
 * ejemplo:
 * porcentaje --
 * --porcentaje
 * 
 */
let puntaje = 5
// puntaje++ // 5 post incremento
// ++puntaje // 6 pre incremento

// puntaje-- // 5 post decremento
// --puntaje // 4 pre decremento

// r = 10 * --puntaje;
// console.log("R", r);

puntaje +=  90;

puntaje -= 45;

console.log(puntaje);

// Convertir String a Números
const numero1 = "25";
const numero2 = "56.3";
const numero3 = "Dos";
const numero4 = 144.9;

console.log(numero1);
console.log(Number.parseInt(numero1));  //integer - numero entero
console.log(Number.parseFloat(numero2));  //Float - numero con decimales

console.log(Number.parseFloat(numero3));

// revisar si es un numero entero o no
console.log(Number.isInteger(numero4)); // true/false