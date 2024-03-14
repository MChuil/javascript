/**
 *  Detectar cuando un documento HTML esta listo (se termino de cargar)
 * 
 *  Sintaxis
 *      document.addEventListener(evento, acción)
 */
console.log(1)

document.addEventListener('DOMContentLoaded', () => {  //cuando termina de carga el HTML
    console.log(2) 
})

console.log(3)



/**
 * Eventos de mouse
 *      -click
 *      -doble click
 *      -etc
 */

const menu = document.querySelector('.menu')
//registrar evento
menu.addEventListener('mouseenter', () => {  // cuando el mouse entra en el elemento
    console.log('Pasaste por el menu')
    menu.style.backgroundColor = 'gray'
})

menu.addEventListener('mouseout', ()=>{  // cuando el mouse sale del elemento
    menu.style.backgroundColor = 'indigo'
})


const image = document.querySelector('.img')
//registrar el evento
image.addEventListener('mouseenter', ()=>{
    image.style.opacity = 0.6;
})

image.addEventListener('mouseout', ()=>{
    image.style.opacity = 1;
})

const btn = document.querySelector('.btn')
//registrar los eventos
btn.addEventListener('click', ()=>{  //cuando se da click en el elemento
    alert('Hola :)')
})


const h1 = document.querySelector('h1')
h1.addEventListener('mousedown', ()=>{  //cuando se presiona el boton
    h1.style.color ='red';
})

h1.addEventListener('mouseup', ()=>{ // cuando se suelta el boton
    h1.style.color = 'black';
})

const btn2 = document.querySelector('#btn')
//regitrar el evento
btn2.addEventListener('dblclick',()=>{  // cuando se da doble click en el elemento
    alert('diste doble click');
})