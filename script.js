let historial = [];

const inputForm = document.getElementById('inputForm');
const nombreJugador1 = document.getElementById('nombreJugador1');
const nombreJugador2 = document.getElementById('nombreJugador2');
const resultadoDiv = document.getElementById('resultado');
const historialDiv = document.getElementById('historial');
const borrarHistorialButton = document.getElementById('borrarHistorial');
borrarHistorialButton.addEventListener('click', borrarHistorial);

cargarHistorialDesdeLocalStorage();

function juego(event) {
  event.preventDefault();

  const jugador1 = {
    nombre: nombreJugador1.value,
    resultado: tirarDado(),
  };

  const jugador2 = {
    nombre: nombreJugador2.value,
    resultado: tirarDado(),
  };

  let ganador;
  if (jugador1.resultado > jugador2.resultado) {
    ganador = jugador1.nombre;
  } else if (jugador2.resultado > jugador1.resultado) {
    ganador = jugador2.nombre;
  } else {
    ganador = "Empate";
  }

  const resultadoHTML = `
    <p>${jugador1.nombre} lanzó un dado y obtuvo un ${jugador1.resultado}</p>
    <p>${jugador2.nombre} lanzó un dado y obtuvo un ${jugador2.resultado}</p>
    <p>${ganador} gana!</p>
  `;

  resultadoDiv.innerHTML = resultadoHTML;

  historial.push({ ganador, jugador1: jugador1.resultado, jugador2: jugador2.resultado });

  guardarHistorialEnLocalStorage();

  mostrarHistorial();
}

function tirarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

function mostrarHistorial() {
  const historialHTML = historial.map((resultado, index) => `
    <p>Partida ${index + 1}: ${resultado.jugador1} vs ${resultado.jugador2} - Ganador: ${resultado.ganador}</p>
  `).join('');

  historialDiv.innerHTML = `<h2>Historial</h2>${historialHTML}`;
}

function guardarHistorialEnLocalStorage() {
  localStorage.setItem('historial', JSON.stringify(historial));
}

function cargarHistorialDesdeLocalStorage() {
  const historialGuardado = localStorage.getItem('historial');

  if (historialGuardado) {
    historial = JSON.parse(historialGuardado);
    mostrarHistorial();
  }
}

function borrarHistorial() {
  historial = [];
  guardarHistorialEnLocalStorage();
  mostrarHistorial();
}
inputForm.addEventListener('submit', juego);