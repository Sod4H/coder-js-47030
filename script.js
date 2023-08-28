alert("¡Vamos a jugar a los dados!") //Se le da la bienvenida al usuario mediante un alert

function juego() {
const jugador1 = prompt("Ingresa el nombre del Jugador 1:"); //Le pido al usuario que ingrese el nombre de cada jugador 
const jugador2 = prompt("Ingresa el nombre del Jugador 2:");


function tirarDado() {
  return Math.floor(Math.random() * 6) + 1; //simulador del dado, que va a asignar un numero a c/jugador 
}


function determinarGanador() {
  const resultadoJugador1 = tirarDado();
  const resultadoJugador2 = tirarDado();
  
  alert(jugador1 + " lanzó un dado y obtuvo un " + resultadoJugador1 + " ");
  alert(jugador2 + " lanzó un dado y obtuvo un " + resultadoJugador2 + " ");

  if (resultadoJugador1 > resultadoJugador2) {
    alert(jugador1 + " gana!");
  } else if (resultadoJugador2 > resultadoJugador1) {
    alert(jugador2 + " gana!");
  } else {
    alert("Es un empate.");
  }

}
determinarGanador();
}

let jugarDeNuevo;

do {
  juego();
  jugarDeNuevo = prompt("¿Querés volver a jugar? (Si/No)").toLowerCase();
} while (jugarDeNuevo === "si");

alert("Gracias por jugar. ¡Hasta luego!");
