/* /* eslint-disable */
/* import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico"; */

window.onload = function () {
  //write your code here
  var numeroAleatorio = Math.floor(Math.random() * 4);
  let simbolos = ["♦", "♥", "♠", "♣"]
  var simbolo = simbolos[numeroAleatorio]
  var icono1 = document.querySelector('.top')
  var icono2 = document.querySelector('.bottom')

  /*  for (let index = 0; index < iconos.length; index++) */
  /*  const icono = iconos[index]; */
  icono1.innerHTML = simbolo;
  icono2.innerHTML = simbolo;
  if (simbolo == "♦" || simbolo == "♥") {
    icono1.classList.add('icono')
    icono2.classList.add('icono')
  }
  /*  } */
  function cambiarValor(valor) {
    switch (valor) {
      case 1: return 'A';
      case 11: return 'J';
      case 12: return 'Q';
      case 13: return 'K';
      default: return valor;
    }
  }
  var numeroDelMedio = Math.floor(Math.random() * 12) + 1;

  document.getElementById("numero").innerHTML = cambiarValor(numeroDelMedio);
};



