
//Function Expression
const curso = function(lenguaje){
    console.log(`Aprendiendo ${lenguaje}`);
}


//Arrow function
const curso2 = (lenguaje) =>  `Aprendiendo ${lenguaje}`;

curso('JavaScript');

console.log(curso2('JavaScript'));


const carrito = [
    {nombre: 'Mouse optico', precio: 10000},
    {nombre: 'Teclado mecanico', precio: 50000},
    {nombre: 'Celular', precio: 1000000},
    {nombre: 'Monitor 20"', precio: 10000000},
];


// carrito.forEach(function(item){
//     console.log(`${item.nombre} -  Precio: ${item.precio}`);
// })

carrito.forEach( item => console.log(`${item.nombre} -  Precio: ${item.precio}`) );


// Arrow function en reproductor
const reproductor = {
    reproducir: cancion => console.log(`Se esta reproduciendo la cancion ${cancion}`),
    
    pausar: () => console.log("Pausando..."),

    borrar: nombre => console.log(`Eliminando la cancion ${nombre}`),

    crearPlayList: nombre_lista => console.log(`Creando la Playlist ${nombre_lista}`),

    reproducirPlayList: nombre_lista => console.log(`Reproduciendo la play list ${nombre_lista}`)
}

const reproductor2 = {
    reproducir:function(cancion){
        console.log(`Se esta reproduciendo la cancion ${cancion}`);
    },

    pausar: function(){
        console.log("Pusando...");
    },

    borrar: function(nombre){
        console.log(`Eliminando la cancion ${nombre}`);
    },

    crearPlayList: function(nombre_lista){
        console.log(`Creando la Playlist ${nombre_lista}`);
    },

    reproducirPlayList: function(nombre_lista){
        console.log(`Reproduciendo la play list ${nombre_lista}`);
    }

}

var v1 = "Muse - Falling Away With You";
var v2 = "Mi lista 01";

reproductor.reproducir(v1);
reproductor.pausar();
reproductor.borrar(v1);
reproductor.crearPlayList(v2);
reproductor.reproducirPlayList(v2);