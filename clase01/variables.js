/**
 * ¿Que es una variable?
 * Es un espacio en memoria que permite almacenar datos
 * 
 * Sintaxis:
 *  var nombredelavariable = valor;
 * 
 *  let nombredelavariable = valor;
 * 
 *  Reglas para declarar variables
 *  1) no pueden inciar con numero
 *  2) No pueden iniciar con simbolos (excepción guion bajo)
 *  3) El nombre de la variable no puede llevar espacios
 *  4) No usar simbolos
 *  5) No usar palabras reservadas del lenguaje
 * 
 *  Recomendaciones
 *  1) El nombre de la variable debe ser descriptivo
 *  2) Utiliza el Camel Case o el Pascal Case
 *  3) Utilizar palabras en Ingles 
 * 
 * 
 *  JavaScript es un lenguaje de tipado dimanico
 *  
 *  Tipos de datos
 *  - String
 *  - Numerico
 *  - Boolean
 */

var name = "Miguel Chuil";

let nombre = "Miguel Chuil"; //variable de tipo String

name = "Juan Camaney";

//CamelCase
let precioDelProducto = 8.5; //variable de tipo numerico

let NombreDelAlumno = "Martin"; //PascalCase

nombre = 3.1416;
console.log(nombre)

let casado = true;  //variable de tipo booleano

casado = "Hola";

let age; //solo se declara la variable, sin inicializar

age = 20; 