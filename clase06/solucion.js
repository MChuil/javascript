
const cuentaBancaria = {
    cliente : '',
    numeroCuenta : '',
    banco : '',
    saldo: 0,
    depositar: function(deposito = 0){
        this.saldo += deposito;
        console.log(`Se ha hecho un deposito de $${deposito} pesos`);
    },
    retirar: function(retiro = 0){
        if(retiro > this.saldo){
            console.log("Error, la cantidad a retirar es superior al dinero depositado disponible");
        }else{
            this.saldo -= retiro;
            console.log(`Se ha hecho un retiro de $${retiro} pesos`);
        }
    },
    consultarSaldo: function(){
        return this.saldo;
    }
}


var edad = prompt("ingrese su edad");
if(!isNaN(edad)){
    if (edad>=0 && edad <= 2){
        console.log("Eres un bebe");
    }else if(edad >=3 && edad<=12){
        console.log("Eres un niño");
    }else if(edad>=13 && edad<=17){
        console.log("Eres un adolecente");
    }else if(edad>=18 && edad<=25){
        console.log("Eres adulto joven");
    }else if(edad>=26 && edad<=40){
        console.log("Eres un adulto");
    }else if(edad>=41 && edad<=55){
        console.log("Eres un chavo ruco");
    }else if(edad>=56 && edad<=80){
        console.log("Adulto mayor");
    }else{
        console.log("Matusalem");
    }
}else{
    console.log("El caracter ingresado no es un numero, intentelo de nuevo");
}