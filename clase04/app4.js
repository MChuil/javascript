/**
 *          FUNCIONES
 *      Son trozos de código quer realizan acciones especificas
 *      y que se pueden reutilizar.
 * 
 *      Sintaxis:
 *      
 *      function nombreDeLaFuncion(){
 *          codigo
 *      }
 * 
 *      nombreDeLaFuncion();
 */

//declaración de la función
function saludar(){
    alert('Hola mundo, desde JavaScript...'); 
    console.log('Hola mundo, desde JavaScript...'); 
}


function despedida(){
    alert('Adios, mundo cruel...');
}

function obtenerPi(){
    console.log(3.1416);
}

function suma(){
    console.log(89 + 23);
}


saludar();

despedida();

suma();
