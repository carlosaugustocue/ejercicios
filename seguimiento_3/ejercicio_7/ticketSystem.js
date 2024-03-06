function calculateTotal() {
    const prices = {
        'General': 50000,
        'Preferencial': 150000,
        'VIP': 300000
    };
    const taxRate = 0.10;
    const serviceCharge = 5000;

    let location = document.getElementById('location').value;
    let quantity = parseInt(document.getElementById('quantity').value);
    let basePrice = prices[location];
    let totalServiceCharge = serviceCharge * quantity;
    let subtotal = basePrice * quantity;
    let tax = subtotal * taxRate;
    let total = subtotal + tax + totalServiceCharge;

    document.getElementById('totalCost').innerHTML = `
        <h3>Detalle de Compra:</h3>
        <p>Localidad: ${location}</p>
        <p>Cantidad de boletas: ${quantity}</p>
        <p>Subtotal: $${subtotal.toLocaleString()}</p>
        <p>Cargo por servicio (por boleta): $${serviceCharge.toLocaleString()}</p>
        <p>Impuestos: $${tax.toLocaleString()}</p>
        <p>Total a pagar: $${total.toLocaleString()}</p>
    `;
}

