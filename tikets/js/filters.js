const datosViaje = [
  {
    "id": 1,
    "empresa": "Tauro Bus Perú",
    "fechaSalida": "Wed Sep 13",
    "horaSalida": "07:30",
    "codigoSalida": "GMT-0300",
    "fechaLlegada": "Wed Sep 13",
    "horaLlegada": "18:00",
    "codigoLlegada": "GMT-0300",
    "terminalSalida": "Terminal 1s",
    "terminalLlegada": "Terminal 3l",
    "reembolsable": true,
    "tipoAsiento": "Asiento Requinable",
    "precio": 45
  },
  {
      "id": 2,
      "empresa": "Tauro Bus Perú",
      "fechaSalida": "Wed Sep 14",
      "horaSalida": "17:30",
      "codigoSalida": "GMT-0300",
      "fechaLlegada": "Wed Sep 14",
      "horaLlegada": "19:00",
      "codigoLlegada": "GMT-0300",
      "terminalSalida": "Terminal 2s",
      "terminalLlegada": "Terminal 3l",
      "reembolsable": false,
      "tipoAsiento": "Cama",
      "precio": 65
  },
  {
      "id": 3,
      "empresa": "Plus Bus Perú",
      "fechaSalida": "Wed Sep 16",
      "horaSalida": "05:30",
      "codigoSalida": "GMT-0300",
      "fechaLlegada": "Wed Sep 17",
      "horaLlegada": "20:00",
      "codigoLlegada": "GMT-0300",
      "terminalSalida": "Terminal 2s",
      "terminalLlegada": "Terminal 3l",
      "reembolsable": false,
      "tipoAsiento": "Cama",
      "precio": 76
  },
  {
      "id": 4,
      "empresa": "Plus Bus Perú",
      "fechaSalida": "Wed Sep 16",
      "horaSalida": "20:30",
      "codigoSalida": "GMT-0300",
      "fechaLlegada": "Wed Sep 16",
      "horaLlegada": "22:00",
      "codigoLlegada": "GMT-0300",
      "terminalSalida": "Terminal 2s",
      "terminalLlegada": "Terminal 4l",
      "reembolsable": true,
      "tipoAsiento": "Cama",
      "precio": 35
  }
];
// Obtén la sección de filtros en la que deseas agregar los filtros
const filtersContainer = document.querySelector('.filters');

// Función para generar los filtros
function generateFilters(data) {
  // Crea el título "Filtrar"
  const filterTitle = document.createElement('span');
  filterTitle.className = 'title_filter';
  filterTitle.textContent = 'Filtrar';
  filtersContainer.appendChild(filterTitle);

  // Crea el filtro "Reembolsable"

  const reembolsableUl = document.createElement('p');
  reembolsableUl.className = 'checkbox__list__item';

  const reembolsableLi = document.createElement('li');
  reembolsableLi.className = 'checkbox__list__item';

  const reembolsableCheckbox = document.createElement('input');
  reembolsableCheckbox.type = 'checkbox';
  reembolsableCheckbox.id = 'reembolsable';
  reembolsableCheckbox.name = 'reembolsable';
  reembolsableCheckbox.value = 'reembolsable';

  const reembolsableLabel = document.createElement('label');
  reembolsableLabel.for = 'reembolsable';
  reembolsableLabel.textContent = 'Reembolsable';

  reembolsableLi.appendChild(reembolsableCheckbox);
  reembolsableLi.appendChild(reembolsableLabel);
  reembolsableUl.appendChild(reembolsableLi);

  filtersContainer.appendChild(reembolsableUl);

  // Agrega una línea divisoria solo para "Reembolsable"
  const reembolsableLine = document.createElement('div');
  reembolsableLine.className = 'line';
  filtersContainer.appendChild(reembolsableLine);

  // Itera a través de las claves de los objetos de datosViaje
  for (const key in data[0]) {
    if (data[0].hasOwnProperty(key) && key !== "id" && key !== "precio"  && key !== "fechaSalida" && key !== "fechaLlegada" && key !== "reembolsable") {
      // Crea el título del filtro
      const filterLabel = document.createElement('p');
      filterLabel.className = 'title_filter';
      filterLabel.textContent = key.charAt(0).toUpperCase() + key.slice(1); // Capitaliza la primera letra
      filtersContainer.appendChild(filterLabel);

      // Crea una lista de opciones para el filtro
      const ul = document.createElement('ul');
      ul.className = 'checkbox__list';

      // Obtén los valores únicos del filtro
      const uniqueValues = [...new Set(data.map(item => item[key]))];

      // Crea una opción para cada valor único
      uniqueValues.forEach(value => {
        const li = document.createElement('li');
        li.className = 'checkbox__list__item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `${key}-${value.replace(' ', '-').toLowerCase()}`;
        checkbox.name = key;
        checkbox.value = value;

        const label = document.createElement('label');
        label.setAttribute('for', `${key}-${value.replace(' ', '-').toLowerCase()}`);
        label.textContent = value;

        li.appendChild(checkbox);
        li.appendChild(label);
        ul.appendChild(li);
      });

      filtersContainer.appendChild(ul);

    }
  }
  // Agregar filtro "Hora de Salida"
const horaSalidaLabel = document.createElement('p');
horaSalidaLabel.className = 'title_filter';
horaSalidaLabel.textContent = 'Hora de Salida';
filtersContainer.appendChild(horaSalidaLabel);

const horaSalidaUl = document.createElement('ul');
horaSalidaUl.className = 'checkbox__list';

// Opciones para "Hora de Salida"
const horasSalida = [
  'Antes de las 6 AM',
  '6 AM a 12 PM',
  '12 PM a 6 PM',
  'Después de las 6 PM',
];

horasSalida.forEach((hora, index) => {
  const horaSalidaLi = document.createElement('li');
  horaSalidaLi.className = 'checkbox__list__item';

  const horaSalidaCheckbox = document.createElement('input');
  horaSalidaCheckbox.type = 'checkbox';
  horaSalidaCheckbox.id = `hora-salida-${index}`;
  horaSalidaCheckbox.name = 'hora-salida';
  horaSalidaCheckbox.value = hora.toLowerCase().replace(/ /g, '-');

  const horaSalidaLabel = document.createElement('label');
  horaSalidaLabel.setAttribute('for', `hora-salida-${index}`);
  horaSalidaLabel.textContent = hora;

  horaSalidaLi.appendChild(horaSalidaCheckbox);
  horaSalidaLi.appendChild(horaSalidaLabel);
  horaSalidaUl.appendChild(horaSalidaLi);
});

  filtersContainer.appendChild(horaSalidaUl);

  // Agregar filtro "Hora de Llegada"
  const horaLlegadaLabel = document.createElement('p');
  horaLlegadaLabel.className = 'title_filter';
  horaLlegadaLabel.textContent = 'Hora de Llegada';
  filtersContainer.appendChild(horaLlegadaLabel);

  const horaLlegadaUl = document.createElement('ul');
  horaLlegadaUl.className = 'checkbox__list';

  // Opciones para "Hora de Llegada"
  const horasLlegada = [
    'Antes de las 6 AM',
    '6 AM a 12 PM',
    '12 PM a 6 PM',
    'Después de las 6 PM',
  ];

  horasLlegada.forEach((hora, index) => {
    const horaLlegadaLi = document.createElement('li');
    horaLlegadaLi.className = 'checkbox__list__item';

    const horaLlegadaCheckbox = document.createElement('input');
    horaLlegadaCheckbox.type = 'checkbox';
    horaLlegadaCheckbox.id = `hora-llegada-${index}`;
    horaLlegadaCheckbox.name = 'hora-llegada';
    horaLlegadaCheckbox.value = hora.toLowerCase().replace(/ /g, '-');

    const horaLlegadaLabel = document.createElement('label');
    horaLlegadaLabel.setAttribute('for', `hora-llegada-${index}`);
    horaLlegadaLabel.textContent = hora;

    horaLlegadaLi.appendChild(horaLlegadaCheckbox);
    horaLlegadaLi.appendChild(horaLlegadaLabel);
    horaLlegadaUl.appendChild(horaLlegadaLi);
  });

  filtersContainer.appendChild(horaLlegadaUl);
}

// Llama a la función para generar los filtros con los datos de viaje
generateFilters(datosViaje);

document.addEventListener('DOMContentLoaded', function () {
  // Obtén todos los elementos checkbox dentro del contenedor de filtros
  const checkboxes = filtersContainer.querySelectorAll('input[type="checkbox"]');

  // Función para filtrar las tarjetas de viaje
  function filtrarTarjetas() {
    const filtrosSeleccionados = {};
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        const nombreFiltro = checkbox.name;
        const valorFiltro = checkbox.value;
        if (!filtrosSeleccionados[nombreFiltro]) {
          filtrosSeleccionados[nombreFiltro] = [];
        }
        filtrosSeleccionados[nombreFiltro].push(valorFiltro);
      }
    });

    // Itera a través de las tarjetas de viaje y muestra u oculta según los filtros seleccionados
    const tarjetasViaje = document.querySelectorAll('.card__pidebus');
    tarjetasViaje.forEach(tarjeta => {
      const datosTarjeta = {
        empresa: tarjeta.querySelector('.div__card:nth-child(1) .e__tick').textContent.trim(),
        // fechaSalida: tarjeta.querySelector('.date:nth-child(2)').textContent.trim(),
        horaSalida: tarjeta.querySelector('.div__card:nth-child(2) .hour').textContent.trim(),
        // fechaLlegada: tarjeta.querySelector('.date:nth-child(6)').textContent.trim(),
        horaLlegada: tarjeta.querySelector('.div__card:nth-child(4) .hour').textContent.trim(),
        terminalSalida: tarjeta.querySelector('.div__card:nth-child(2) .terminal').textContent.trim(),
        terminalLlegada: tarjeta.querySelector('.div__card:nth-child(4) .terminal').textContent.trim(),
        reembolsable: tarjeta.querySelector('.div__card:nth-child(6) .reembol').textContent.trim(),
        tipoAsiento: tarjeta.querySelector('.div__card:nth-child(3) .cama').textContent.trim(),
      };

      let mostrarTarjeta = true;
    // Cierra todas las tarjetas colapsadas
    const collapseElements = document.querySelectorAll('.tarjetas_collapsed');
    collapseElements.forEach(collapseElement => {
      collapseElement.style.display = 'none';
    });
    // Verifica si la tarjeta cumple con los filtros seleccionados
    for (const filtro in filtrosSeleccionados) {
      if (filtrosSeleccionados.hasOwnProperty(filtro)) {
        const valoresFiltro = filtrosSeleccionados[filtro];
        if (filtro === 'reembolsable') {
          // Maneja el filtro especial de "reembolsable"
          if (!valoresFiltro.includes(datosTarjeta.reembolsable.toLowerCase())) {
            mostrarTarjeta = false;
            break;
          }
        } else if (filtro === 'hora-salida') {
          // Maneja el filtro de "Hora de Salida"
          const horaSalida = datosTarjeta.horaSalida;
          if (!valoresFiltro.includes(getPeriodoHora(horaSalida))) {
            mostrarTarjeta = false;
            break;
          }
        } else if (filtro === 'hora-llegada') {
          // Maneja el filtro de "Hora de Llegada"
          const horaLlegada = datosTarjeta.horaLlegada;
          if (!valoresFiltro.includes(getPeriodoHora(horaLlegada))) {
            mostrarTarjeta = false;
            break;
          }
        } else if (!valoresFiltro.includes(datosTarjeta[filtro])) {
          mostrarTarjeta = false;
          break;
        }
      }
    }

      // Muestra u oculta la tarjeta según el resultado de la verificación
      if (mostrarTarjeta) {
        tarjeta.style.display = 'flex';
      } else {
        tarjeta.style.display = 'none';
      }
    });
  }

  // Escuchar eventos de cambio en los filtros y llamar a la función de filtrado
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filtrarTarjetas);
  });

  // Función para obtener el período de hora según la hora
  function getPeriodoHora(hora) {
    const horaNum = parseInt(hora.split(':')[0]);
    if (horaNum < 6) {
      return 'antes-de-las-6-am';
    } else if (horaNum < 12) {
      return '6-am-a-12-pm';
    } else if (horaNum < 18) {
      return '12-pm-a-6-pm';
    } else {
      return 'después-de-las-6-pm';
    }
  }

});
