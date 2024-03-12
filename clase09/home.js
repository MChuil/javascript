// obtener texto
const header = document.querySelector('.header h1')
console.log(header)

console.log('innerText', header.innerText); // si en el CSS se usa visibility: hidden, NO lo va a encontrar
console.log('textContent', header.textContent);// si en el CSS se usa visibility: hidden, SI lo va a encontrar
console.log('innerHTML', header.innerHTML); // texto y html

// const content = document.querySelector('#contenido')
// console.log(content.innerText)

// Cambiar texto
let newText = "Hola Mundo desde JavaScript"
document.querySelector('.header h1').textContent = newText

document.querySelector('#contenido').textContent = "Saludos desde México"; 

document.querySelector('#contenido').textContent = '<h3>Saludos desde <u>México</u></h3>'

document.querySelector('#contenido').innerHTML = '<h3>Saludos desde <u>México</u></h3>'


//cambiando la imagen
const newImage = 'https://images.idgesg.net/images/article/2023/04/shutterstock_1361674454-100939444-large.jpg'
const image = document.querySelector('.card img')
image.src = 'https://images.idgesg.net/images/article/2023/04/shutterstock_1361674454-100939444-large.jpg'


// agregar y/o modidficar el CSS
const encabezado = document.querySelector('h1')
console.log(encabezado.style)

encabezado.style.backgroundColor = 'green'
encabezado.style.color = '#fff'
encabezado.style.textAlign = 'center'
encabezado.style.borderRadius = '5px'
encabezado.style.width = '550px'
encabezado.style.marginLeft = 'auto'
encabezado.style.marginRight = 'auto'
// encabezado.style.textTransform = 'uppercase'

/**
 * 
 *  CSS => background-color : color;
 *  JS =>  backgroundColor  : color;
 * 
 *  CSS => justify-content  : 
 *  JS  => justifyContent   :
 * 
 *  CSS => font-family
 *  JS  => fontFamily
 * 
 *  CSS => text-align
 *  JS  => textAlign
 */