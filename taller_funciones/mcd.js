function maximoComunDivisor(a, b) {
    // Encuentra el número más pequeño entre a y b
    let menor = Math.min(a, b);
    
    // Comienza desde el número más pequeño y reduce hacia atrás
    for (let i = menor; i >= 1; i--) {
        // Si i es un divisor de ambos números, entonces es el MCD
        if (a % i === 0 && b % i === 0) {
            return i; // Devuelve el MCD encontrado
        }
    }
    return 1; // El MCD es 1 si no se encuentran otros divisores comunes (solo para completitud)
}

// Prueba de la función
console.log(maximoComunDivisor(48, 18)); // Debería imprimir 6
