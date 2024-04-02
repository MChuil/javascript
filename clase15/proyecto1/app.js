// variables
const form = document.querySelector('#form')
const pendientesList = document.querySelector('#pendientes')
const input = document.querySelector('#pendiente')
const inputId = document.querySelector('#id')

// EventListeners
form.addEventListener('submit', guardar)
document.addEventListener('DOMContentLoaded', ()=>{
    loadTodo()
})


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

    const resp = confirm('¿Los datos son correctos?')
    if(!resp){
        return
    }

    if(inputId.value){ //si tiene valor es una edición
        editStorage(inputId.value, input.value)
    }else{ //es un nuevo pendiente
        //almacenar en localStorage
        saveStorage(input.value)
    }

    loadTodo()
    input.value = ''
}

function showError(error){
    const div = document.createElement('div')
    div.classList.add('alert', 'alert-danger', 'mt-4')
    div.textContent = error
    let card = document.querySelectorAll('.card')[1]
    card.parentElement.appendChild(div)
    input.focus()
    setTimeout(()=>{
        div.remove()
    }, 1500)
}

function saveStorage(pendiente){
    let data = {
        id: Date.now(),
        pendiente: pendiente
    }
    let myTodo = JSON.parse(localStorage.getItem('myTodo')) || []
    myTodo.push(data)
    localStorage.setItem('myTodo', JSON.stringify(myTodo))
}

function loadTodo(){
    //dejar en limpio el tbody (pendientes)
    pendientesList.innerHTML = ''

    //leemos el localStorage
    const data = JSON.parse(localStorage.getItem('myTodo'))

    //Recorrer los objetos para crear la tabla
    data.forEach(item => {
        const tr = document.createElement('tr')
        let td = document.createElement('td')
        td.textContent = item.id
        tr.appendChild(td)

        td = document.createElement('td')
        td.textContent = item.pendiente
        tr.appendChild(td)
    
        td = document.createElement('td')
        const btnEdit = document.createElement('button')
        btnEdit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
        btnEdit.onclick = () => editarItem(item.id)
        btnEdit.classList = ['btn btn-primary btn-sm mx-2']
    
        const btnDelete = document.createElement('button')
        btnDelete.innerHTML = '<i class="fa-solid fa-trash"></i>'
        btnDelete.classList = ['btn btn-danger btn-sm mx-2']
        btnDelete.onclick= () => deleteItem(item.id)

        td.appendChild(btnEdit)
        td.appendChild(btnDelete)
        tr.appendChild(td)
        pendientesList.appendChild(tr)
    });
}

function deleteItem(id){
    const resp = confirm('¿Estas seguro de eliminar?')
    if(!resp){
        return
    }
    //cargamos el localStorage
    const data = JSON.parse(localStorage.getItem('myTodo'))
    //creamos un nuevo array sin incluir el id que vamos a eliminar
    const newArray = data.filter(item => item.id != id)
    //guardamos el nuevo array que YA NO tiene el elemento eliminado
    localStorage.setItem('myTodo', JSON.stringify(newArray))

    //cargar nuevamente la tabla
    loadTodo()
}

function editarItem(id){
    //cargamos el localStorage
    const data = JSON.parse(localStorage.getItem('myTodo'))
    //creamos un nuevo array sin incluir el id que vamos a eliminar
    const newArray = data.filter(item => item.id == id)
    input.value= newArray[0].pendiente
    inputId.value = newArray[0].id
}

function editStorage(id, pendiente){
    console.log('id', id)

     //cargamos el localStorage
    const data = JSON.parse(localStorage.getItem('myTodo'))
    data.forEach(item => {
        if(item.id == id){
            item.pendiente = pendiente
        }
    })
    localStorage.setItem('myTodo', JSON.stringify(data))
    inputId.value = ''
    loadTodo()
}