function eleccionMaquina() {
    let opciones = ["piedra", "papel", "tijeras"];
    let indice = Math.floor(Math.random() * opciones.length);
    return opciones[indice];
}

function eleccionHumano() {
    let usuario = prompt("Ingrese una opcion:");
    return usuario;
}

let marcadorHumano = 0;
let marcadorMaquina = 0;

let marcador = document.createElement('div');
marcador.style.marginTop = '20px';
document.body.appendChild(marcador);

function actualizarMarcador(mensaje = "") {
    marcador.innerHTML = `
        <p>${mensaje}</p>
        <p>Marcador: Humano ${marcadorHumano} - Maquina ${marcadorMaquina}</p>
    `;
}

function playRound(eleccionHumano, eleccionMaquina) {
    eleccionHumano = eleccionHumano.toLowerCase();
    eleccionMaquina = eleccionMaquina.toLowerCase();
    
    if (marcadorHumano >= 5 || marcadorMaquina >= 5) {
        return;
    }

    let mensaje = "";

    if (eleccionHumano === eleccionMaquina) {
       mensaje = "Empate. Ambos eligieron " + eleccionHumano;
       actualizarMarcador(mensaje);
        return;
    } else if (
        (eleccionHumano === "piedra" && eleccionMaquina === "tijeras") ||
        (eleccionHumano === "papel" && eleccionMaquina === "piedra") ||
        (eleccionHumano === "tijeras" && eleccionMaquina === "papel")
    ) {
        marcadorHumano++;
        mensaje = "Ganaste! " + eleccionHumano + " le gana a " + eleccionMaquina;
    } else {
        marcadorMaquina++;
        mensaje = "Perdiste! " + eleccionMaquina + " le gana a " + eleccionHumano;
    }

    if (marcadorHumano === 5) {
        mensaje += "<br><strong>Felicidades! Ganaste el juego.</strong>"
    } else if (marcadorMaquina === 5) {
        mensaje += "<br><strong>La maquina gano el juego.</strong>"
    }

actualizarMarcador(mensaje);
}

let opciones = ["piedra", "papel", "tijeras"];

opciones.forEach(opcion => {
    let boton = document.createElement('button');
    boton.textContent = opcion.charAt(0).toUpperCase() + opcion.slice(1);
    boton.addEventListener('click', function() {
        let eleccionMaq = eleccionMaquina();
        playRound(opcion, eleccionMaq);
    });
    document.body.appendChild(boton);
})