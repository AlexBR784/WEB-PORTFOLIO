// JavaScript Document

var btn_flotante = document.querySelector('.boton-flotante'); //Conseguimos la clase del boton flotante
const panel_flotante_contenedor = document.querySelector('.panel-flotante-contenedor'); //Conseguimos la clase del panel contenedor
var icono_sol = document.getElementById("sol");
var navbar = document.getElementById("navbar");


btn_flotante.addEventListener('click', () => {
  panel_flotante_contenedor.classList.toggle('visible');
  let abierto = panel_flotante_contenedor.classList.contains('visible');
  if (abierto) {
    btn_flotante.innerHTML = "Cerrar Panel";
  } else {
    btn_flotante.innerHTML = "Abrir Panel";
  }
});

icono_sol.addEventListener('click', () => {
  navbar.classList.toggle('modo');
  icono_sol.classList.toggle('fa-sun');
  icono_sol.classList.toggle('fa-moon');


});
