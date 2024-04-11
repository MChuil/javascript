const btnEnviar = document.querySelector('#btnEnviar')


btnEnviar.addEventListener('click', ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.ok ? Promise.resolve(response) : Promise.reject(response) )
    .then( response => response.json())
    .then( response => {
        console.log(response)
        // let listado = ''
        let registros = ''
        response.forEach(item => {
            // listado += `<li>${item.name} <small>(${item.email})</small></li>`
            registros += `<tr>
                        <td>${item.name}</td>
                        <td>${item.email}</td>
                        <td>${item.phone}</td>
                        <td>${item.website}</td>
                    </tr>`
        });
        // document.querySelector('#listado').innerHTML = listado
        document.querySelector('#registros').innerHTML = registros
    })

})

/**
 * fetch(URL).then()
 */

