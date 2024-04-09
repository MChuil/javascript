const movies = [
    {
        title: 'Avengers, End Game I',
        year: 2018
    },{
        title: 'SpiderMan, back to home',
        year: 2020
    },{
        title: 'Iroman III',
        year: 2020
    },{
        title: 'Godzilla & King Kong',
        year: 2024
    },{
        title: 'DeadPool II',
        year: 2018
    },{
        title: 'Shazzam',
        year: 2020
    },{
        title: 'Bad boys Forever',
        year: 2019
    }
]

// const movies = []

function getMovies(){
    return new Promise((resolve, reject)=>{
        if(movies.length === 0){  //si no hay peliculas
            reject(new Error('No hay peliculas...'))
        }

        setTimeout(()=>{
            resolve(movies)
        }, 3000)
    })
}

// getMovies()
//     .then((response) => console.log(response))// cuando hay exito en la promesa
//     .catch((error) => console.log(error.message))


async function load(){
    const response = await getMovies()
    console.log(response)
}

load()


