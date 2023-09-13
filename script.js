const historial = [];   // Declaro un array para almacenar el historial de juegos.

function bienvenida() {    // Función de bienvenida que muestra un mensaje de inicio.
  alert("¡Vamos a jugar a los dados!");  
}

bienvenida(); // Llamo a la función de bienvenida para comenzar el juego.

function juego() { // Función principal del juego.
  const jugador1 = { // Creo objetos para representar a los dos jugadores.
    nombre: prompt("Ingresa el nombre del Jugador 1:"),
    resultado: 0, // Acá se almacenará el resultado del dado para el jugador, lo mismo suecede con el jugador 2.
  };

  const jugador2 = {
    nombre: prompt("Ingresa el nombre del Jugador 2:"),
    resultado: 0, 
  };

  function tirarDado() { // Función para lanzar un dado y obtener un número aleatorio del 1 al 6.
    return Math.floor(Math.random() * 6) + 1;
  }

  function determinarGanador() { // Función para determinar el ganador del juego y actualizar el historial.
    jugador2.resultado = tirarDado();
    jugador1.resultado = tirarDado();  // Cada jugador tira un dado y se almacena su resultado.

    alert(jugador1.nombre + " lanzó un dado y obtuvo un " + jugador1.resultado); // Se muestra el resultado de los "lanzamientos" en un mensaje de alerta.
    alert(jugador2.nombre + " lanzó un dado y obtuvo un " + jugador2.resultado);

    if (jugador1.resultado > jugador2.resultado) { // comparo el resultado de los jugadores para determinar al ganador.
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

  determinarGanador(); // Llamo a la función para determinar el ganador del juego.
}

function reiniciarJuego() { // Función para reiniciar el juego.
  let jugarDeNuevo;

  do {  // Bucle que permite volver a jugar mientras el usuario lo desee.
    juego(); 
    jugarDeNuevo = prompt("¿Querés volver a jugar? (Si/No)").toLowerCase(); // Se le pregunta al usuario si desea volver a jugar

    if (jugarDeNuevo === "no") { // Si la respuesta es "no" se le pregunta si quiere buscar un resultado en el historial
      const buscar = prompt("¿Deseas buscar un resultado en el historial? (Si/No)").toLowerCase();
      if (buscar === "si") { 
        buscarEnHistorial();
      }
    }
  } while (jugarDeNuevo === "si"); //si la respuesta es "si" se reinicia el simulador 
}

function buscarEnHistorial() { // Función para buscar resultados en el historial.
  const busqueda = prompt("Ingresa el nombre que deseas buscar:"); 

  const resultadosCoincidentes = historial.filter((resultado) => // Filtro el historial para encontrar resultados coincidentes.
    resultado.ganador.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (resultadosCoincidentes.length === 0) { // Muestro los resultados encontrados o un mensaje si no se encontraron coincidencias.
    alert("No se encontraron juegos con ese nombre.");
  } else {
    const historialFormateado = resultadosCoincidentes.map((resultado) => resultado.ganador).join('\n'); // Formateo y muestro los resultados encontrados.
    alert("Historial\n" + historialFormateado);
  }
}

function cierreDelSimulador() { // Función para mostrar el historial al final del juego.
  alert("Historial de ganadores:\n" + historial.map((resultado) => resultado.ganador).join('\n') + "\nGracias por jugar. ¡Hasta luego!");
}

reiniciarJuego(); 
cierreDelSimulador();