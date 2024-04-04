//variables
const tasks = [];
let time = 0;
let timer = null;
let timerBreak = null;
let current = null


//asignación del DOM
const form = document.querySelector('#form')
const inputTask = document.querySelector('#task')
const btnAdd = document.querySelector('#btnAdd')
const divTime = document.querySelector('#divTime')
const taskName = document.querySelector('#taskName')
//Listeners
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    //validar que no este vacio el input
    if(inputTask.value !== ''){
        //crear la tarea
        createTask(inputTask.value)
        inputTask.value = ''
        //cargar las tareas
        loadTasks()
    }
})

function createTask(value){
    //crear un objeto
    const newTask = {
        id: Date.now().toString(),
        title : value,
        completed: false
    }
    
    //agregar la tarea al array de Tareas
    tasks.unshift(newTask)
}

function loadTasks(){
    const newArray = tasks.map(item => {
        return `<div class='myTask'>
            <div class='completed'>${(item.completed) ? 'Completado': `<button class='btn btn-primary btn-sm btnStart' data-id ="${item.id}">Iniciar</button>`}</div>
            <div class='title'>${item.title}</div>
        </div>`
    })

    //pintar en el html
    const listTasks = document.querySelector('#listTasks')
    listTasks.innerHTML = newArray

    const btnStart = document.querySelectorAll('.btnStart')

    btnStart.forEach(btn =>{
        btn.addEventListener('click', (e)=>{
            console.log(timer)
           if(!timer){
                const id = btn.getAttribute('data-id')
                //procesar la tarea
                startButton(id)
                btn.textContent='En proceso...'
           }
        })
    })
}

function startButton(id){
    const current  = id
    time = 25 * 60 //1500 segundos
    const taskIndex = tasks.findIndex( task => task.id == id)
    
    taskName.textContent = tasks[taskIndex].title
    timer = setInterval(()=>{
        timeHandler(id)
    }, 1000) //1000 = 1 segundo
}


function timeHandler(id){
    time-- //restar en 1 el tiempo
    const minutes = parseInt(time / 60)
    const seconds = parseInt(time % 60)
    divTime.textContent = `${minutes<10? '0':''}${minutes} : ${seconds <10 ? '0': ''}${seconds}`
    if(time == 0){ //si llego a cero, detener el setinterval
        clearInterval(timer)
        timer = null
        taskName.textContent=''
        const taskIndex = tasks.findIndex( task => task.id == id)
        tasks[taskIndex].completed = true;
        loadTasks()
        //iniciar el break de 5 minutos
        startBreak()
    }
}


function startBreak(){
    time = 5*60
    taskName.textContent = 'Descanso'
    timerBreak = setInterval(()=>{
        breakHeandler()
    }, 1000)
}

function breakHeandler(){
    time-- //restar en 1 el tiempo
    const minutes = parseInt(time / 60)
    const seconds = parseInt(time % 60)
    divTime.textContent = `${minutes<10? '0':''}${minutes} : ${seconds <10 ? '0': ''}${seconds}`
    if(time == 0){ //si llego a cero, detener el setinterval
        clearInterval(timerBreak)
        timer = null
        taskName.textContent=''
        loadTasks()
    }
}
