function eleccionMaquina() {
    let opciones = ["piedra", "papel", "tijeras"];
    let indice = Math.floor(Math.random() * opciones.length);
    return opciones[indice];
}

function eleccionHumano() {
    let usuario = prompt("Ingrese una opcion:");
    return usuario;
}

function playRound(eleccionHumano, eleccionMaquina) {
    eleccionHumano = eleccionHumano.toLowerCase();
    eleccionMaquina = eleccionMaquina.toLowerCase();
    
    if (eleccionHumano === eleccionMaquina) {
        console.log("Empate. Ambos eligieron " + eleccionHumano);
        return;
    }
    if (
        (eleccionHumano === "piedra" && eleccionMaquina === "tijeras") ||
        (eleccionHumano === "papel" && eleccionMaquina === "piedra") ||
        (eleccionHumano === "tijeras" && eleccionMaquina === "papel")
    ) {
        marcadorHumano++;
        console.log("Ganaste! " + eleccionHumano + " le gana a " + eleccionMaquina);
    } else {
        marcadorMaquina++;
        console.log("Perdiste! " + eleccionMaquina + " le gana a " + eleccionHumano);
    }
}

let marcadorHumano = 0;
let marcadorMaquina = 0;

function playGame (){
   marcadorHumano = 0;
   marcadorMaquina = 0;

    for (let i = 1; i <= 5; i++) {
        console.log(`Ronda ${i}`);
        const humanSelection = eleccionHumano();
        const computerSelection = eleccionMaquina();
        playRound(humanSelection, computerSelection);
        console.log(`Marcador Humano ${marcadorHumano} | Marcador pc ${marcadorMaquina}`);
    }

    console.log(`Resultado final \n Humano ${marcadorHumano} \n Maquina ${marcadorMaquina}`);
    if (marcadorHumano > marcadorMaquina) {
        console.log("Felicidades! Ganaste el juego.");
    } else if (marcadorMaquina > marcadorHumano) {
        console.log("La maquina gano el juego. Suerte para la proxima.")
    } else {
        console.log("Empate!");
    }
}

playGame();