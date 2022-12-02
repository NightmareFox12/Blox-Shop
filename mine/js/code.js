"use strict";

const btn = document.querySelector(".navbar-toggler");
const up = document.querySelector(".ico-btn");
const down = document.querySelector(".icon-btn");
const loader = document.querySelector(".loader-container");
const carta = document.querySelector(".carta1");
const carta2 = document.querySelector(".carta2");
const imagen = document.querySelector(".imagen1");
const imagen2 = document.querySelector(".imagen2");
const imagen3 = document.querySelector(".imagen3");
const imagen4 = document.querySelector(".imagen4");

window.addEventListener("load",()=>{
  loader.style.opacity = 0;
  loader.style.visibility = "hidden";
});

btn.addEventListener("click",()=>{
   up.classList.toggle("ico-btn-active");
   down.classList.toggle("icon-btn-active");
});
carta.addEventListener("mouseover",()=>{
	imagen.classList.add("imagen1-active");
	imagen2.classList.add("imagen2-active");
});
carta.addEventListener("mouseout",()=>{
	imagen.classList.remove("imagen1-active");
	imagen2.classList.remove("imagen2-active");
});

carta2.addEventListener("mouseover",()=>{
	imagen3.classList.add("imagen3-active");
	imagen4.classList.add("imagen4-active");
});
carta2.addEventListener("mouseout",()=>{
	imagen3.classList.remove("imagen3-active");
	imagen4.classList.remove("imagen4-active");
});