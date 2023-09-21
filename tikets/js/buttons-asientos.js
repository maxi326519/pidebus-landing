document.addEventListener('DOMContentLoaded', function () {
    // Agrega un controlador de eventos a todos los botones "Ver Asientos"
    const verAsientosButtons = document.querySelectorAll('.btn_ver');
    verAsientosButtons.forEach(button => {
    button.addEventListener('click', function () {
        const collapseId = this.getAttribute('data-target');
        const collapseElement = document.querySelector(collapseId);

        if (collapseElement) {
        // Alterna la visibilidad del elemento colapsado
        if (collapseElement.style.display === 'none' || collapseElement.style.display === '') {
            collapseElement.style.display = 'flex';
        } else {
            collapseElement.style.display = 'none';
        }
        }
    });
    });
  });
  