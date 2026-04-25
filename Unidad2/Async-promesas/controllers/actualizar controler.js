import { clientService } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");
const endpoint = formulario.dataset.endpoint;
const campo2 = formulario.dataset.campo2;
const successUrl = formulario.dataset.successUrl;
const errorUrl = formulario.dataset.errorUrl;

const obtenerInfo = async () => {
    const id = new URL(window.location).searchParams.get("id");
    if (!id) { window.location.href = errorUrl; return; }

    try {
        const item = await clientService.obtener(endpoint, id);
        if (item.nombre) {
            document.querySelector("[data-nombre]").value = item.nombre;
            document.querySelector("[data-email]").value = item[campo2] ?? "";
        } else {
            throw new Error();
        }
    } catch {
        window.location.href = errorUrl;
    }
};

obtenerInfo();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const id = new URL(window.location).searchParams.get("id");
    const nombre = document.querySelector("[data-nombre]").value;
    const campo2Val = document.querySelector("[data-email]").value;

    clientService.actualizar(endpoint, nombre, campo2, campo2Val, id)
        .then(() => window.location.href = successUrl)
        .catch(() => window.location.href = errorUrl);
});
