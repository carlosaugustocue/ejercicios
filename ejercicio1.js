// Ejemplo de uso de operador ternario
let enchufle = false;
enchufle ? console.log("esta encendido") : console.log("esta apagado");

// Ejemplo 1: Verificar edad
let edad = 9;
edad >= 18 ? console.log("Es mayor de edad.") : console.log("Es menor de edad.");

// Ejemplo 2: Verificar si un número es positivo o negativo
let numero = -3;
numero > 0 ? console.log("número positivo") : console.log("número negativo");

// Ejemplo 3: Verificar ocupación de una cancha y nombrarla
let ocupacionCancha = true;
let nombreCancha = "Bernabeu";
let mensaje = ocupacionCancha ? `La cancha llamada ${nombreCancha} está ocupada` : `La cancha llamada ${nombreCancha} está disponible`;
console.log(mensaje);

// Ejemplo 4: Verificar autenticación de usuario
const email = "arleth64@gmail.com";
const contraseña = "1234";
email == "arleth64@gmail.com" && contraseña == "1234" ? console.log(`señor usuario con correo ${email} Bienvenido al sistema`) : console.log(`El correo ${email} y la contraseña digitada es incorrecta`);

// Ejemplo 5: Verificar el color del semáforo
let colorSemaforo = "amarillo";
colorSemaforo == "verde" ? console.log(`El semaforo esta en ${colorSemaforo} puede seguir`) :
    colorSemaforo == "rojo" ? console.log(`El semaforo esta en ${colorSemaforo} debe parar`) :
    console.log(`muestra color ${colorSemaforo}, esta dañado`);
