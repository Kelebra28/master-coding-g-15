// sí hay pan
// var hayPan = true;  // verdadero

// hayPan = false; // false

// console.log('Valor de mi variable ' + hayPan);
// if(hayPan){ // esto debe ser true o false
//     console.log('Desayuno Pan');
// } else{
//     console.log('Desayuno otra cosa');
// }

// if(hayPan == true){ // true == true
//     // realiza acción
// }

// Comparadores

// <
// >
// <=
// >=
// ==   igual
// ===  triple igual
// !=   diferente
// !==  diferente con dos iguales

// NOOOOOOO    ==       !=
// if(6 != '6'){   // true
//     console.log("Sí son iguales");
// }

// SIIII
// ===  !==
// number y 6  comparar 6 y string
// if(6 === '6'){   // true, valor y el tipo de dato
//     console.log("Sí son iguales");
// }else{
//     console.log('=== No son iguales');
// }

// var calificacion = 10;
// cuando el valor de mi condición es true, deja de evaluar todas las demás condicionales
// solo se va a ejecutar el código del bloque cuya condición sea verdadera
// esto es lo recomendado
// if(calificacion <= 5){  //10
//     console.log('Reprobaste :(');
// }else if(calificacion < 9){    //10
//     console.log('Estudia más');
// } else if(calificacion >= 9) {  // 10
//     console.log('Excelente :D');
// }

// esto no es lo recomendado
// if(calificacion <= 5){
//     console.log('Dos Reprobaste :(');
// }
// if(calificacion === 6){
//     console.log('Dos Estudia más');
// } 
// if(calificacion > 6){
//     console.log('Dos Excelente :D');
// }

// Operador lógico
// &&   and
// ||   or

// var calificacion = 10;


// if(calificacion >= 0 && calificacion <= 5){  // 10, true, false ---> FALSE
//     console.log('Reprobaste :(');
// }else if(calificacion >= 6 && calificacion <= 8){   // 10, true, false ---> FALSE
//     console.log('Estudia más');
// } else if(calificacion >= 9 && calificacion <= 10) {  // 10, true, true ---> TRUE
//     console.log('Excelente :D');
// }

// var diaSemana = 'sabado';
// var ganasDeSalir = true;  
// var quincena = true;

// if(diaSemana === 'martes' && ganasDeSalir){
//     console.log('Sal poquito');
// } else if( diaSemana === 'viernes' && ganasDeSalir){
//     // false y  true
//     console.log('Alócate');
//     // si es quincena + es viernes o sábado + tienes ganas de salir -- sal
// }else if(quincena && (diaSemana === 'viernes' || diaSemana === 'sabado') && ganasDeSalir){
//     //  true    y   true    y   true
//     console.log('Sal con tus amigos');
// }


// else if( diaSemana === 'sabado' || quincena || ganasDeSalir){ // false, true, false
//     console.log('Ve con tus amigos');
// } 

// negación
// // !
// var hayPan = true;

// console.log('Valor de mi variable ' + hayPan);
// // hayPan === false
// // ! --> 
// if(!hayPan){ // si hayPan es false ejecuta este código
//     console.log('Compra Pan');
// } else{
//     console.log('Desayuna pan');
// }

// var clima = 'nublado';
// var ropaLimpia = 'playera';

// if(!(clima === 'soleado' && ropaLimpia === 'short')){ // si la condición es false, ejecuta código
//     console.log('Sal a la calle');
// }else if (){
//  } else if(){

//  } else{
//     console.log('Se cumple else');
// }

// es diferente 
// if(clima !== 'soleado' && ropaLimpia !== 'short'){
//     console.log('Esta es la segunda condición');
// }

// 1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), 
// en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, 
// responder: “No te creo”. 
// debemos poder procesar la respuesta del usuario, sin importar si la escribe
// con mayúsculas o minúsculas

// // 2 .Solicitar al usuario un número, y determinar si es divisible entre dos o no. 
// Mostrando al usuario un mensaje de “x número es divisible entre 2”

// 3. Solicitar al usuario una calificación (entre 1 y 10). 
// Luego se debe comprobar que el número efectivamente esté en ese rango, 
// si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” 
// si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, 
// y por último, “excelente” si es 10.


// if(true){
//     acción
// }else if(true){
//     acción
// }else{

// }


// valores TRUTHY o FALSY
// tipos de datos
// boolean  

// no están definidos:
// string vacío  ''    ""
// undefined
// 0
// false
// null
// NaN

// miNombre no es booleano, 
// var miNombre = 1; // sí está definido

// if(!miNombre){   // miNombre no está definido
//     // console.log('Mi nombre es ' + miNombre);
//     console.log('No hay definición');
// }else{
//     console.log('hola');
//     // console.log('No tengo nombre');
//     // console.log(typeof miNombre);
// }

// if(condicion1){

// } else {

// }

// OPERADOR TERNARIO
var tengoHambre = true;
if(tengoHambre){
    console.log('Como miel');
    console.log(3*5);
} else{
    console.log('Me duermo');
}

tengoHambre
    ? (console.log('Como miel'), console.log(3*5)) 
    : console.log('Me duermo');