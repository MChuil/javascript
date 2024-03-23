// Guardar información

// localStorage.setItem('name', 'Miguel Martinez')

// const estudiante = {
//     name: 'Miguel Martinez',
//     email: 'miguel@test.com',
//     phone: 9661015656,
//     hobbies:{
//         1 : 'leer',
//         2: 'programar',
//         3: 'musica'
//     }
// }
// console.log(estudiante)
// const studentString = JSON.stringify(estudiante)
// console.log(studentString)
// localStorage.setItem('student', studentString)

// const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
// const monthsString = JSON.stringify(months)
// localStorage.setItem('months', monthsString)


// Leer información ---------------------------------------------

// const student = localStorage.getItem('student')
// const studentObject = JSON.parse(student)
// console.log(studentObject)

// const  months = localStorage.getItem('months')
// const monthsArray = JSON.parse(months)
// console.log(monthsArray)

// const product = localStorage.getItem('product')
// if(product == null){
//     console.log('no existe')
// }else{
//     console.log('existe')
// }

//Actualizar información  ---------------------------------------------
// const months = localStorage.getItem('months')
// const monthsArray = JSON.parse(months)
// monthsArray.push('Julio')
// monthsArray.push('Agosto')
// monthsArray.push('Septiembre')
// monthsArray.push('Octubre')
// monthsArray.push('Noviembre')
// monthsArray.push('Diciembre')
// console.log(monthsArray)
// localStorage.setItem('months', JSON.stringify(monthsArray))

// Eliminar datos ---------------------------------------------

// localStorage.removeItem('name')
// localStorage.removeItem('student')

// Limpiar el LocalStorage
localStorage.clear()

