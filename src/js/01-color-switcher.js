function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

const logMessage = ()=> {
    console.log('лог при вызове колбек функции')
}

console.log('до вызова сет-таймаут')

setTimeout(() => {
    console.log('внутри колбек для сеттаймаут')
}, 2000)

console.log('после вызова сеттаймаут')