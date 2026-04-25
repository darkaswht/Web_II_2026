import { clientService } from "../service/client-service.js";

const table = document.querySelector("[data-table]");
const endpoint = table.dataset.endpoint;
const campo2Label = table.dataset.campo2;
const editUrl = table.dataset.editUrl;
const errorUrl = table.dataset.errorUrl;

const crearFila = (nombre, campo2Val, id) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td class="td" data-td>${nombre}</td>
        <td>${campo2Val}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a href="${editUrl}?id=${id}" class="simple-button simple-button--edit">Editar</a>
                </li>
                <li>
                    <button class="simple-button simple-button--delete" type="button" data-id="${id}">Eliminar</button>
                </li>
            </ul>
        </td>
    `;
    fila.querySelector("button").addEventListener("click", (e) => {
        clientService.eliminar(endpoint, e.target.dataset.id)
            .then(() => window.location.reload())
            .catch(() => window.location.href = errorUrl);
    });
    return fila;
};

clientService.listar(endpoint)
    .then((data) => {
        data.forEach((item) => {
            table.appendChild(crearFila(item.nombre, item[campo2Label], item.id));
        });
    })
    .catch(() => window.location.href = errorUrl);
