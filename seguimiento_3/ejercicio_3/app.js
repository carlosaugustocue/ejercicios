
function calculateTotal() {
    const prices = { classic: 500000, running: 800000, basketball: 1000000 };
    const model = document.getElementById('model').value;
    const size = document.getElementById('size').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    let totalAmount = prices[model] * quantity;

    // Validación de la talla
    if (size < 35 || size > 44) {
        alert('La talla seleccionada está fuera del rango permitido.');
        return;
    }

    // Aplicación del descuento
    if (quantity >= 3) {
        totalAmount *= 0.9; // 10% de descuento
    }

    document.getElementById('result').innerHTML = `El total a pagar es de ${totalAmount.toLocaleString('es-CO', {style: 'currency', currency: 'COP'})}.`;
}
