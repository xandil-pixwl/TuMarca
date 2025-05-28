window.addEventListener("load", function () {
  const pantallaCarga = document.getElementById("pantalla-carga");

  setTimeout(() => {
    pantallaCarga.classList.add("oculto");
    document.body.classList.remove("oculto");
  }, 500); //Espera 0.5 segundos después de que cargó todo para un efecto más tranquilo
});
