
function calculatePrice() {
    const basePrices = { hard: { synthetic: 8000, natural: 10000 }, soft: { synthetic: 8000, natural: 10000 }, brush: { synthetic: 12000, natural: 15000 } };
    const model = document.getElementById('model').value;
    const material = document.getElementById('material').value;
    const longHandle = document.getElementById('longHandle').checked;
    const hookEnd = document.getElementById('hookEnd').checked;
    const quantity = parseInt(document.getElementById('quantity').value);
    let totalAmount;

    
    if (isNaN(quantity)) {
        alert('La cantidad ingresada no es válida.');
        return;
    }   
    
    if (quantity < 3 ) {
        alert('La cantidad minima son 3 escobas.');
        return;
    }

    if (quantity > 30 ) {
        alert('La cantidad maxima son 30 escobas.');
        return;
    }

    if (longHandle && hookEnd) {
        alert('No se puede combinar mango largo y gancho en punta.');
        return;
    }

    totalAmount = basePrices[model][material];
    if (longHandle) totalAmount += 2000;
    if (hookEnd) totalAmount += 500;
    totalAmount *= quantity;

    document.getElementById('result').innerHTML = `El precio total es de ${totalAmount.toLocaleString('es-CO', {style: 'currency', currency: 'COP'})}.`;
}
