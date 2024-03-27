/* Dado un numero, determinar si es primo o no lo es. Un número primo es aquel que solo es divisible por 1 y por si mismo. Por ejemplo, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, etc.
*/

function itsPrimeNumber(number){
    if(number <= 1){
        return false;
    }

    for(let i = 2; i < number; i++){
        console.log(i,number % i);
        if(number % i === 0){
            
            return false;
        }
    }

    return true;
}

console.log(itsPrimeNumber(97)); 