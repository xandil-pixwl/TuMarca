const sidebar = document.querySelector(".sidebar");
let expanded = false;

sidebar.addEventListener("click", () => {
sidebar.classList.toggle("expandido");
expanded = !expanded;
});
