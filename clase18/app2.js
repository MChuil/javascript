const now = new Date();

moment.locale('es')

console.log(moment().format('MMMM dddd Do YY'))
console.log(moment().format('LTS'))

console.log(moment().calendar())
console.log(moment().add(1, 'year').calendar())
console.log(moment().subtract(10, 'days').calendar())