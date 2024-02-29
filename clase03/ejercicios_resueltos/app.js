let vehiculo = {
    nombre: 'jetta',
    marca: 'volswagen',
    color: 'negro',
    tipo: 'deportivo',
    precio: '15000 usd'
}

console.log(`El automovil ${vehiculo.nombre}, marca ${vehiculo.marca}, tipo ${vehiculo.tipo}, tiene un precio de ${vehiculo.precio}`);


//-------------------------------------------------------------
let Cuenta_Bancaria = {
    cliente: "angel",
    Numero_De_Cuenta: "01123489",
    Banco: "banco bogota",
    Depositos: 650000,
    Retiro: 395000,
    saldo : function(){
        let saldo = this.Depositos - this.Retiro;
        console.log(`El saldo es ${saldo}`);
    }
}

Cuenta_Bancaria.saldo();

//-------------------------------------------------------------

const factura = {
    numero: 201,
    cliente: 'Transportes Plus',
    divisa: 'usd',
    subtotal: 320.25,
    impuesto: 75.55
}

factura.total = 395.80; //propiedad
factura.abonos = {}; //objeto
factura.abonos.abono1 = 15.80;
factura.abonos.abono2 = 300;
factura.abonos.abono3 = 80;


console.log(factura);
