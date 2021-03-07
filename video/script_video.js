// JavaScript Document
var v = document.getElementById("video");
var dur = document.getElementById("dura");
var progreso = document.getElementById("progreso");
var t_ac = document.getElementById("tiempo_ac");
var vol = document.getElementById("vol-control");

vol.addEventListener('mousemove', () => {
  v.volume = vol.value / 100;
});

v.onloadeddata = () => {
  dur.innerHTML = "Duración: " + v.duration + " seg.";
}


v.ontimeupdate = () => {
  t_ac.innerHTML = "Estamos en el segundo: " + Math.floor(v.currentTime) + " seg.";
  progreso.value = 100 * v.currentTime / v.duration;
}

function playVideo() {
  document.getElementById("video").play();
}

function stopVideo() {
  document.getElementById("video").currentTime = 0;
}

function pauseVideo() {
  document.getElementById("video").pause();
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
