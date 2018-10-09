import '../css/estilos.css'
import  messages from './message.js'
import platziImg from '../images/platzi.png'

// console.log('Hola mundo del 1 ')
document.write(messages.others)
// console.log('Hola mundo del 2 ')
messages.delayedMessage()
// document.write("Hola  Mundo Desde CSS")
// console.log('Hola mundo del 3 ')
const img = document.createElement('img')
img.setAttribute('src',platziImg)
img.setAttribute('width',50)
img.setAttribute('heigt',50)
document.body.append(img)
