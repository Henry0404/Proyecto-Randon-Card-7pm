/* /* eslint-disable */
/* import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico"; */

window.onload = function() {
  //write your code here
  var numeroAleatorio = Math.floor(Math.random() * 4);
  let simbolos = ["♦", "♥", "♠", "♣"]
  var simbolo = simbolos[numeroAleatorio]
  var iconos = document.getElementsByClassName('icono')

  for (let index = 0; index < iconos.length; index++) {
    const icono = iconos[index];
    icono.innerHTML = simbolo;
  }

  var numeroDelMedio = Math.floor(Math.random() * 12) +1;

  document.getElementById("numero").innerHTML = numeroDelMedio;
};



