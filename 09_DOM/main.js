// Acceder a etiquedas HTML

var titulo = document.getElementById('titulo')
var parrafo = document.getElementById('parrafo')
var input = document.getElementById('input')
var boton = document.getElementById('boton')
var respuesta = document.getElementById('respuesta')

console.log(titulo)
console.log(parrafo)

// innerHTML -> modificar el contenido de una etiqueta de tipo texto

// titulo.innerHTML = 'Hola mundo desde JS'
// parrafo.innerHTML = 'Hola que tal xd'

function cambiar () {


    titulo.innerHTML = 'Hola mundo desde JS'
    parrafo.innerHTML = 'Hola que tal xd'
// acceder al valor que el usuario ingresa en el input
    respuesta.innerHTML = input.value

}

boton.addEventListener('click', cambiar)