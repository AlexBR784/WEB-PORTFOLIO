// JavaScript Document
var v = document.getElementById("video");
var dur = document.getElementById("dura");
var progreso = document.getElementById("progreso");
var t_ac = document.getElementById("tiempo_ac");
var vol = document.getElementById("vol-control");

vol.addEventListener('mousemove', () => {
  v.volume = vol.value / 100;
});

function clickVideo(){
	if(v.paused){
		playVideo();
	}else if(!v.paused){
		pauseVideo();
	}
}

v.onloadeddata = () => {
  dur.innerHTML = "Duración: " + v.duration + " seg.";
}


v.ontimeupdate = () => {
  t_ac.innerHTML = "Estamos en el segundo: " + Math.floor(v.currentTime) + " seg.";
  progreso.value = 100 * v.currentTime / v.duration;
}

function playVideo() {
  document.getElementById("video").play();
  var aux = document.getElementById("cont_vid").style.boxShadow = "-5px 0px 5px red";
}

function stopVideo() {
  document.getElementById("video").currentTime = 0;
  document.getElementById("video").pause();
  var aux = document.getElementById("cont_vid").style.boxShadow = "-5px 0px 5px black";
}

function pauseVideo() {
  document.getElementById("video").pause();
  var aux = document.getElementById("cont_vid").style.boxShadow = "-5px 0px 5px black";
}

function fwVideo(skip) {
  document.getElementById("video").currentTime += skip;
}

function openFullscreen() {
  let elem = document.getElementById("video");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  }
}
