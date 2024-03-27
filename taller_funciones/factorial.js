// Calcular el factorial de un número es una tarea común en matemáticas. El factorial de un número entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n. Por ejemplo, el factorial de 4 es 4! = 4 * 3 * 2 * 1 = 24. Escribe una función llamada factorial que reciba un número n y retorne el factorial de ese número. Nota: se puede asumir que el número n es un entero positivo.
function factorial(number){

    let result = 1;

    for(let i = 1; i <= number; i++){
        result *= i;
    }

    return result;
}

console.log(factorial(4)); // 120