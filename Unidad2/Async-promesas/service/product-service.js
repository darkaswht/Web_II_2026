const BASE = "http://localhost:3000";

const listar = (endpoint) =>
    fetch(`${BASE}/${endpoint}`).then((r) => r.json());

const obtener = (endpoint, id) =>
    fetch(`${BASE}/${endpoint}/${id}`).then((r) => r.json());

const crear = (endpoint, nombre, campo2Key, campo2Val) =>
    fetch(`${BASE}/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, [campo2Key]: campo2Val }),
    });

const actualizar = (endpoint, nombre, campo2Key, campo2Val, id) =>
    fetch(`${BASE}/${endpoint}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, [campo2Key]: campo2Val }),
    }).then((r) => r.json());

const eliminar = (endpoint, id) =>
    fetch(`${BASE}/${endpoint}/${id}`, { method: "DELETE" });

export const productService = { listar, obtener, crear, actualizar, eliminar };
