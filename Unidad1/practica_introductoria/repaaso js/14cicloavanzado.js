const datos =[
    {
        'pais':'bolivia',
        'precio':200

    },

{
        'pais':'ecuador',
        'precio':500
},

{
        'pais':'brasil',
        'precio':900
},

{
        'pais':'venezuela',
        'precio':100
},

{
        'pais':'paraguay',
        'precio':200
}
];

const prepusuesto = 300;
let i=0;

let paisselecionado='';
do{
    if(datos[i].precio<=prepusuesto){
        paisselecionado+datos[i].pais

    }
    i++;

}while(i<datos.length && paisselecionado=='')
    if (paisselecionado=='')
        console.log(`no existen pasajes disponibles`)
    else 
        console.log(`puedes comprar pasaje`)