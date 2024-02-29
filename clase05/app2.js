/**
 *  Parametros y Argumentos en funciones
 * 
 */

function suma(a, b){  //a y b son parametros
    console.log(a + b);
}

function resta(a, b){
    console.log(a - b);
}

suma(22, 99);  // 22 y 99 son argumentos
suma(144, 3.1416);
suma(4, 4);
resta(9999, 8986);

function saludar(nombre, apellidos){
    console.log(`Hola ${nombre} ${apellidos}, bienvenido(a)`);
}

saludar('Miguel', 'Chuil');
saludar('Miguel');
saludar();

/**
 * 
 * Parametros por default (defecto)
 *  - no todas las funciones llevan parametros con valores por default
 *  - pueden mezclarse parametros obligatorios y opcionales
 *  - Los parametros con valores por defecto, SIEMPRE van al final
 */

function saludar2(nombre = 'Fulano', paterno ='de Tal', materno = ''){
    console.log(`Hola ${nombre} ${paterno} ${materno}, bienvenido(a)`);
}

saludar2('Julia', 'Perez');
saludar2();


function saludar3(nombre, paterno='', materno=''){
    console.log(`Hola ${nombre} ${paterno} ${materno}, bienvenido(a)`);
}

saludar3('Miguel');