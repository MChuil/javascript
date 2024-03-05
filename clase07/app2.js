/**
 * 
 *  Ciclo While
 * 
 *      Sintaxis:
 *          while(condicion){
 *              codigo
 *              
 * 
 *              incrementador
 *          }
 */

let i = 0;

while(i <= 10){
    if(i % 2 == 0){
        console.log(`El número ${i} es PAR`);
    }else{
        console.log(`El número ${i} es IMPAR`);
    }

    i++
}

