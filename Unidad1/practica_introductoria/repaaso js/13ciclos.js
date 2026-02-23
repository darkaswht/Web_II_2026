const PaisesDisponibles =["Bolivia", "Ecuador", "Brasil", "Venezuela", "Italia", "Francia"];
const preciopaises = new Array(100,200,300,400,500,600);
const presupuesto = 250;

let i = 0;

while(preciopaises[i]>presupuesto && i < PaisesDisponibles.length){
    i++;
}
if(i==PaisesDisponibles.length){
    console.log(`no existe pasaje`)

}else{
    console.log(`puedes comprar pasaje`)
}
