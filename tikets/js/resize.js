// CAROUSEL SLIDE

var colores = ["cl-yellow", "cl-blue", "cl-red"];
var colorIndex = 0;

function obtenerNombreDia(dia) {
  var nombresDias = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];
  return nombresDias[dia];
}

function generarDiasDelMes(mes, año) {
  var contenidoHTML = "";
  var fecha = new Date(año, mes - 1, 1); // mes - 1 porque los meses en JavaScript van de 0 a 11
  var diaInicio = fecha.getDay(); // Obtener el día de la semana en el que comienza el mes
  var ultimoDiaMes = new Date(año, mes, 0).getDate();
  var primerDia = true;

  for (var dia = 1; dia <= ultimoDiaMes; dia++) {
    var diaSemana = obtenerNombreDia((diaInicio + dia - 1) % 7);
    var fechaFormateada =
      diaSemana +
      ", " +
      dia.toString().padStart(2, "0") +
      "/" +
      mes.toString().padStart(2, "0");

    var clClass = primerDia ? "cl" : "cl  cl-yellow";
    primerDia = false; // Desactivar para el resto de los días

    contenidoHTML +=
      '<div class="slide" data-fecha="' +
      año +
      "-" +
      mes.toString().padStart(2, "0") +
      "-" +
      dia.toString().padStart(2, "0") +
      '"><div class="' +
      clClass + // Aplicar la clase de fondo aquí
      '">' +
      fechaFormateada +
      "</div></div>";

    colorIndex = (colorIndex + 1) % colores.length;
  }

  return contenidoHTML;
}

// Obtener el año y mes actual
const fechaActual = new Date();
const añoActual = fechaActual.getFullYear();
const mesActual = fechaActual.getMonth() + 1; // Sumar 1 porque los meses van de 0 a 11

document.querySelector(".slider").innerHTML = generarDiasDelMes(
  mesActual,
  añoActual
);

var st = document.querySelector(".pagination");
var slickEl = document.querySelector(".center");

slickEl.addEventListener(
  "init reInit afterChange",
  function (event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    st.textContent = i + " of " + slick.slideCount;
  }
);

$(slickEl).slick({
  centerMode: true,
  centerPadding: "100px",
  slidesToShow: 5,
  focusOnSelect: true,
  dots: false,
  infinite: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

// Función para obtener el índice del slide que corresponde a una fecha dada
function obtenerIndiceFechaEnSlider(fecha) {
  const slides = document.querySelectorAll(".slide");
  const fechaEnFormatoCorrecto = new Date(
    fecha.getFullYear(),
    fecha.getMonth(),
    fecha.getDate()
  );
  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    const fechaSlide = new Date(slide.dataset.fecha); // Obtener la fecha del atributo data-fecha
    if (
      fechaEnFormatoCorrecto.getDate() === fechaSlide.getDate() &&
      fechaEnFormatoCorrecto.getMonth() === fechaSlide.getMonth() &&
      fechaEnFormatoCorrecto.getFullYear() === fechaSlide.getFullYear()
    ) {
      return i;
    }
  }
  return 0; // Si no se encuentra la fecha, regresar al primer slide
}

// Función para actualizar el slider según la fecha seleccionada
function actualizarSliderSegunFecha() {
  const fechaSeleccionada = new Date(document.querySelector("#on-way").value);
  const indiceSlide = obtenerIndiceFechaEnSlider(fechaSeleccionada);
  $(slickEl).slick("slickGoTo", indiceSlide);
}

// Agregar evento de escucha al campo de salida
const campoSalida = document.querySelector("#on-way");
campoSalida.addEventListener("change", actualizarSliderSegunFecha);
