const formulario = document.querySelector('#formRegistro')

formulario.addEventListener('submit', validarFormulario)

function validarFormulario(e){
    e.preventDefault(); //cancelamos comportamiento por defecto
    console.log("Registrando...")
}