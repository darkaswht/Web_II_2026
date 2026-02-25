
function sumarPropiedad(array, propiedad) {
    return array.reduce((suma, obj) => suma + (obj[propiedad] || 0), 0);
}
const objetos = [
    { valor: 10 },
    { valor: 20 },
    { valor: 30 },
    { valor: 40 },
];
const suma = sumarPropiedad(objetos, "valor");
console.log("Suma de la propiedad 'valor':", suma);

//funcion flecha
const sumarPropiedadFlecha = (array, propiedad) => {
    return array.reduce((suma, obj) => suma + (obj[propiedad] || 0), 0);
};
const sumaFlecha = sumarPropiedadFlecha(objetos, "valor");
console.log("Suma de la propiedad 'valor':", sumaFlecha);