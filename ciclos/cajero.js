// Definir el saldo inicial del cajero automático
let saldo = 1000;

function retirarDinero() {
    // Validar que la cantidad sea un número positivo
    let cantidad = parseInt(prompt("Ingrese la cantidad a retirar"));
    if (isNaN(cantidad) || cantidad <= 0) {
        console.log('Por favor, ingrese una cantidad válida.');
        return;
    }

    // Validar que haya suficiente saldo en el cajero automático
    if (cantidad > saldo) {
        console.log('No hay suficiente saldo en el cajero automático.');
        return;
    }

    // Restar la cantidad del saldo del cajero automático
    saldo -= cantidad;

    // Mostrar el saldo restante
    console.log(`Retiraste $${cantidad}. Saldo restante: $${saldo}`);
}

function consignarDinero() {
    // Validar que la cantidad sea un número positivo
    let cantidad = parseInt(prompt("Ingrese la cantidad a consignar"));
    if (isNaN(cantidad) || cantidad <= 0) {
        console.log('Por favor, ingrese una cantidad válida.');
        return;
    }

    // Sumar la cantidad al saldo del cajero automático
    saldo += cantidad;

    // Mostrar el saldo actualizado
    console.log(`Consignaste $${cantidad}. Saldo actual: $${saldo}`);
}
