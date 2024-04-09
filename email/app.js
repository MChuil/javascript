document.addEventListener('DOMContentLoaded', ()=>{
    //crear el objeto email
    const email = {
        correo : '',
        asunto: '',
        mensaje: ''
    }

    //Seleccionar los elementos del DOM
    const spinner = document.querySelector('#spinner')
    const inputCorreo = document.querySelector('#correo')
    const inputAsunto = document.querySelector('#asunto')
    const inputMensaje = document.querySelector('#mensaje')
    const btnEnviar = document.querySelector('#btnEnviar')
    const btnReset = document.querySelector('#btnReset')
    const formulario = document.querySelector('#form')

    
    btnEnviar.style.opacity='30%'

    //Listener (eventos)
    inputCorreo.addEventListener('blur', validar)
    inputAsunto.addEventListener('blur', validar)
    inputMensaje.addEventListener('blur', validar)
    btnReset.addEventListener('click', (e) => {
        e.preventDefault()
        resetFormulario()
    })

    formulario.addEventListener('submit', enviarCorreo)

    function validar(event){
        // validar campo vacio
        if(event.target.value === ''){
            mostrarError(`El campo ${event.target.id} esta vacio...`, event.target.parentElement)
            email[event.target.name] = ''
            validarObjetoEmail()
            return
        }

        // validación de correo
        if(event.target.id ==='correo' && !validarCorreo(event.target.value)){
            mostrarError(`El campo correo no tiene un formato valido...`, event.target.parentElement)
            email[event.target.name] = ''
            validarObjetoEmail()
            return
        }


        //validar longitu de asunto
        if(event.target.id=='asunto' && event.target.value.length < 5){
            mostrarError(`El campo asunto debe tener una longitud minima de 5 caracteres`, event.target.parentElement)
            email[event.target.name] = ''
            validarObjetoEmail()
            return
        }

        //validar longitu de mensaje
        if(event.target.id=='mensaje' && event.target.value.length < 10){
            mostrarError(`El campo mensaje debe tener una longitud minima de 10 caracteres`, event.target.parentElement)
            email[event.target.name] = ''
            validarObjetoEmail()
            return
        }

        
        //cuando se pasa la validacion
        //limpiar errores
        limpiarErrores(event.target.parentElement)

        //asignar valores al objeto email
        email[event.target.name] = event.target.value.trim().toLowerCase()

        validarObjetoEmail()
        
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

    function validarObjetoEmail(){
        if(email.correo != '' && email.asunto != '' && email.mensaje != ''){
            btnEnviar.style.opacity='100%'
            btnEnviar.removeAttribute('disabled')
        }else{
            btnEnviar.style.opacity='30%'
            btnEnviar.setAttribute('disabled', true)
        }
    
    }

    function enviarCorreo(e){
        e.preventDefault()
        console.log("Enviando....")
        spinner.style.display = 'block'

        setTimeout(() => {
            resetFormulario()

            //crear alerta de exito
            const alerta = document.querySelector('div')
            alerta.style.display = 'block'
            alerta.style.backgroundColor= 'green'
            alerta.style.color= 'white'
            alerta.style.borderRadius =  '5px'
            alerta.style.padding= '5px 10px'
            alerta.style.margin='10px 0px'
            alerta.textContent = 'Correo enviado correctamente...'
            formulario.appendChild(alerta)

            setTimeout(() => {
                alerta.remove()
            }, 2000);

        }, 2000);
        
    }

    //reiniciar el objeto email
    function resetFormulario(){
        email.correo = ''
        email.asunto = ''
        email.mensaje = ''
        spinner.style.display = 'none'
        validarObjetoEmail()
        formulario.reset()
    }
})
