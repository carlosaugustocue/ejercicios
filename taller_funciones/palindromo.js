/*
Verificar si un número es palindrómico: Crea una función que reciba un número entero y devuelva true si es
palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda) y false en caso contrario. Utiliza un
ciclo y una decisión para invertir el número y compararlo con el original.
*/

function esPalindromo(numero) {
    let numeroInvertido = '';
    let numeroOriginal = numero.toString();
    for (let i = numeroOriginal.length - 1; i >= 0; i--) {
        numeroInvertido += numeroOriginal[i];
    }
    let esPalindromo = numeroOriginal === numeroInvertido ? true : false;
    return esPalindromo;
    // console.log(numeroOriginal, numeroInvertido);


}

// Prueba de la función
console.log(esPalindromo(11546132)); 