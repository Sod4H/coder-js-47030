const historial = [];

function bienvenida() {
  alert("¡Vamos a jugar a los dados!");
}

bienvenida();

function juego() {
  const jugador1 = {
    nombre: prompt("Ingresa el nombre del Jugador 1:"),
    resultado: 0, 
  };

  const jugador2 = {
    nombre: prompt("Ingresa el nombre del Jugador 2:"),
    resultado: 0, 
  };

  function tirarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function determinarGanador() {
    jugador1.resultado = tirarDado();
    jugador2.resultado = tirarDado();

    alert(jugador1.nombre + " lanzó un dado y obtuvo un " + jugador1.resultado);
    alert(jugador2.nombre + " lanzó un dado y obtuvo un " + jugador2.resultado);

    if (jugador1.resultado > jugador2.resultado) {
      historial.push({ ganador: jugador1.nombre });
      alert(jugador1.nombre + " gana!");
    } else if (jugador2.resultado > jugador1.resultado) {
      historial.push({ ganador: jugador2.nombre });
      alert(jugador2.nombre + " gana!");
    } else {
      historial.push({ ganador: "Empate" });
      alert("Es un empate.");
    }
  }

  determinarGanador();
}

function reiniciarJuego() {
  let jugarDeNuevo;

  do {
    juego();
    jugarDeNuevo = prompt("¿Querés volver a jugar? (Si/No)").toLowerCase();

    if (jugarDeNuevo === "no") {
      const buscar = prompt("¿Deseas buscar un resultado en el historial? (Si/No)").toLowerCase();
      if (buscar === "si") {
        buscarEnHistorial();
      }
    }
  } while (jugarDeNuevo === "si");
}

function buscarEnHistorial() {
  const busqueda = prompt("Ingresa el nombre que deseas buscar:");

  const resultadosCoincidentes = historial.filter((resultado) =>
    resultado.ganador.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (resultadosCoincidentes.length === 0) {
    alert("No se encontraron juegos con ese nombre.");
  } else {
    const historialFormatado = resultadosCoincidentes.map((resultado) => resultado.ganador).join('\n');
    alert("Historial\n" + historialFormatado);
  }
}

function cierreDelSimulador() {
  alert("Historial de partidos:\n" + historial.map((resultado) => resultado.ganador).join('\n') + "\nGracias por jugar. ¡Hasta luego!");
}

reiniciarJuego();
cierreDelSimulador();