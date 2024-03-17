const description = document.getElementById('description')
const quantity = document.getElementById('quantity')
const price = document.getElementById('price')
const btnAdd = document.getElementById('btnAdd')
const detalle = document.getElementById('detalle')
const rowButtons = document.getElementById('rowButtons')
const messages = document.querySelector('#messages')
let counter = 0
const alerta = ['alert', 'alert-danger']


// Eventos----
document.addEventListener('DOMContentLoaded', function(){
    rowButtons.style.display = 'none'
    //Evento onchange en input de Descripción
    description.addEventListener('change', ()=>deleteMessage())

    //Evento click en botn Agregar
    btnAdd.addEventListener('click', function(){

         //si esta vacio
        if (description.value.trim() === "" || quantity.value.trim() === "" || price.value.trim() === "") {
            messages.textContent = "Por favor ingrese algo...";
            // messages.className = 'alert'
            // messages.className = 'alert-danger'
            
            // messages.classList.add(...alerta)
            messages.classList.add('alert', 'alert-danger', 'mt-3')
            // alert('Por favor, ingrese algo.');
            return; 
        }

        
        //cantidad y precio mayores de 0, evitar negativos

        if (parseFloat(quantity.value) === 0 || parseFloat(price.value) === 0) {
            alert('Ingrese un número mayor a 0 para cantidad y precio.');
            return;
        }


        // importe
        const importe = parseFloat(quantity.value) * parseFloat(price.value);

        //insertar una fila
        let newRow = detalle.insertRow(counter)

        //insertar una celda a la fila (newRow)
        let newCell = newRow.insertCell(0)
        //agregar el texto
        let newText = document.createTextNode(quantity.value)
        newCell.appendChild(newText)

        newCell = newRow.insertCell(1)
        newText = document.createTextNode(description.value)
        newCell.appendChild(newText)
        
        newCell = newRow.insertCell(2)
        newText = document.createTextNode(price.value)
        newCell.appendChild(newText)

        newCell = newRow.insertCell(3)
        newText = document.createTextNode(importe);  
        newCell.appendChild(newText);
       
        newCell = newRow.insertCell(4)
        let btn = document.createElement('button');
        btn.textContent = "X"
        btn.className = "btn btn-danger btn-sm"
        btn.setAttribute('id', counter)
        btn.onclick = () => destroyRow(btn)
        newCell.appendChild(btn);
        clean()
        counter++
        calculateTotals();
        rowButtons.style.display = 'contents'
    })
})

function calculateTotals() {
    let subtotal = 0;
    const rows = document.querySelectorAll("#detalle tr");
    
    rows.forEach((row) => {
        const cells = row.querySelectorAll("td");
        if (cells.length === 5) { // Asegúrate de que sea una fila válida
            const importe = parseFloat(cells[3].textContent);
            subtotal += importe;
        }
    });

    const iva = subtotal * 0.16;
    const total = subtotal + iva;

    document.getElementById("subtotal").textContent = subtotal;
    document.getElementById("iva").textContent = iva;
    document.getElementById("total").textContent = total;
}


function destroyRow(btn){
    //confirmar
    const confirm = window.confirm('¿Esta seguro que desea eliminar el concepto?');
    if(confirm){
        if(detalle.rows.length == 1){
            detalle.deleteRow(0)    
        }else{
            detalle.deleteRow(btn.id)
        }
        counter--
        calculateTotals();
    }
}

function clean(){
    // Limpiar 
    description.value = ""
    quantity.value = ""
    price.value = ""
}

function deleteMessage(){
    messages.textContent = ''
    messages.classList.remove('alert', 'alert-danger', 'mt-3')
}
