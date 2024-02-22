// Ejercicio 13. ¿Cuál es el resultado f?
let x = true;
let y = false;
let u = true;
let a = false;
let f = (x || y) && (u && a) ? 5 : 3;
console.log(f);//3
