document.addEventListener('DOMContentLoaded', ()=>{
    const btnAdd = document.querySelector('#btnAdd')
    btnAdd.addEventListener('click', agregar)

    const btnCancelar = document.querySelector('#btnCancelar')
    btnCancelar.addEventListener('click', cancelar)
})

function agregar(){
    //validar
    const description = document.querySelector('#description')
    const quantity = document.querySelector('#quantity')
    const price = document.querySelector('#price')
    
    if(description.length < 1 || quantity.value < 1 || isNaN(quantity.value) || price.value <1 || isNaN(price.value)){
        return
    }
    let tr = document.createElement('tr') //creamos la fila

    let td = document.createElement('td') //creamos la primer columna (celda)
    td.textContent = quantity.value //asignamos el valor
    tr.appendChild(td) //agregamos la columna a la fila

    td = document.createElement('td') //creamo la segunda columna
    td.textContent = description.value //asignamos el valor
    tr.appendChild(td) //agregamos la columna a la fila

    td = document.createElement('td') //creamo la tercer columna
    td.textContent = Number(price.value).toFixed(2) //asignamos el valor
    tr.appendChild(td) //agregamos la columna a la fila
    
    let importe = Number(price.value) * Number(quantity.value)
    td = document.createElement('td') //creamo la cuarta columna
    td.textContent = importe.toFixed(2) //asignamos el valor
    td.style.textAlign ='right'
    tr.appendChild(td) //agregamos la columna a la fila
 
    td = document.createElement('td') //creamo la quinta columna
    let button = document.createElement('button') //creamos el boton
    button.textContent = 'x'
    button.classList = 'btn btn-danger btn-sm'
    button.onclick = ()=> eliminar(tr)
    td.appendChild(button) //agregamos el boton a la columna
    tr.appendChild(td) //agregamos la columna a la fila

    const detalle = document.querySelector('#detalle')
    detalle.appendChild(tr)

    //calcular totales
    totales()

    //limpiar fomulario
    limpiar()
}

function totales(){
    const detalle = document.querySelector('#detalle')
    const filas = detalle.querySelectorAll('tr')
    let subtotal = 0
    filas.forEach(fila => {
        let columnas = fila.querySelectorAll('td')
        subtotal += Number(columnas[3].textContent)
    })
    let iva = subtotal * 0.16
    let total = subtotal + iva

    document.querySelector('#subtotal').textContent = subtotal.toFixed(2)
    document.querySelector('#iva').textContent = iva.toFixed(2)
    document.querySelector('#total').textContent = total.toFixed(2)
}

function limpiar(){
    document.querySelector('#description').value = null
    document.querySelector('#quantity').value = null
    document.querySelector('#price').value = null
    document.querySelector('#description').focus()
}

function eliminar(tr){
    tr.remove()
    totales()
}

function cancelar(){
    const response = confirm('¿Esta seguro de cancelar la factura?')
    if(response){
        location.reload()
    }
}