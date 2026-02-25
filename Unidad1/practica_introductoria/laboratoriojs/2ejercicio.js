let frase = "La madre es lo mejor de este mundo, sin ella no seríamos nada";

let palabras = frase.trim().split(" ");
let larga = "";

for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > larga.length) {
        larga = palabras[i];
    }
}

console.log("La palabra más larga es: " + larga);

//funcion flecha
const encontrarlalarga = (frase) => {
    let palabras = frase.trim().split(" ");
    let larga = "";
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > larga.length) {
            larga = palabras[i];
        }
    }
    return larga;
}
const fraseFlecha = "La madre es lo mejor de este mundo, sin ella no seríamos nada";
const palabralargaflecha = encontrarlalarga(fraseFlecha);
console.log("La palabra más larga es: " + palabralargaflecha);



