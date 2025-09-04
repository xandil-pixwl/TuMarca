//Identifica cuando los elementos entran en la vista
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');//Hace visible los elementos en la página general de nosostros.html
    }
  });
}, {
  threshold: 0.1 //Activa cuando el 10% del elemento está visible
});

//aplica a todos los elementos con clase 'animado'
document.querySelectorAll('.animado').forEach(seccion => {//en la página  original todas las secciones tienen el elemento de clase 'animado'
  observador.observe(seccion);
});
