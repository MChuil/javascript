// variables
const form = document.querySelector('#form')
const pendientesList = document.querySelector('#pendientes')
const input = document.querySelector('#pendiente')

// EventListeners
form.addEventListener('submit', guardar)


//funciones
function guardar(e){
    e.preventDefault();
    //validar que no venga en blanco
    if(input.value == ''){
        showError('Debe escribir algo')
        return
    }
    let pendiente = input.value.toString() 
    if(pendiente.length < 5){
        showError('El pendiente no tiene la estructura adecuada')
        return
    }
    const li = document.createElement('li')
    li.textContent = input.value
    pendientesList.appendChild(li)
    input.value = ''
}

function showError(error){
    const div = document.createElement('div')
    div.classList.add('alert', 'alert-danger')
    div.textContent = error
    let card = document.querySelectorAll('.card')[1]
    card.parentElement.appendChild(div)
    input.focus()
    setTimeout(()=>{
        div.remove()
    }, 1500)
}