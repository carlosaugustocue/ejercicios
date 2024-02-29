document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cotizadorForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const tipoServicio = document.getElementById('tipoServicio').value;
        const cantidadPiezas = parseInt(document.getElementById('cantidadPiezas').value);
        const resultadoDiv = document.getElementById('resultado');

        let costoPorPieza = 0;
        if (tipoServicio === 'basico') {
            costoPorPieza = 2000;
        } else if (tipoServicio === 'premium') {
            costoPorPieza = 4000;
        }

        if (cantidadPiezas >= 1 && cantidadPiezas <= 20) {
            const costoTotal = costoPorPieza * cantidadPiezas;
            resultadoDiv.innerHTML = `El costo total del servicio es: $${costoTotal}`;
        } else {
            alert('La cantidad de piezas debe estar entre 1 y 20.');
        }
    });
});
