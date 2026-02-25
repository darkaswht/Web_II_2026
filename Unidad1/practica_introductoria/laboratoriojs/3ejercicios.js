

function invertirNumero(numero) {
  let numeroInvertido = 0;
  while (numero > 0) {
    numeroInvertido = numeroInvertido * 10 + (numero % 10);
    numero = Math.floor(numero / 10);
  }
  return numeroInvertido;
}
const numero = 12345;
const numeroInvertido = invertirNumero(numero);
console.log("Número original: " + numero);
console.log("Número invertido: " + numeroInvertido);

//funcion flecha
const invertirNumeroFlecha = (numero) => {
  let numeroInvertido = 0;
  while (numero > 0) {
    numeroInvertido = numeroInvertido * 10 + (numero % 10);
    numero = Math.floor(numero / 10);
  }
  return numeroInvertido;
};
const numeroFlecha = 12345;
const numeroInvertidoFlecha = invertirNumeroFlecha(numeroFlecha);
console.log("Número original: " + numeroFlecha);
console.log("Número invertido: " + numeroInvertidoFlecha);