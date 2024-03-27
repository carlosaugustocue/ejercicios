/**
 * Calcular la potencia de un número: Crea una función que reciba dos números enteros base y exponente, y
 * devuelva la base elevada a la exponente. No utilices la función integrada Math.pow(). Utiliza un ciclo y una
 * decisión para calcular la potencia.
 */

function potencia(base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}

// Prueba de la función
console.log(potencia(2, 3));