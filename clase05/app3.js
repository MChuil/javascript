// Comunicación entre funciones

initApp();

function initApp(){
    console.log('Iniciando la app...');
    getDb();
}

function getDb(){
    console.log('Leyendo base de datos...');

    authUser('Miguel');
}

function authUser(user){
    console.log('Autenticando al usuario, espere...');
    console.log(`Autenticación exitosa...Bienvenido ${user}`)
}

// Funciones que retornan valores
let subtotal = 0;
const addCar = function(precio){
    return subtotal += precio;
}

function calcularIva(precio){
    return precio * 0.19;
}

subtotal = addCar(5000);
subtotal = addCar(20000);
subtotal = addCar(2000);
subtotal = addCar(8000);
subtotal = addCar(40000);
subtotal = addCar(1000);

console.log("Total a pagar " + (subtotal + calcularIva(subtotal)));

const cuentaBancaria = {
    cliente : '',
    numeroCuenta : '',
    banco : '',
    saldo: 0,
    despositar: function(deposito = 0){
        this.saldo += deposito;
        console.log(`Se ha hecho un deposito de $${deposito} pesos`);
    },
    retirar: function(cantidad = 0){
        this.saldo -= cantidad;
        console.log(`Se ha hecho un retiro de $${cantidad} pesos`);
    },
    consultarSaldo: function(){
        return this.saldo;
    }
}

cuentaBancaria.cliente = 'Miguel Martinez';
cuentaBancaria.numeroCuenta = 1234567890;
cuentaBancaria.banco = 'BanColombia';
console.log(cuentaBancaria);

cuentaBancaria.despositar(1000000);
cuentaBancaria.retirar(60000);
console.log("Saldo actual: " + cuentaBancaria.consultarSaldo() + ' pesos');