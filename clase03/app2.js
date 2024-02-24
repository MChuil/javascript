"use strict";

const student = {
    name : "Felipe",
    email : "felipe@gmail.com"
}
Object.freeze(student);  //Congelando el objeto

// student.name = "Pedro";
// student.phone = "1234567890";
console.log(student);

// Copiar objetos

const product = {
    name : "Monitor 28 pulgadas",
    brand: "LG",
    price: 6000000
}

const medidas = {
    peso: "8kg",
    medida: '1m'
}

const result = Object.assign(product, medidas);
console.log(result);

//Spread Operator
const result2 = { ...product, ...medidas}
console.log(result2);

