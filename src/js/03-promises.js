// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const number = Math.random() < 0.6;
//     if (number) {
//       resolve('вуху все тру');
//     }
//     reject('ничего не тру');
//   }, 1000);
// });
// promise.then(
//     result => {
//   console.log(`${result}`);
//   return 6;
// },
// error => {
//     console.log(`${error}`)
//     return 10;
// }).then((x)=>{
//     console.log(x)
// })

// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// promise
//   .then(value => {
//     value;
//   })
//   .then(value => console.log(value))
//   .catch(error => console.log(error));

// console.log(promise)
// // Will run first
// console.log("Before promise.then()");

// // Registering promise callbacks
// promise.then(
//   // onResolve will run third or not at all
//   value => {
//     console.log("onResolve call inside promise.then()");
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   // onReject will run third or not at all
//   error => {
//     console.log("onReject call inside promise.then()");
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true;

//       if (isSuccess) {
//         resolve("success value");
//       } else {
//         reject("error");
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer("Mango")
//   .then(user => console.log(user))
//   .catch(error => console.error(error));
//***************************** */

// Мікро процеси мають більший пріорітет ніж макро

// Мікро процеси
// 1 Promise
// 2 Observer

// Макро процеси
// 1 setTimeout
// 2 setInterval
// https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate
// 3 setImmediate
//https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
// 4 requestAnimationFrame
//ПРИКЛАДИ*****
// console.log('1')
// setTimeout(() => {
//   console.log('2')
// }, 0);
// Promise.resolve('3').then(value => console.log(value));
// console.log('4') // 1, 4, 3, 2
//****** */
// console.log("1");
// setTimeout(() => console.log("2"), 10);
// Promise.resolve("3").then((value) => console.log(value));
// Promise.reject("4").then((value) => console.log(value)).catch(err=>console.log(err));
// Promise.resolve("5").then((value) => console.log(value));
// setTimeout(() => console.log("6"), 0);
// console.log("7"); //1,7,3,5,4,2
//*******************/



// function createPromise(position, delay, step) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }

// const form = document.querySelector('.form');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
  
//   const delay = parseInt(form.elements.delay.value);
//   const step = parseInt(form.elements.step.value);
//   const amount = parseInt(form.elements.amount.value);
  
//   for (let i = 0; i < amount; i++) {
//     createPromise(i, delay + step * i)
//       .then(({ position, delay }) => {
//         console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//   }
// });