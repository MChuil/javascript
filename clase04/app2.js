const numbers = [10, 23, 48, 200, 96]; // array con 5 elementos
               //0   1   2    3   4     indice
console.table(numbers);

const months = new Array('Enero', 'Febrero', 'Marzo');
console.table(months);

const ofAll = ['Miguel', 56, true, 89.6];
console.table(ofAll);


const numeros = [8,65,98,32,23,56,487,5454,4559,51, [99, 88, 77, 66, 55 , 44, [11, 22]]];
console.table(numeros);

console.table(numeros[5]);
console.table(numeros[1]);
console.log(numeros[10][0])
console.log(numeros[10][2])
console.log(numeros[10][6][1])


console.log("numeros", numbers.length) //cuenta el total de elementos del array
console.log("meses", months.length)


