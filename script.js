// JavaScript Document

var btn_flotante = document.querySelector('.boton-flotante'); //Conseguimos la clase del boton flotante
const panel_flotante_contenedor = document.querySelector('.panel-flotante-contenedor'); //Conseguimos la clase del panel contenedor
var icono_sol = document.getElementById("sol");
var icono_vol = document.getElementById("volumen");
var navbar = document.getElementById("navbar");
var audio = document.getElementById("audio");
var headerTareaAni = document.getElementById("header-tarea");
var headerTareaSim = document.getElementById("header-sim");
var videoTareaAni = document.getElementById("video-tarea");
var videoTareaSim = document.getElementById("video-sim");
var ej = 1;

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

icono_vol.addEventListener('click', () => {
  icono_vol.classList.toggle('fa-volume-up');
  audio.muted = !audio.muted;
  icono_vol.classList.toggle('fa-volume-mute');


});

function nextEj(t) {
  if (ej == 4) {
    ej = 1;
  } else
    ej = parseInt(ej) + 1;
  changeContent(t);
}

function antEj(t) {
  if (ej == 0) {
    ej = 4;
  } else
    ej = parseInt(ej) - 1;
  changeContent(t);
}

function changeContent(numTarea) {
if(numTarea == 0){
  if (ej == 1) {
    headerTareaAni.innerHTML = "Tarea 1 de animación";
   videoTareaAni.src = "https://www.youtube.com/embed/5wXUfif3eQU";

  } else if (ej == 2) {
    headerTareaAni.innerHTML = "Tarea 2 de animación";
    videoTareaAni.src = "https://www.youtube.com/embed/5wXUfif3eQU";

  } else if (ej == 3) {
    headerTareaAni.innerHTML = "Tarea 3 de animación";
    videoTareaAni.src = "https://www.youtube.com/embed/5wXUfif3eQU";

  } else if (ej == 4) {
    headerTareaAni.innerHTML = "Tarea 4 de animación";
    videoTareaAni.src = "https://www.youtube.com/embed/5wXUfif3eQU";

  }
}else if(numTarea == 1){
	if (ej == 1) {
	headerTareaSim.innerHTML = "Tarea 1 de simulacion";
    videoTareaSim.src = "./imagenes/pea_banner.png";
  } else if (ej == 2) {
	headerTareaSim.innerHTML = "Tarea 2 de simulación";
    videoTareaSim.src = "./imagenes/pea_banner.png";
  } else if (ej == 3) {
	headerTareaSim.innerHTML = "Tarea 3 de simulación";
    videoTareaSim.src = "./imagenes/pea_banner.png";
  } else if (ej == 4) {
	headerTareaSim.innerHTML = "Tarea 4 de simulación";
    videoTareaSim.src = "./imagenes/pea_banner.png";
  }
}

}

function navEj(num){
	ej = num;
	localStorage.setItem("ejercicio", ej);
	
}
