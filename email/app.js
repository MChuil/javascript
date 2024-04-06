document.addEventListener('DOMContentLoaded', ()=>{
    //Seleccionar los elementos del DOM
    const inputCorreo = document.querySelector('#correo')
    const inputAsunto = document.querySelector('#asunto')
    const inputMensaje = document.querySelector('#mensaje')
    const btnEnviar = document.querySelector('#btnEnviar')
    const formulario = document.querySelector('#form')

    
    btnEnviar.style.opacity='30%'
    //Listener (eventos)
    inputCorreo.addEventListener('blur', validar)

    inputAsunto.addEventListener('blur', validar)
    
    inputMensaje.addEventListener('blur', validar)

    function validar(event){
        // validar campo vacio
        if(event.target.value === ''){
            mostrarError(`El campo ${event.target.id} esta vacio...`, event.target.parentElement)
            return
        }

        // validación de correo
        if(event.target.id ==='correo' && !validarCorreo(event.target.value)){
            mostrarError(`El campo correo no tiene un formato valido...`, event.target.parentElement)
            return
        }

        //cuando se pasa la validacion
        limpiarErrores(event.target.parentElement)

        const email = {
            email : inputCorreo.value,
            asunto: inputAsunto.value,
            mensaje: inputMensaje.value
        }

        console.log(email)
    }
    
    function mostrarError(mensaje, referencia){
        limpiarErrores(referencia)

        const div = document.createElement('div')
        div.className='alert'
        div.style.border='1px'
        div.style.backgroundColor='red'
        div.style.borderRadius ='5px'
        div.style.color= 'white'
        div.style.padding= '5px 10px'
        div.style.margin='10px 0px'
        div.textContent = mensaje

        referencia.appendChild(div)
    }

    function limpiarErrores(referencia){
        //comprobar si ya existe una alerta
        const alerta = referencia.querySelector('.alert')
        if(alerta){
            alerta.remove()
        }
    }

    function validarCorreo(correo){
        const expresion = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        return  expresion.test(correo) //false o true
    }
})
