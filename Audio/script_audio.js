// JavaScript Document
var a = document.getElementById("audio");
var dur = document.getElementById("dura");
var t_res = document.getElementById("tiempo_res");
var rep = document.getElementById("rep");
var e = document.getElementById("estado");

a.onloadeddata = () => {
  dur.innerHTML = "Este audio tiene una duración total de: " + a.duration + " seg.";
  rep.innerHTML = "Estas reproduciendo: " + a.src;
}


a.ontimeupdate = () => {
  t_res.innerHTML = "Tiempo restante: " + a.duration - a.currentTime + " seg.";
  if (a.paused) {
    e.innerHTML = "Estado de la reproducción: pausado";
  } else {
    e.innerHTML = "Estado de la reproducción: reproduciendo";
  }
}
