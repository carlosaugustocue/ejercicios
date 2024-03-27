/*
Calcular la suma de los divisores de un número: Crea una función que reciba un número entero y devuelva la
suma de todos sus divisores (excluyendo al propio número). Utiliza un ciclo para recorrer todos los posibles
divisores y una decisión para identificar los divisores reales y sumarlos.
*/

function sumaDivisores(numero) {
    let suma = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            suma += i;
            console.log(i);
        }
    }
    return suma;
}

// Prueba de la función
console.log('Suma de los divisores es: ',sumaDivisores(10));