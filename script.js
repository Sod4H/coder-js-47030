alert("¡Vamos a jugar a los dados!");

const historial = [];

function juego() {
  const jugador1 = prompt("Ingresa el nombre del Jugador 1:");
  const jugador2 = prompt("Ingresa el nombre del Jugador 2:");

  function tirarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function determinarGanador() {
    const resultadoJugador1 = tirarDado();
    const resultadoJugador2 = tirarDado();

    alert(jugador1 + " lanzó un dado y obtuvo un " + resultadoJugador1);
    alert(jugador2 + " lanzó un dado y obtuvo un " + resultadoJugador2);

    if (resultadoJugador1 > resultadoJugador2) {
      historial.push(jugador1 + " ganó");
      alert(jugador1 + " gana!");
    } else if (resultadoJugador2 > resultadoJugador1) {
      historial.push(jugador2 + " ganó");
      alert(jugador2 + " gana!");
    } else {
      historial.push("Empate");
      alert("Es un empate.");
    }
  }

  determinarGanador();
}

let jugarDeNuevo;


do {
  juego();
  jugarDeNuevo = prompt("¿Querés volver a jugar? (Si/No)").toLowerCase();
  
  if (jugarDeNuevo === "si") {
    const buscar = prompt("¿Deseas buscar un resultado en el historial? (Si/No)").toLowerCase();
    if (buscar === "si") {
      buscarEnHistorial();
    }
  }
} while (jugarDeNuevo === "si");



function buscarEnHistorial() {
  const busqueda = prompt("Ingresa el resultado que deseas buscar:");

  const resultadosCoincidentes = historial.filter((resultado) => resultado.includes(busqueda));

  if (resultadosCoincidentes.length === 0) {
    alert("No se encontraron usuarios con ese nombre.");
  } else {
    alert("Historial\n" + resultadosCoincidentes.join('\n'));
  }
}

alert("Historial de partidos:\n" + historial.join('\n') + "\nGracias por jugar. ¡Hasta luego!");