function calcularNotaFinal() {
    const notas = []; // Array para almacenar las notas ingresadas

    for (let i = 1; i <= 3; i++) {
        const nota = parseFloat(document.getElementById("nota" + i).value);
        notas.push(nota);
    }

    let sumaNotas = 0;
    for (let i = 0; i < notas.length; i++) {
        sumaNotas += notas[i];
    }

    const promedio = sumaNotas / notas.length;

    document.getElementById("resultado").textContent = promedio.toFixed(2);
}

function calcularNotaFinal() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    const promedio = (nota1 + nota2 + nota3) / 3;

    document.getElementById("resultado").textContent = `Nota Final: ${promedio.toFixed(2)}`;

    if (promedio >= 6) {
        document.getElementById("aprobadoReprobado").textContent = "Aprobado";
    } else {
        document.getElementById("aprobadoReprobado").textContent = "Reprobado";
    }
}