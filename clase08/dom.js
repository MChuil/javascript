// let element;

// element = document.all;
// let cabeza = document.head
// let cuerpo = document.body
// let dominio = document.domain;
// let form = document.forms;
// // let subtitulos = document.body.h2;
// let js = document.scripts;


// console.log(element);
// console.log('head', cabeza);
// console.log('body', cuerpo);
// console.log('dominio', dominio);
// console.log('form', form[0].id);
// console.log('h2', subtitulos);
// console.log('Clases de formulario', form[1].classList);
// console.log('script', js)


//seleccionar elemento en base a su clase
const title = document.getElementsByClassName('titulo')
const register = document.getElementsByClassName('registro')
console.log(title)
console.log(register)

const subtitulos = document.getElementsByClassName('subtitulo');
console.log(subtitulos)

const noExiste = document.getElementsByClassName('contacto');
console.log(noExiste)

const sub = document.getElementById('sub1');
console.log(sub)

//querySelector ------------------------------------


// const form1 = document.querySelector('.registro')
const form1 = document.querySelector('#form1')
console.log(form1)


//podemos tener selectores especificos
const parrafo = document.querySelector('.contenido .info .saludo')
console.log(parrafo);
