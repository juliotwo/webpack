import renderToDom from './render-to-dom.js'
import makeMessage from './make-message'

const waitTime = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Han pasado 3 segundos')
    reject(new Error('Algo ha salido mal...'))
  }, 3000)
})

const messages = {
  others: 'Hola a todos',
  delayedMessage: async () => {
    const message = await waitTime
    console.log(message)
   
    renderToDom(makeMessage(message))
  }
}

export default messages

// export {delayedMessage}