/*
Generar una serie de Fibonacci hasta un límite: Crea una función que reciba un número entero n y devuelva un
array con los n primeros números de la serie de Fibonacci. Utiliza un ciclo y una decisión para calcular los
números de la serie.
*/

function fibonacci(n) {
    // Creamos un array para almacenar la secuencia de Fibonacci
    const fibSequence = [0, 1];
    
    // Generamos la secuencia de Fibonacci hasta n números
    for (let i = 2; i < n; i++) {
        // Añadimos el nuevo número a la secuencia
        fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }
    
    // Devolvemos la secuencia de Fibonacci hasta el n-ésimo término
    return fibSequence.slice(0, n);
}

// Prueba de la función
console.log(fibonacci(10)); 