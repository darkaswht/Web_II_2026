const checkComplete = () => {
        const i = document.createElement('i');
        i.classList.add('far', 'fa-check-square', 'icon');
        i.addEventListener('click', color); // ✅ evento agregado
        return i; // ✅ ahora retorna el elemento
    }

    const color = (evento) => {
        const element = evento.target;
        element.classList.add('fas');
        element.classList.remove('far');
        element.classList.add('completeIcon');
    }
    export default checkComplete;