// Datos de ejemplo para las carreras y pilotos
const races = [
    { id: 1, name: 'Carrera 1', pilots: ['Piloto A', 'Piloto B', 'Piloto C'], odds: [1.5, 2.0, 3.0] },
    { id: 2, name: 'Carrera 2', pilots: ['Piloto D', 'Piloto E', 'Piloto F'], odds: [2.5, 1.8, 2.2] }
    // Agrega más carreras según sea necesario
];

document.addEventListener('DOMContentLoaded', () => {
    populateRaces();
    document.getElementById('placeBet').addEventListener('click', placeBet);
});

function populateRaces() {
    const raceSelect = document.createElement('select');
    raceSelect.classList.add('form-select');
    raceSelect.id = 'raceSelect';
    races.forEach(race => {
        let option = new Option(race.name, race.id);
        raceSelect.add(option);
    });
    document.getElementById('raceSelection').appendChild(raceSelect);

    // Inicializar selección de pilotos basada en la primera carrera
    updateBettingOptions(raceSelect.value);
    raceSelect.addEventListener('change', (event) => updateBettingOptions(event.target.value));
}

function updateBettingOptions(raceId) {
    const selectedRace = races.find(race => race.id == raceId);
    const bettingDiv = document.getElementById('bettingOptions');
    bettingDiv.innerHTML = ''; // Limpiar opciones anteriores

    const pilotSelect = document.createElement('select');
    pilotSelect.classList.add('form-select');
    pilotSelect.id = 'pilotSelect';
    selectedRace.pilots.forEach((pilot, index) => {
        let option = new Option(`${pilot} (Odds: ${selectedRace.odds[index]})`, pilot);
        pilotSelect.add(option);
    });
    bettingDiv.appendChild(pilotSelect);
}

function placeBet() {
    const raceId = document.getElementById('raceSelect').value;
    const pilotName = document.getElementById('pilotSelect').value;
    const betAmount = parseFloat(document.getElementById('amount').value);
    const selectedRace = races.find(race => race.id == raceId);
    const pilotIndex = selectedRace.pilots.indexOf(pilotName);
    const pilotOdds = selectedRace.odds[pilotIndex];

    if (betAmount < 10000 || betAmount > 1000000) {
        alert('El monto de la apuesta debe ser entre $10.000 y $1.000.000.');
        return;
    }

    // Aquí se determinarían los resultados reales de la carrera y se compararían con la apuesta del usuario
    // Para este ejemplo, supongamos un resultado aleatorio
    const win = Math.random() < 0.5; // 50% de probabilidad, simplificado para el ejemplo

    if (win) {
        const winnings = betAmount * pilotOdds;
        alert(`¡Felicidades, ganaste! Tus ganancias son: $${winnings.toFixed(2)}`);
    } else {
        alert("Lo siento, no ganaste esta vez. ¡Inténtalo de nuevo!");
    }
}
