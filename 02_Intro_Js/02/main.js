// // boolean (true, false)
// // number (numero, integer, float, doubles, etc)
// // String (fjasdñlfkjsda , char)
// // 

// var miVariable = 'true';

// // undefined, null
// var miVariable2 = 'hola';

// console.log("Tipo de dato: " + typeof miVariable2)

// // Object: instacia de una clase

// console.log('hola' + ' ' + 'soy un string.')
// console.log(3 +5)

// // cuando tengo strings y numeros, la consola va a tomar todo como un string
// console.log('hola ' + '3' + '4') 

// var suma = 3 + 4;
// console.log('hola ' + suma)

// // jerarquía de operaciones
// var operaciones = (4 * 6 / 2 * 5) - 1;


// // AUTOASIGNAR VALOR A UNA VARIABLE

// // Otros tipos de operadores
// // ++   sumar 1 a una variable
// var sumando = 5;
// sumando = sumando + 1;
// sumando ++;   // sumando + 1 
// sumando --; // sumando - 1

// var variableOperaciones = 10;
// variableOperaciones = variableOperaciones * 3;  
// variableOperaciones *= 3;

// // /, suma, resta
// variableOperaciones += 5;   // variableOperaciones + 5
// variableOperaciones -= 4;   // variableOperaciones -4
// variableOperaciones /= 5;   // variable operaciones / 5

// // módulo (residuo)  %
// variableOperaciones = 10;
// var residuo = variableOperaciones % 3;  // 10 / 3 NO ME INTERESA EL RESULTADO, RESIDUO = 1
// console.log(residuo);

// // cómo puedo saber si un número es par
// var valor = 40 % 2;   // 0
// // si valor es 0, entonces es par

// // si yo quiero saber si un número es divisible entre 7
// var valor2 = 54565434536 % 7;
// // si valor2 es 0, entonces es divisible entre 7
// // 14/7 = 2, residuo 0


// // CONVERSIÓN DE STRING A NUMBER
// var entradaUsuario = prompt("Dame un valor");   // pido datos de usuario
// console.log(entradaUsuario);    // despliega en consola entradaUsuario
// // si no tiene paréntesis me regresa características
// console.log(typeof entradaUsuario)  // despliega en consola el TIPO DE DATO
// // si tiene paréntesis hace alguna acción
// var valorConvertido = parseInt(entradaUsuario); // convertir string a entero
// console.log(valorConvertido);   // despliega la variable valorConvertido
// console.log(typeof valorConvertido) // despliega el TIPO DE DATO

// var resMultiplicacion = valorConvertido * 4;
// console.log(resMultiplicacion);

// // resMultiplicacion = entradaUsuario * 100;
// // console.log(resMultiplicacion);


// alert('El número es ' + resMultiplicacion);




/*
    EJERCICIO
    Voy a pedir la temperatura en Kelvin al usuario (273)
    La van a guardar en una variable
    van a convertir la temperatura en °C (Kelvin - 273)
    van a convertir la temperatura en°F (investigar)
    Mostar en un alert: "La temperatura TEMPKELVIN K es igual a TEMPFAHRENHEIT °F"
                    "La temperatura 560 K es igual a 43.6 °F"
        TEMPKELVIN = temperatura en Kelvin  560
        TEMPFAHRENHEIT = temperatura en Fahrenheit
*/


// Strings
var miNombre = 'Víctor Abel';
// como es un string, tiene métodos inherentes

// como no tiene paréntesis, no modificará o realizará acciones sobre mi variable
console.log(miNombre.length);

// métodos tiene la clase String
var nombreMayus = miNombre.toUpperCase();
console.log(nombreMayus);

// var nombreUsuario = prompt
// nombreUsuario = nombreUsuario.toUpperCase();

console.log(miNombre.toLowerCase());

// startsWith()
// trim()    quitar espacios antes y después de un string
// charAt()
// indexOf()
// replace()
// slice()
// splice()

// Ejercicio 2
// En un prompt van a pedir el nombre al usuario
// En otro van a pedir la edad
// Luego van a convertir el nombre a mayúsculas
// Van a convertir la edad del usuario en años perro
// (cada uno de los dos primeros años valen por 10.5)
// (cada año subsecuente equivale a 4 años)
// Van a mostrar un alert que diga:
// "Tu nombre es NOMBREUSUARIO y tu edad EDAD en años perro son EDADPERRO"

