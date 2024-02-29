
function calculatePayment() {
    const baseAmount = 7000000;
    const paymentOption = document.getElementById('paymentOption').value;
    let totalAmount;
    let message;

    switch(paymentOption) {
        case 'full':
            totalAmount = baseAmount * 0.95;
            message = `El total a pagar es de ${totalAmount.toLocaleString('es-CO', {style: 'currency', currency: 'COP'})} (5% de descuento incluido).`;
            break;
        case 'two':
            totalAmount = (baseAmount / 2) * 1.02; // 2% de interés por cuota
            message = `El total a pagar por cuota es de ${totalAmount.toLocaleString('es-CO', {style: 'currency', currency: 'COP'})} en 2 cuotas. Total a pagar: ${(totalAmount * 2).toLocaleString('es-CO', {style: 'currency', currency: 'COP'})}.`;
            break;
        case 'three':
            totalAmount = (baseAmount / 3) * 1.02; // 2% de interés por cuota
            message = `El total a pagar por cuota es de ${totalAmount.toLocaleString('es-CO', {style: 'currency', currency: 'COP'})} en 3 cuotas. Total a pagar: ${(totalAmount * 3).toLocaleString('es-CO', {style: 'currency', currency: 'COP'})}.`;
            break;
        default:
            message = 'Opción de pago inválida.';
    }

    document.getElementById('result').innerHTML = message;
}
