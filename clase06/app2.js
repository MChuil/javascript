/**
 *  Estructuras de control
 * 
 *  If
 * 
 *      Sintaxis
 *          if(condicion){
 *              código
 *          }
 * 
 *          if(condicion){
 *              codigo
 *          }else{
 *              codigo
 *          }
 *          
 *  operadores condicionales
 *      >
 *      <
 *      >=
 *      <=
 *      ==
 *      ===
 *      !=
 *      !==
 */

const puntos = 9999;

if(puntos >= 1000){

    console.log("Tiene descuento especial");

}else{

    console.log('No tiene puntos suficientes para un descuento');

}

const sexo = "G";

if(sexo =='F'){
    console.log('Femenino');
}else if(sexo == 'M'){
    console.log('Masculino');
}else if(sexo == 'G'){
    console.log('Gay');
}else if(sexo == 'T'){
    console.log('Trans');
}else{
    console.log('Valor no reconocido...');
}

const calificacion = '100';

if(calificacion === 100){ //si calificacion es diferente que 100
    console.log('Es igual');
}else{
    console.log('NO es igual');
}

/**
 *      Ejercicios:
 *      Vamos a solicitar la calificación al usuario con el siguiente codigo:
 *          const calificacion = prompt('Cual es tu calificación?')
 * 
 *      Dependiedo la calificación mandaremos los siguientes mensajes
 *          - si es igual 100 'Excelente'
 *          - si es igual 90  'Muy Bien'
 *          - si es igual 80  'Bien'
 *          - si es igual 70   'Suficiente'
 *          -  si es menor de 70 'reprobado'
 * 
 */ 


const calif = prompt('Cual es tu calificación?');

if(isNaN(parseInt(calif))){ // Not a Number
    console.log('El valor no es numerico');
}else{

    if(calif == 100){
        console.log('Excelente');
    }else if(calif == 90){
        console.log('Muy bien');
    }else if(calif == 80){
        console.log('bien');
    }else if(calif == 70){
        console.log('Suficiente');
    }else if(calif < 70){
        console.log('Reprobado');
    }else{
        console.log('Numero fuera de rango');
    }
    
}

