
function numeroMasRepetido(numeros) {
    const conteo = {};
    let maxRepeticiones = 0;
    let numeroMasFrecuente = null;
    for (let num of numeros) {
        conteo[num] = (conteo[num] || 0) + 1;
        if (conteo[num] > maxRepeticiones) {
            maxRepeticiones = conteo[num];
            numeroMasFrecuente = num;
        }
    }
    return numeroMasFrecuente;
}
const numeros = [1, 2, 3, 4, 5, 2, 3, 4, 2];
const resultado = numeroMasRepetido(numeros);
console.log("Número más repetido:", resultado);

//funcion flecha
const numeroMasRepetidoFlecha = (numeros) => {
    const conteo = {};
    let maxRepeticiones = 0;
    let numeroMasFrecuente = null;
    for (let num of numeros) {
        conteo[num] = (conteo[num] || 0) + 1;
        if (conteo[num] > maxRepeticiones) {
            maxRepeticiones = conteo[num];
            numeroMasFrecuente = num;
        }
    }
    return numeroMasFrecuente;
}
const resultadoFlecha = numeroMasRepetidoFlecha(numeros);
console.log("Número más repetido:", resultadoFlecha);


           