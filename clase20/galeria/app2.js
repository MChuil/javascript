const btnLoad = document.querySelector('#btnLoad')
btnLoad.addEventListener('click', load)


function load(){
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(data => {
        let photos = ''
        data.forEach(row => {
            photos += `<div class='col-3'>
                        <a href='${row.url}' target='_blank'><img src='${row.thumbnailUrl}'></a>
            </div>`
        });
        document.querySelector('#contenido').innerHTML = photos
    })
}