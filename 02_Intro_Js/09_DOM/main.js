// Acceder a etiquedas HTML

var titulo = document.getElementById('titulo')
var parrafo = document.getElementById('parrafo')
var input = document.getElementById('input')
var boton = document.getElementById('boton')
var body = document.getElementById('body')
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

// Crear elemento :
var nuevoParrafo = document.createElement('p')
// Damos el valor a elemento
nuevoParrafo.innerHTML = 'Cree esta etiqueta'
// Agregamos el elemento el body en html
body.append(nuevoParrafo)



// Acceder a las clases
// classList nos permite acceder a todas sus clases en forma de arreglo
console.log(respuesta.classList)

// classList.add('clase nueva') -> agregar una nueva clase a mi etiqueta
respuesta.classList.add('red')

console.log(respuesta.classList)

// Remover o eliminar una clase

titulo.classList.remove('black')
