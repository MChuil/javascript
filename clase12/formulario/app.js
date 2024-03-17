/**
 * 
 *  Ejercicio:
 * 
 *      Crear un formulario con lo siguientes campos:
 *          - nombre
 *          - email
 *          - contraseña
 *          - repetir contraseña
 * 
 *      Realizar las siguientes validaciones:
 *          - Ningun campo debe estar vacio
 *          - El nombre debe tener como minimo 10 caracteres
 *          - Validar que el correo tenga el formato correcto(@ .)
 *          - La contraseña debe tener minimo 8 caracteres
 *          - Repetir contraseña debe ser igual a contraseña
 */
const nombre            = document.querySelector('#nombre')
const email             = document.querySelector('#email')
const password          = document.querySelector('#password')
const repeat_password   = document.querySelector('#repeat_password')

nombre.addEventListener('blur', (e)=>{
    const error = document.querySelector('#errorNombre')
    if(e.target.value.length < 10){
        error.textContent = 'El nombre es obligatorio y debe tener una longitud minima de 10 caracteres'
        error.style.color = 'red'
        nombre.focus()
    }else{
        error.textContent= ''
    }

})

email.addEventListener('blur', (e)=>{
    const error = document.querySelector('#errorCorreo')
    if(e.target.value.length < 1){
        error.textContent = 'El correo es obligatorio'
        error.style.color = 'red'
        email.focus()
        return
    }
    if(e.target.value.indexOf('@') == -1){
        error.textContent = 'El formato del correo no parece correcto'
        error.style.color = 'red'
        email.focus()
        return
    }
    if(e.target.value.indexOf('.') == -1){
        error.textContent = 'El formato del correo no parece correcto'
        error.style.color = 'red'
        email.focus()
        return
    }
    error.textContent = ''
})

password.addEventListener('blur', (e)=>{
    const error = document.querySelector('#errorPassword')
    if(e.target.value.length < 8){
        error.textContent = 'La contraseña es obligatoria y debe tener minimo 8 caracteres'
        error.style.color = 'red'
        password.focus()
    }else{
        error.textContent= ''
    }
})

repeat_password.addEventListener('blur', (e)=>{
    const error = document.querySelector('#repeat_password')
    if(e.target.value !== password.text){
        error.textContent = 'La contraseña no coinciden'
        error.style.color = 'red'
        repeat_password.focus()
    }
})

/**
 * Ejercicio
 * 
 *  Crear un input solicitando el nombre completo de la persona y validar lo siguiente:
 *      - validar que sea texto
 *      - que no este vacio
 *      y despues de que la persona confirme su nombre, Mandaremos un alert dandole la bienvenida
 */

const inputName = document.querySelector('#name')

inputName.addEventListener('blur', (e)=>{
    if(e.target.value.length <1){
        alert('No ha indicado su nombre')
        inputName.focus();
        return
    }

    if(parseInt(e.target.value)){  //no puede ser numero
        console.log(parseInt(e.target.value))
        alert('No puede usar numeros')
        inputName.focus();
        return
    }

    alert(`Bienvenido(a) ${e.target.value}`)
})