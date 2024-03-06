//generar la tabla de multiplicar de un numero ingresado por el usuario
let numero = parseInt(prompt("Ingrese el numero de la tabla de multiplicar"));
let i = 1;
while (i <= 12) {
    console.log(`${numero} x ${i} = ${numero * i}`);
    i++;
}