// JavaScript Document
var a = document.getElementById("audio");
var dur = document.getElementById("dura");
var t_res = document.getElementById("tiempo_res");
var rep = document.getElementById("rep");
var e = document.getElementById("estado");
var source = document.getElementById("audioSrc");
var audiosel = document.getElementById("audios");
var muted = false;

a.onloadeddata = () => {
  dur.innerHTML = "Este audio tiene una duración total de: " + Math.floor(a.duration) + " seg.";
  rep.innerHTML = "Estas reproduciendo: " + source.getAttribute("src").substring(6); //Mostramos solo nombre y formato del audio
}

audiosel.onchange = ()=>{
	a.pause();
	source.src = audiosel.options[audiosel.selectedIndex].value;
	a.load();
}



a.ontimeupdate = () => {
    let duration = parseInt(a.duration),
    currentTime = parseInt(a.currentTime),
    timeLeft = duration - currentTime;
    t_res.innerHTML = "Tiempo restante: " + timeLeft + " seg.";
  if (a.paused) {
    e.innerHTML = "Estado de la reproducción: pausado";
  } else {
    e.innerHTML = "Estado de la reproducción: reproduciendo";
  }
}

function playAudioOnLoad(){
	a.play();
	a.volume = 0.2;
}
