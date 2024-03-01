document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener valores del formulario
    const bookCategory = document.getElementById('bookCategory').value;
    const loanDays = parseInt(document.getElementById('loanDays').value, 10);

    // Definir tarifas por día según la categoría
    const rates = { 'Bestsellers': 500, 'Literatura': 100, 'Academicos': 0 };
    let cost = rates[bookCategory] * loanDays;

    // Aplicar descuento si los días de préstamo son mayores a 10
    if (loanDays > 10) {
        cost -= cost * 0.10; // Descuento del 10%
    }

    // Mostrar el resultado
    document.getElementById('result').innerHTML = `<strong>Costo del Préstamo:</strong> $${cost.toFixed(2)}`;
});
