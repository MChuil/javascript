for (let i = 1; i <= 50; i++) {  //ciclo del 1 al 50
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " fizzbuzz ");
  } else if (i % 3 === 0) {
    console.log(i + "  fizz");
  } else if (i % 5 === 0) {
    console.log(i + " buzz ");
  }
}



for (let i = 1; i <= 10; i++) {
    console.log(`Tabla del ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('\n');
}