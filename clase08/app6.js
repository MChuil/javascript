const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto']
const months2 = ['Septiembre', 'Octubre']
const months3 = ['Noviembre', 'Diciembre']

const newMonths = months.concat(months2, months3)

console.log(newMonths)


// Spread Operator

const newMonths2 = [...months, ...months2, ...months3, 'al infinito  y mas allá'];
console.log('Spread operator', newMonths2)