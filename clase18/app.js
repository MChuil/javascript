// const hoy = new Date();

// const year = hoy.getFullYear()
// const month = hoy.getMonth()  //inicia en cero (Enero = 0)
// const day = hoy.getDay();
// const hour = hoy.getHours()
// const minutes = hoy.getMinutes();
// const seconds = hoy.getSeconds()

// const time = hoy.getTime()
// console.log(hoy)

// console.log('Año', year)
// console.log('Mes', month)
// console.log('Dia', day)

// console.log("Hora", hour)
// console.log("Minutos", minutes)
// console.log("Segundos", seconds)
// console.log("Time", time)

const clock = document.querySelector('#clock')

//listener
document.addEventListener('DOMContentLoaded', ()=>{
    const divFecha = document.querySelector('#fecha')
    const year = document.querySelector('#year')
    
    const now = new Date()
    year.textContent = now.getFullYear()
    divFecha.textContent = `${formatNumber(now.getDay())}-${getMonths(now.getMonth())}-${now.getFullYear()}`
    setInterval(()=>{
        getClock()
    }, 1000)

    // 5/4/2024
    // 05/Abril/2024
})

function getMonths(month){
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']
    return months[month]
}

function getClock(){
    const now = new Date()
    clock.textContent = `${formatNumber(now.getHours())} : ${formatNumber(now.getMinutes())} : ${formatNumber(now.getSeconds())}`
}

function formatNumber(num){
    return (num<10) ? `0${num}` : num
}