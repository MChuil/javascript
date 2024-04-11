const btn = document.querySelector('#btn')

btn.addEventListener('click', ()=>{
    const data = {
        title : 'Soy el titulo',
        body : 'Soy el body',
        userId : 1
    }
    //Metodo POST
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(res => console.log(res))
    .catch(err => console.log(err))
})