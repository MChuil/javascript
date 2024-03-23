const header = document.querySelector('header')

window.addEventListener('scroll', ()=>{
    // const scrollPx = window.scrollY
    // const scrollX = window.screenX
    // const ejemplo = document.querySelector('.ejemplo')
    // const ubicacion = ejemplo.getBoundingClientRect() //obtiene las posiciones del elementos
    // console.log(ubicacion);
    // if(ubicacion.top < 950){
    //     console.log('Elemento visible')
    // }

    const h1 = document.querySelector('h1')
    const ubicacion = h1.getBoundingClientRect()
    if(ubicacion.top < 6){
        header.marginTop =  '0px';
        header.style.boxShadow = '1px 2px 8px 4px';
        header.style.position = 'fixed'
        header.top ="0px"
        console.log(ubicacion)
    }else{
        header.style.boxShadow = 'none';
        header.style.position = 'relative'
    }
})