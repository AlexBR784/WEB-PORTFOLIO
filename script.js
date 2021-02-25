// JavaScript Document

var btn_flotante = document.querySelector('.boton-flotante');
const panel_flotante_contenedor = document.querySelector('.panel-flotante-contenedor');


btn_flotante.addEventListener('click', () =>{
	panel_flotante_contenedor.classList.toggle('visible')
	let abierto = panel_flotante_contenedor.classList.contains('visible')
	if(abierto){
		btn_flotante.innerHTML = "Cerrar Panel"
	}
	else{
		btn_flotante.innerHTML = "Abrir Panel"
	}
	
	
	
});