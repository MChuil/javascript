// const product = "Pc Gamer DELL";
// const price = 25000000;
// const quantity = 8;
// const color = "rojo";


// Object Literal. Un objeto agrupa toda la información en una sola variable

const product = {
    name     : "Pc Gamer",
    price    : 25000000,
    quantity : 8,
    color    : 'negro',
    promotion: true
}

console.log(typeof product);
console.log(product);

//Accesar a las propiedades (objeto.propiedad)
console.log('Nombre', product.name);
console.log('Precio', product.price);
console.log('Color', product.color);

//Agregar nuevas propiedades
product.brand = "Dell";
product.image = "imagen1.jpg";


//Eliminar propiedades
delete product.color;

console.log(product);

// let number = "898";
// console.log(typeof number);
// let name = product.name;
// let price = product.price;
// let quantity = product.quantity;
// let color = product.color;
// let promotion = product.promotion;


//Destructuring de Objetos
// const { name, price, brand } = product;
// console.log(name);
// console.log(price);
// console.log(brand);



// Objetos dentro de Objetos
const student = {
    name : 'Miguel',
    lastname : 'Chuil Martinez',
    address : 'Olivos #4',
    phone : '9661000000',
    ratings : {
        algoritmos: 7,
        diagramas: 7,
        language: {
            php: 7,
            javascript : 8,
            java: 7,
            python: 8
        }
    }
}

// accesar
console.log("JavaScript", student.ratings.language.javascript);

// agregar propiedades
student.email = 'developer.chuil';

student.ratings.language.csharp = 8;

//eliminar
delete student.ratings.language.python

console.log(student);

// Destructuring
const { name, ratings:{ algoritmos, language: { javascript, phyton } }, phone} = student;
console.log("Nombre", name);
console.log("algoritmos", algoritmos);
console.log("JavaScript", javascript);


