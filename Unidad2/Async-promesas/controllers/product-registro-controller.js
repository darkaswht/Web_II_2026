import { productService } from "../service/product-service.js";

const formulario = document.querySelector("[data-form]");
const endpoint = formulario.dataset.endpoint;
const campo2 = formulario.dataset.campo2;
const successUrl = formulario.dataset.successUrl;
const errorUrl = formulario.dataset.errorUrl;

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const campo2Val = document.querySelector("[data-campo2]").value;

    productService.crear(endpoint, nombre, campo2, campo2Val)
        .then(() => window.location.href = successUrl)
        .catch(() => window.location.href = errorUrl);
});
