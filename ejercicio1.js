let enchufe = false

enchufe ? console.log("Esta encendido") : console.log("Esta apagado") 

let edad = 9;
edad >= 18 ? console.log("Es mayor de edad.") : console.log("Es menor de edad.");

let numero = -3;
numero > 0 ? console.log("número positivo") : console.log("número negativo");

let ocupacionCancha = true;
let nombreCancha = "Bernabéu";
ocupacionCancha ? console.log(`La cancha ${nombreCancha} llamada ${nombreCancha} está ocupada`) : console.log(`La cancha ${nombreCancha} llamada ${nombreCancha} está libre`);

const email = "arleth64@gmail.com";
const contraseña = 1234;
email == "arleth64@gmail.com" && contraseña == 1234 ? console.log(`señor usuario con correo ${email} Bienvenido al sistema`) : console.log(`El correo ${email} y la contraseña digitada es incorrecta`);

let colorSemaforo = "amarillo";
colorSemaforo == "verde" ? console.log(`El semaforo esta en ${colorSemaforo} puede seguir`) :
    colorSemaforo == "rojo" ? console.log(`El semaforo esta en ${colorSemaforo} debe parar`) :
    console.log(`muestra color ${colorSemaforo}, esta dañado`);