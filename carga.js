window.addEventListener("load", function () {//Espera a que los elementos de la página (hTML, CSS, imágenes) terminen de cargarse
  const pantallaCarga = document.getElementById("pantalla-carga");//Guarda e identifica el elemento/archivo de pantalla-carga (la imagen)

  setTimeout(() => {//Ejecuta el código dentro de esta función después de que pase el tiempo indicado abajo 500 ms
    pantallaCarga.classList.add("oculto");//Agrega la clase oculto a la pantalla de carga, para esconderla mediante CSS
    document.body.classList.remove("oculto");//Quita la clase oculto del html mostrando el contenido principal de la página
  }, 500); //Retrasa medio segundo 0.5s la desaparición de la pantalla de carga para que el cambio sea más suave
});