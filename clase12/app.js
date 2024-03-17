const inputText = document.querySelector('#nombre')

inputText.addEventListener('keyup', (event) =>{  //al soltar la tecla
    if(event.target.value != ''){
        let error = document.querySelector('#errorNombre')
        error.textContent = ""
    }
})

inputText.addEventListener('blur', (e)=>{ // cuando pierde el foco
    //validar si se escribio algo
    if(e.target.value == ''){
        let error = document.querySelector('#errorNombre')
        error.textContent = "Es obligatorio escribir tu nombre"
        error.style.color= "red"
        inputText.focus();
    }
})

inputText.addEventListener('copy', ()=>{ //cuando se copia la información del input
    console.log("texto copiado...")
})

inputText.addEventListener('cut', ()=>{ //cuando se corta la información del input
    console.log("texto cortado...")
})

inputText.addEventListener('focus', ()=>{  // cuando obtiene el foco

})



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
