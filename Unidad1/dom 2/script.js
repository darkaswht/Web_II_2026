import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

(() => {
    const btn =document.querySelector('[data-form-btn]');
    console.log(btn);
    const createTask = (evento) => {
        evento.preventDefault();
        const regex = /^[a-zA-Z\s]+$/;
        const input = document.querySelector('[data-form-input]');
        const value = input.value;
        if (!regex.test(value)) {
            alert('solo pon letras.');
            return;
        }

        const list = document.querySelector('[data-list]');
        const task = document.createElement('li');
        task.classList.add('card');
        input.value = '';
        const contTask = document.createElement('div');
        const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        contTask.appendChild(checkComplete());
        contTask.appendChild(titleTask);
        task.appendChild(contTask);
        task.appendChild(deleteIcon());
        list.appendChild(task);
        
    }
    
    

    btn.addEventListener('click', createTask);    
})();