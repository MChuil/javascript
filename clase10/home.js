const main = document.querySelector('main.container')
    const div = document.createElement('div')
    div.className ='card'
    div.style.width= '18rem'
    
    
    const image = document.createElement('img')
    image.className ='card-img-top'
    image.src ='https://images.pexels.com/photos/2323411/pexels-photo-2323411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    
    
    const divBody = document.createElement('div')
    divBody.className = 'card-body'
    
    
    const h5 = document.createElement('h5')
    h5.className= 'card-title'
    h5.textContent ='Titulo de Tarjeta'
    
    const p = document.createElement('p')
    p.textContent = 'Soy el rey de la jungla'
    p.className ='card-text'
    
    
    const a = document.createElement('a')
    a.className ='btn btn-primary'
    a.href= 'https://google.com'
    a.textContent = 'Ver mas'
    
    //agregamos los elementos dentro del div card-body
    divBody.appendChild(h5);
    divBody.appendChild(p);
    divBody.appendChild(a);
    
    div.appendChild(image); //agregando la imagen al div
    div.appendChild(divBody) //agregando un div al div padre
    
    main.appendChild(div) //agregando el div al main



/**
 * Ejercicio:
 * 
 *  Crear una tabla, de 4 columnas y tres filas
 */

// const table = document.createElement('table')  //tabla
// table.style.width="100%"

// let tr = document.createElement('tr') //fila

// let th = document.createElement('th') //celda
// th.style.border ="1px solid #000"
// th.textContent = 'Nombre'
// tr.appendChild(th)

// th = document.createElement('th')
// th.style.border ="1px solid #000"
// th.textContent = 'Edad'
// tr.appendChild(th)

// th = document.createElement('th')
// th.style.border ="1px solid #000"
// th.textContent = 'Correo'
// tr.appendChild(th)

// th = document.createElement('th')
// th.style.border ="1px solid #000"
// th.textContent = 'Telefono'
// tr.appendChild(th)

// table.appendChild(tr) //agregamos fila de encabezados

//crear la segunda fila
// tr = document.createElement('tr') //fila

// let td = document.createElement('td') //celda
// td.style.border ="1px solid #000"
// td.textContent = 'Miguel'
// tr.appendChild(td)

// td = document.createElement('td')
// td.style.border ="1px solid #000"
// td.textContent = '20'
// tr.appendChild(td)

// td = document.createElement('td')
// td.style.border ="1px solid #000"
// td.textContent = 'miguel'
// tr.appendChild(td)

// td = document.createElement('td')
// td.style.border ="1px solid #000"
// td.textContent = '123456789'
// tr.appendChild(td)

// table.appendChild(tr) //agregamos la segunda fila

// //crear la tercer fila

// tr = document.createElement('tr') //fila

// td = document.createElement('td') //celda
// td.style.border ="1px solid #000"
// td.textContent = 'Juan'
// tr.appendChild(td)

// td = document.createElement('td')
// td.style.border ="1px solid #000"
// td.textContent = '40'
// tr.appendChild(td)

// td = document.createElement('td')
// td.style.border ="1px solid #000"
// td.textContent = 'juan'
// tr.appendChild(td)

// td = document.createElement('td')
// td.style.border ="1px solid #000"
// td.textContent = '987654321'
// tr.appendChild(td)

// table.appendChild(tr) //agregamos la tercer fila

// //crear la cuarta fila

// tr = document.createElement('tr') //fila

// td = document.createElement('td') //celda
// td.style.border ="1px solid #000"
// td.textContent = 'Maria'
// tr.appendChild(td)

// td = document.createElement('td')
// td.style.border ="1px solid #000"
// td.textContent = '18'
// tr.appendChild(td)

// td = document.createElement('td')
// td.style.border ="1px solid #000"
// td.textContent = 'mary'
// tr.appendChild(td)

// td = document.createElement('td')
// td.style.border ="1px solid #000"
// td.textContent = '9876534125'
// tr.appendChild(td)

// table.appendChild(tr) //agregamos la cuarta fila

// const contenido = document.querySelector('#contenido')
// contenido.appendChild(table)


// Tabla Vacia
const datos = [
    {
        nombre: 'miguyel',
        edad: 10,
        correo: "miguel@test.com",
        telefono: 986565656
    },
    {
        nombre: 'Angel',
        edad: 20,
        correo: "angel@test.com",
        telefono: 986565656
    },
    {
        nombre: 'Pedro',
        edad: 15,
        correo: "pedro@test.com",
        telefono: 986565656
    },
    {
        nombre: 'Paula',
        edad: 18,
        correo: "paula@test.com",
        telefono: 986565656
    }
]



const table = document.createElement('table')  //tabla
table.style.width="100%"

let tr = document.createElement('tr') //fila

let th = document.createElement('th') //celda
th.style.border ="1px solid #000"
th.textContent = 'Nombre'
tr.appendChild(th)

th = document.createElement('th')
th.style.border ="1px solid #000"
th.textContent = 'Edad'
tr.appendChild(th)

th = document.createElement('th')
th.style.border ="1px solid #000"
th.textContent = 'Correo'
tr.appendChild(th)

th = document.createElement('th')
th.style.border ="1px solid #000"
th.textContent = 'Telefono'
tr.appendChild(th)

table.appendChild(tr) //agregamos fila de encabezados

//agregamos las 3 filas sin contenido
let y = 0;
for(let x= 0; x<=3; x++){  //inicio de ciclo de filas
    let td;
    tr = document.createElement('tr')  //creo la fila
    for(let i=0; i<=3; i++){ //ciclo para las celdas
        td =document.createElement('td') //creo la celda
        td.style.border ='1px solid #000' //le pongo borde
        if(i == 0){ //si i == 0 es la primer vuelta
            td.textContent = datos[y].nombre //datos[3].nombre
        }else if(i ==1){
            td.textContent = datos[y].edad 
        }else if(i == 2){
            td.textContent = datos[y].correo
        }else{
            td.textContent = datos[y].telefono
        }
        tr.appendChild(td)
    }
    y++
    table.appendChild(tr)
}

const contenido = document.querySelector('#contenido')
contenido.appendChild(table)