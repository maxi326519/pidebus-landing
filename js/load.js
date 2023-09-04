window.addEventListener("load", function () {
  var pantallaCarga = document.getElementById("loading");

  pantallaCarga.classList.add("loadFinished");

  setTimeout(() => {
    pantallaCarga.style.display = "none"; // Oculta la pantalla de carga
  }, 1000);
});
