const listaProductos = document.querySelector('.products-slick')
listaProductos.addEventListener('click', agregarProducto)
let articleCar = []


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
    const infoProduct = {
        imagen : producto.querySelector('img').src,
        titulo : producto.querySelector('.product-name').textContent,
        precio : precio,
        id     : id,
        cantidad : 1
    }

    //agregar el producto al arreglo del carrito
    articleCar.push(infoProduct)
    console.log(articleCar)
    cartHtml()
}


//mostrar el carrito en el HTML

function cartHtml(){
    const cartList = document.querySelector('.cart-list')
    cartList.textContent = ''
    let subtotal = 0
    articleCar.forEach(item =>{
        const divPadre = document.createElement('div') //contenedor
        divPadre.classList = 'product-widget'

        const divImage = document.createElement('div') //div de imagen
        divImage.className = 'product-img'
        const img = document.createElement('img') //imagen
        img.src = item.imagen
        divImage.appendChild(img)
        divPadre.appendChild(divImage)

        const divBody = document.createElement('div')
        divBody.className='product-body'
        //crear y agregar el h3
        const h3 = document.createElement('h3')
        h3.className = 'product-name'
        const a = document.createElement('a')
        a.href ="#"
        a.textContent= item.titulo
        h3.appendChild(a)
        divBody.appendChild(h3)
        //crear y agregar el h4
        const h4 = document.createElement('h4')
        h4.className ='product-price'
        const span = document.createElement('span')
        span.className='qty'
        span.textContent= item.cantidad
        h4.appendChild(span)
        h4.textContent= `$ ${Number(item.precio).toFixed(2)}`
        divBody.appendChild(h4)
        divPadre.appendChild(divBody)
        let importe = Number(item.cantidad) * Number(item.precio)
        //crear boton
        const btn = document.createElement('button')
        btn.className ='delete'
        const i = document.createElement('i')
        i.classList='fa fa-close'
        btn.append(i)
        divPadre.appendChild(btn)

        cartList.appendChild(divPadre)

        subtotal += importe

    })
    const small = document.createElement('small')
    small.textContent = `${articleCar.length} Productos seleccionados`
    const h5 = document.createElement('h5')
    h5.textContent = `SUBTOTAL: $ ${subtotal}`

    const cartSummary = document.querySelector('.cart-summary')
    cartSummary.textContent = ''
    cartSummary.appendChild(small)
    cartSummary.appendChild(h5)

}