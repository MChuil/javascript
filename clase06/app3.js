/**
 *  Operadores de unión
 *      && (and)
 *      || (or)
 */

    const sueldo = 23000000;

    if(sueldo < 1000000){
        console.log('Es una abuso');
    }else if(sueldo >= 1000000 && sueldo <= 1500000){
        console.log('sueldo minimo');
    }else if(sueldo >=1500001 && sueldo <= 3000000){
        console.log('buen sueldo');
    }else if(sueldo >3000000 && sueldo <= 5000000){
        console.log('excelente');
    }else{
        console.log('Tu eres politico');
    }
    /**
     *  menor de 1 millon = abuso
     *  1millon a 1.5millon = sueldo minimo
     *  1.51millon a 3millon = buen sueldo
     *  de 3.1millon a 5millon = excelente
     *  5.1millones en adelante = "Tu eres politico"
     */


// const calif = prompt('Cual es tu calificación?');

// if(isNaN(parseInt(calif))){ // Not a Number
//     console.log('El valor no es numerico');
// }else{

//     if(calif == 100){
//         console.log('Excelente');
//     }else if(calif == 90){
//         console.log('Muy bien');
//     }else if(calif == 80){
//         console.log('bien');
//     }else if(calif == 70){
//         console.log('Suficiente');
//     }else if(calif < 70){
//         console.log('Reprobado');
//     }else{
//         console.log('Numero fuera de rango');
//     }
    
// }
