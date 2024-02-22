//Ejercicio 12
// Dado el siguiente código, ¿cuál será el valor de r3?
let x = true;
let y = false;
let u = true;
let a = false; 

let r1 = (x && y) && (u || a);
let r2 = (a || y) || (u || a);
let r3 = r1 || r2;
console.log(r3);//true
