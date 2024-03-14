const btnSumar = document.querySelector('#btnSumar')
btnSumar.addEventListener('click', ()=>{
    sumar()
})

const btnLimpiar = document.querySelector('#btnLimpiar')
btnLimpiar.addEventListener('click', ()=>{
    limpiar()
})

function sumar(){
    const num1 = document.querySelector('#numberOne').value
    const num2 = document.querySelector('#numberTwo').value
    if(num1 =='' || num2 == ''){
        alert('Debes escribir ambos numeros')
    }else{
        const resultado = document.querySelector('#resultado')
        const result = parseInt(num1) + parseInt(num2)
        console.log('Resultado', result)
        resultado.textContent = `Resultado: ${result}`
    }
}

function limpiar(){
    document.querySelector('#numberOne').value = ''
    document.querySelector('#numberTwo').value =''
    document.querySelector('#resultado').textContent = 'Resultado'
}