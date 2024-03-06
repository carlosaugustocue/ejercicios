
// Funcion que muesrtra si un numero es par o impar


function parImpar(numero){
    if(numero % 2 == 0){
        return "Es par"
    }else{
        return "Es impar"
    }
}

// console.log(parImpar(5)) 


// Funcion que muestra el comportamiento de un semaforo

function semeforo(estado,color){
    if(estado == "on"){
        if(color == "rojo"){
            return "Detenerse"
        }else if(color == "amarillo"){
            return "Precaucion"
        }else if(color == "verde"){
            return "Pasar"
        }else{
            return "Color no valido"
        }
    }else{
        return "El semaforo esta apagado"
    }

    
}

 console.log(semeforo("on","rojo"))