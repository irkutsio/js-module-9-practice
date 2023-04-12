

//*******************************8 */
// const logMessage = ()=> {
//     console.log('лог при вызове колбек функции')
// }

// console.log('до вызова сет-таймаут')

// setTimeout(x => {
//     console.log('1 - внутри колбек для сеттаймаут')
//     console.log(x)
// }, 2000, 'I`am x')

// console.log('после вызова сеттаймаут')
//*********************** */
// const logger = time => {
//     console.log('лог через ${time}, потому что не отменили таймаут')
// }

// const timerId = setTimeout(logger, 2000, 2000);
// console.log(timerId)

// const shouldCancelTume = Math.random() > 0.3;
// console.log(shouldCancelTume);

// // if(shouldCancelTume) {
// //     clearTimeout(timerId)
// // }

// const logger = time => console.log(`лог каждые ${time}ms - ${Date.now()}`);

// console.log('до вызова сетинтервал');
// const intervalId = setInterval(logger, 2000, 2000);
// console.log('после вызова сетинтервал');

// if (shouldCancelTume) {
//   clearTimeout(intervalId);
// }

// *******************************88
// const notification = document.querySelector('.notification');

// notification.addEventListener('click', onClick)


// function onClick (){
//     hideNotification();
// }

// setTimeout( ()=>{
//     notification.classList.add('is-hidden')
// }, 3000)

// function hideNotification () {
//     notification.classList.add('is-hidden') 
// }