const product = 'Tableta 10" Huawei';
const price = 15000;


console.info('El producto ' + product + ', tiene un precio de $' + price);

//Template String
console.log(`El producto ${product}, tiene un precio de $${price}`);


const producto = "                   Teclado Mecanico al 60%                        ";
console.log(producto);
// Eliminar espacios en blanco al inicio
console.log(producto.trimStart());

// Eliminar espacios en blanco al final
console.log(producto.trimEnd());

// Eliminar espacios en ambos lados
console.log(producto.trim());

// Remplazar texto
console.info(product.replace('"', ' Pulgadas'))

// Cortar texto
console.log(product.slice(0, 10));
console.log(product.slice(8));

// Repetir texto
const text = ' en Promoción'.repeat(3);
console.log(`${product}, ${text} !!!`);

// divir string
const actividad = 'Estoy aprendiendo JavaScript';
console.log(actividad.split(" "))

const hobbies = "Leer, programar, escuchar musica, cine, caminar";
console.log(hobbies.split(','));

// modificar texto mayusculas y minusculas
console.log(hobbies.toUpperCase()) //mayusculas
console.log(hobbies.toLowerCase()) //minisculas

const email = "MIGUEL@TEST.COM";
const emailTwo = "Miguel@test.com";

console.log(email.toLowerCase());

