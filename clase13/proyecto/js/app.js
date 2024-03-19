const listaProductos = document.querySelector('.products-slick')
listaProductos.addEventListener('click', agregarProducto)

function agregarProducto(e){
    if(e.target.classList.contains('add-to-cart-btn')){
        console.log('Agregando al carrito...') 
        leerProducto(e.target.parentElement.parentElement)
    }
}

function leerProducto(producto){
    let precio = producto.querySelector('.product-price').textContent
    precio = precio.split(" ", 1);
    precio = Number(precio[0].replace('$', ''))

    let id = producto.querySelector('.add-to-cart-btn').getAttribute('data-id')
    const infoProducto = {
        imagen : producto.querySelector('img').src,
        titulo : producto.querySelector('.product-name').textContent,
        precio : precio,
        id     : id,
        cantidad : 1
    }

    console.log(infoProducto)
}