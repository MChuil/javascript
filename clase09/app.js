// let title = document.getElementsByClassName('title')
// console.log(title)

// let titulo = document.getElementById('titulo')
// console.log(titulo)

// ESC6 nuevo selector
// Selección por la Clase
let title = document.querySelector('.title')

// Seleccion por el ID
let titulo = document.querySelector('#titulo')

// let card = document.querySelector('.card')
// console.log(card)

// clase:nth-child(numero)
// let card2 = document.querySelector('.contenido .card:nth-child(4)')
// console.log(card2)


// let item1 = document.querySelector('.menu .item:nth-child(2)');
// console.log("resultado 1", item1)

// let item2 = document.querySelector('body.menu:nth-child(2) .item:nth-child(4)');
// console.log("resultado 2", item2)

// querySelectorAll

let menus = document.querySelectorAll('.menu')[1];
let item = menus.querySelectorAll('.item')[3]
// console.log(item)


// Seleción por elemento HTML
let p = document.querySelectorAll('p')
console.log(p)