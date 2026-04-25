/*const listar_clientes=()=>fetch("http://localhost:3000/perfil").then((respuesta)=>respuesta.json());

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
*/

const BASE_PHP = "http://localhost/mamitasphp/conexion.php";
const BASE_JSON = "http://localhost:3000";

const getUrl = (endpoint) => `${BASE_PHP}?tabla=${endpoint}`;

const listar = (endpoint) =>
    fetch(getUrl(endpoint)).then((r) => r.json());

const obtener = (endpoint, id) =>
    fetch(`${getUrl(endpoint)}&id=${id}`).then((r) => r.json());

const crear = (endpoint, nombre, campo2Key, campo2Val) =>
    fetch(getUrl(endpoint), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, [campo2Key]: campo2Val }),
    }).then((r) => r.json());

const actualizar = (endpoint, nombre, campo2Key, campo2Val, id) =>
    fetch(`${getUrl(endpoint)}&id=${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, [campo2Key]: campo2Val, id }),
    }).then((r) => r.json());

const eliminar = (endpoint, id) =>
    fetch(`${getUrl(endpoint)}&id=${id}`, { method: "DELETE" });

export const clientService = { listar, obtener, crear, actualizar, eliminar };


const URL_SUPABASE = 'https://sbztbuvarazutanfibut.supabase.co/rest/v1/'
const SUPABASE_KEY = 'sb_publishable_889e_jAHOskL9ILCn5Qpmg_bnSx5wE2'
const table = 'clientes'
const API_URL = `${URL_SUPABASE}/rest/v1/${table}`

const HEADERS = {
    'apiKey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation'
};

const request = async (URL, options) => {
    const res = await fetch(URL, {headers: HEADERS, ...options});
    const text = await res.text();
    const data = text ? JSON.parse(text) : null;
    if (!res.ok) {
        const message = data?.message ?? data?.error ?? text ?? 'Error';
        throw new Error(message);
    }
    return data;
}

const listar_clientes = () => {
    return request(`${API_URL}?select=id,nombre,email`);
}

const cliente = (id) => {
    return request(`${API_URL}?id=eq.${id}&select=id,nombre,email`).then((data) => console.log(data));
}

const crearCliente = (nombre, email) => {
    return request(API_URL, {
        method: 'POST',
        body: JSON.stringify({nombre, email})
    }).then(data => data?.[0]);
}

const ActualizarCliente = (nombre, email, id) => {
    return request(`${API_URL}?id=eq.${id}`, {
        method: 'PATCH',
        body: JSON.stringify({nombre, email})
    }).then(data => data?.[0]) ?? Promise.reject(new Error('no se pudo actualizar'));
}

const eliminarCliente = (id) => {
    return request(`${API_URL}?id=eq.${id}`, {
        method: 'DELETE'
    }).then(data => data?.[0]) ?? Promise.reject(new Error('no se pudo eliminar'));
}


