//Este solo funciona para el elemento del media en el telefono u otras funciones que no sean pc completo
//Esta parte funciona para identificar el elemento sidebar
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".sidebar-overlay"); //En este selecciona el elemento sidebar-overlay que es un fondo semi gris
let expanded = false; //utiliza una función de falso y verdadero, indentifica si el elemento esta extendido

sidebar.addEventListener("click", () => { //al hacer click en el elemento del sidebar este se extiende e igualmente si se da click se esconde
sidebar.classList.toggle("expandido"); //se asegura de mantener los elementos de la misma forma que el original
expanded = !expanded; //se asegura de que la funsión se cumpla
if (expanded) {// Mostrar/ocultar overlay en móvil 
    overlay.style.display = "block"; //si está expandido, se muestar el overlay
}else{
    overlay.style.display = "none";//si no se esconde
}
});
//Cerrar al hacer clic en el overlay, si no esta la clase se remueve 
overlay.addEventListener("click", () => {
  sidebar.classList.remove("expandido");
  expanded = false;//con esto es que se remuve de forma 'forzada'
  overlay.style.display = "none";//y se quita el overlay
});
