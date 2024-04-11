//Select
const selectDepartamento = document.querySelector('#departamento')
const selectCiudad = document.querySelector('#ciudad')

//primera carga (departamentos)
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api-colombia.com/api/v1/Department')
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then( data => {

        let options = "<option value='' disabled selected>Seleccionar</option>"
        data.forEach( deptos => {
            options += `<option value='${deptos.id}'>${deptos.name}</option>`
        });
        selectDepartamento.innerHTML = options
    })
    .catch(err =>{
        let error = `No encontrado (${err.status})`
        selectDepartamento.nextElementSibling.innerHTML= `<div class="alert alert-danger" role="alert">${error}</div>`
        console.log(error)
    })
})

//listener
selectDepartamento.addEventListener('change', e => loadCities(e.target.value))

function loadCities(id){
    console.log(id)
    fetch(`https://api-colombia.com/api/v1/Department/${id}/cities`)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(data => {
        console.log(data)
        let options = "<option value='' disabled selected>Seleccionar</option>"
        data.forEach( city => {
            options += `<option value='${city.name}'>${city.name}</option>`
        });
        selectCiudad.innerHTML = options
    })
    .catch(err =>{
        let error = `Consulta de ciudades fallida (${err.status})`
        selectCiudad.nextElementSibling.innerHTML = `<div class="alert alert-danger" role="alert">${error}</div>`
        console.log(error)
    })
}