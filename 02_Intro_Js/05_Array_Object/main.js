

// Arreglos :


// posiciones ->   0         1          2          3       4
var animales =   ['leon', 'tortuga', 'tiburon' , 'raton', 'aguila']
// console.log(animales)

// console.log(animales[1])
// console.log(animales[2])

// Agregar un elemento a mi arreglo
animales[5] = 'perrito'
// console.log(animales)

// Metodo push:
animales.push('pinguino')
animales.push('hipo')
animales.push('cocodrilo')
animales.push('pinguino')
// se pude agregar varios elementos separados por coma
animales.push('ola', 'xd')
// console.log(animales)


// pop() -> eliminar el ultimo elemento de mi arreglo

animales.pop()
animales.pop()
// console.log(animales)

// splice -> desplazar/eliminar uno o varios elementos
// 1 valor es para saber en posicion va a eliminar
// 2 valor es para saber cuantos elemtos eliminar
// 3 valor es el que quiero sumar
// Nota: si el segundo valor es 0, solo deplaza los elementos

// animales.splice(3, 5, 'xd')
// console.log(animales)

var colores = ['azul', 'rojo', 'verde']
colores.splice(1, 0, 'morado')
// console.log(colores)


// console.log(colores.length)

// recorrer un arreglo

for(var i = 0; i < colores.length; i++) {
    // console.log(colores[i])
}

// Arreglo dentro de un arreglo
//                   0                            1                       2
var musica = [ ['badBunny', 'Farruko'], ['neo pistea', 'kidd keo'], [' GNR', 'Nirvana']]

// console.log(musica[1][0])

// Objetos

var persona = {
//  key : value
    nombre: 'Ricardo',
    edad: 23,
    cel: '+52 5656565656',
    musica: {
        regeton: ['BadBunny', 'Baby Rasta y Gringo', 'Plan b', 'Alex y Fido'],
        trap: {
            mexico: ['aleman ', 'HombreJugo'],
            usa: ['drake', 'xtentatio,'],
            argetino: ['duki', 'neo pistea', 'ecko']
        }
    }
}

console.log(persona.edad, persona.nombre)

console.log(persona.musica.trap.argetino[0])