
function esPrimo(numero) {
  if (numero < 2) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) return false;
  }
  return true;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primos = numeros.filter(esPrimo);
console.log("Números primos:", primos);
 //funcion flecha
const esPrimoFlecha = (numero) => {
  if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}
const primosFlecha = numeros.filter(esPrimoFlecha);
console.log("Números primos:", primosFlecha);