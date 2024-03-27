/*
Contar las vocales en una cadena de texto: Crea una función que reciba una cadena de texto y devuelva el
número de vocales que contiene. Utiliza un ciclo y una decisión para recorrer cada carácter de la cadena y
verificar si es una vocal.
*/

function contarVocales(cadena) {
    let vocales = 'aeiou';

    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i].toLowerCase())) {
            contador++;
        }
    }
    return contador;
}

// Prueba de la función
console.log(contarVocales('ISAAC NEWTON')); 
