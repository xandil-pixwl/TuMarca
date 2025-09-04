// Despliegue del apartado de preguntas
const faqs = document.querySelectorAll(".faq-item"); //selecciona todos los elementos con la clase faq-item
faqs.forEach(item => { //aplicación de la acción en base al elemento encontrDO
  item.querySelector(".faq-pregunta").addEventListener("click", () => { //Agrega una acción por click al botón de pregunta
    item.classList.toggle("active"); //Alterna la clase "active" en el elemento contenedor por lo que al volver a clickear se esconde el apartado
  });
});