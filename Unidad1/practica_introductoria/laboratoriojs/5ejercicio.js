
function decimalABinario(decimal) {
    let binario = "";
    while (decimal > 0) {
        binario = (decimal % 2) + binario;
        decimal = Math.floor(decimal / 2);
    }
    return binario;
}
const numeroDecimal = 10;
const numeroBinario = decimalABinario(numeroDecimal);
console.log("Número decimal: " + numeroDecimal);
console.log("Número binario: " + numeroBinario);    
//funcion flecha
const decimalABinarioFlecha = (decimal) => {
    let binario = "";
    while (decimal > 0) {
        binario = (decimal % 2) + binario;
        decimal = Math.floor(decimal / 2);
    }   
    return binario;
};
const numeroDecimalFlecha = 10;
const numeroBinarioFlecha = decimalABinarioFlecha(numeroDecimalFlecha);
console.log("Número decimal: " + numeroDecimalFlecha);
console.log("Número binario: " + numeroBinarioFlecha);
