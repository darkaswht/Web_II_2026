import { productService } from "../service/product-service.js";

const formulario = document.querySelector("[data-form]");
const endpoint = formulario.dataset.endpoint;
const campo2 = formulario.dataset.campo2;
const successUrl = formulario.dataset.successUrl;
const errorUrl = formulario.dataset.errorUrl;

const obtenerInfo = async () => {
    const id = new URL(window.location).searchParams.get("id");
    if (!id) { window.location.href = errorUrl; return; }

    const inputNombre = document.querySelector("[data-nombre]");
    const inputCampo2 = document.querySelector("[data-campo2]");

    try {
        const item = await productService.obtener(endpoint, id);
        if (item.nombre && item[campo2]) {
            inputNombre.value = item.nombre;
            inputCampo2.value = item[campo2];
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
    const campo2Val = document.querySelector("[data-campo2]").value;

    productService.actualizar(endpoint, nombre, campo2, campo2Val, id)
        .then(() => window.location.href = successUrl)
        .catch(() => window.location.href = errorUrl);
});
