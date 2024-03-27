// Funcion que recibe un numero y devuelve la suma de sus digitos
function sumDigits(number){
  //verificamos que number sea un numero y que sea positivo
    if(typeof number !== 'number' || number < 0){
      return 'Error: El parameto debe ser un numero y ademas debe ser positivo';
    }  
    //convertimos el numero a string
  let stringNumber= number.toString();
    let sum = 0;

    //recorremos el string y sumamos cada digito
    for(i=0; i < stringNumber.length;i++){
      sum += parseInt(stringNumber[i]);
    }
  return sum;
  }
  
  console.log(sumDigits(123456789));