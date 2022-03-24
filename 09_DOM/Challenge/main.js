//body
var body = document.getElementById('body')
// Inputs
var askName = document.getElementById('askName')
var askAddress = document.getElementById('askAddress')
var askPhone = document.getElementById('askPhone')
var askPizza = document.getElementById('askPizza')

//Boton
var order = document.getElementById('order')

// Respuestas
var answerName = document.getElementById('answerName')
var answerAddress = document.getElementById('answerAddress')
var answerPhone = document.getElementById('answerPhone')

// IMG
var answerPineapple = document.getElementById('answerPineapple')
var answerPeperoni = document.getElementById('answerPeperoni')


function sendOrder() {


    answerName.innerHTML = askName.value
    answerAddress.innerHTML = askAddress.value
    answerPhone.innerHTML = askPhone.value

    // toUpperCase -> cambia todo el texto a Mayusculas
    // toLowerCase -> cambiar todo el texto a minusculas
    // console.log(askName.value.toUpperCase())
    // console.log(askName.value.toLowerCase())
    var formatPizza = askPizza.value.toLowerCase()
    
    if(formatPizza === 'si') {
        answerPineapple.classList.remove('none')
        answerPeperoni.classList.add('none')
    }else if (formatPizza === 'no') {
        answerPeperoni.classList.remove('none')
        answerPineapple.classList.add('none')
    }else {
        answerPeperoni.classList.add('none')
        answerPineapple.classList.add('none')
    }


    var newImg = document.createElement('img')
    newImg.src = 'https://media.vandal.net/i/640x360/11-2019/201911161716873_1.jpg'
    body.append(newImg)

}

order.addEventListener('click', sendOrder)


// Para borrar un elemento, basta con nombrar al elemento y usar el metodo remove()
// answerPeperoni.remove()


console.log(ditto)