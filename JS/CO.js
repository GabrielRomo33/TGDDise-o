console.log("OC");
//variables
var MenuVi = document.querySelector(".menuCompleto");
//Eventos
document.querySelector('#checkbox').addEventListener('click',animateBar);
//Funciones
function animateBar(){
    MenuVi.classList.toggle("menuVisible");
}