// const menu = document.querySelector('.navbar')
// console.log(menu.firstElementChild)
// console.log(menu.lastElementChild)

// console.log(menu.childNodes);
// console.log(menu.children);

// const firstLink = document.querySelector('li')
// firstLink.remove(); //eliminación directa
// console.log(firstLink);


// Eliminar desde el padre
const navbar = document.querySelector('.navbar')
// console.log(navbar.children)

// navbar.removeChild(navbar.children[1])

//Agregar HTML

const li = document.querySelector('li')
const link = document.createElement('a')
// agregando texto
link.textContent = 'Nuevo enlace'
link.href="htts://google.com"
link.target = "_blank"
console.log(link)

li.appendChild(link)
console.log(li)

const navegacion = document.querySelector('.navbar');
navegacion.appendChild(li)

const image = document.createElement('img')
image.src = "https://www.dongee.com/tutoriales/content/images/size/w1000/2022/10/image-83.png"
image.style.width = '120px'


const main = document.querySelector('main');
main.appendChild(image)

const tbl = document.createElement('table')