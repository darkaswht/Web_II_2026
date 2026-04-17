const listar_clientes=()=>fetch("http://localhost:3000/perfil").then((respuesta)=>respuesta.json());

const crearCliente=(nombre, email) =>{
    return fetch("http://localhost:3000/perfil",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({nombre, email, id: uuid.v4()})
    });
};

const ActualizarCliente=(nombre, email, id)=>{ //SOLO MODIFICO EL NOMBRE Y EL EMAIL
    return fetch(`http://localhost:3000/perfil/${id}`, 
        {
        method: "PUT",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({nombre,email})
        })
        .then(respuesta=>console.log(respuesta)).catch((err)=>console.log(err));
}

const eliminarCliente=(id)=>{
    console.log("eliminar",id);
    return fetch(`http://localhost:3000/perfil/${id}`,
        {
            method:"DELETE"
        });
};
//referencia a identificador
const cliente=(id)=>{
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta)=>respuesta.json());
}

export const clientService={
    listar_clientes,
    crearCliente,
    ActualizarCliente,
    eliminarCliente,
    cliente
};