const numeros = [1, 5, 8, 12, 15, 18, 20, 3, 7];
let pares = 0;
let impares = 0;

for (let num of numeros) {
  if (num % 2 === 0) {
    pares++;
  } else {
    impares++; 
  }
}

console.log("Pares:", pares); 
console.log("Impares:", impares); 

//funcion flecha
const contarParesImpares = (numeros) => {
  let pares = 0;
  let impares = 0;
  for (let num of numeros) {
    if (num % 2 === 0) {
      pares++;
    } else {
      impares++; 
    }
  }
  return { pares, impares };
}
const resultado = contarParesImpares(numeros);
console.log("Pares:", resultado.pares); 
console.log("Impares:", resultado.impares);

