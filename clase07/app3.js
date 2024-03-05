/**
 *  Do While
 * 
 *      Sintaxis:
 *      
 * 
 *      do{
 *          codigo
 * 
 * 
 *          incrementador
 *      }while(condicion)
 */


let x = 15;

do{
    if(x % 2 == 0){
        console.log(`El número ${x} es PAR`);
    }else{
        console.log(`El número ${x} es IMPAR`);
    }

    x++
}while(x <= 10)
