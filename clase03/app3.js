//Funciones en Objetos

let name   = 'Monitor 32"';
let price   =  10000000;
let brand   = 'LG';

const product    = {
    name    : 'Laptop 15.5"',
    price   : 6000000,
    brand   : 'Acer',
    showInfo : function(){ //función
        console.log(`El producto ${this.name}, de la marca ${this.brand}, tiene un precio de $${this.price}`);
    },
    medidas:{
        peso: "6kg"
    },
    descuento: function(){  // 20%
        let desc = this.price * 0.80;
        console.log("Nuevo precio", desc);
    }
}


product.showInfo();
product.descuento();
// console.log(`El producto ${name}, de la marca ${brand}, tiene un precio de $${price}`);
// bactics
