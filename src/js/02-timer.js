// ******************* */
// ТАЙМЕР СЕКУНДОМЕР

const date = new Date();
console.log(date);

const timer = {
  start() {
    // const startTime = Date.now() + 17000;
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();
      //  const deltaTime = startTime - currentTime;
      const deltaTime = currentTime - startTime;
      const { hours, minutes, seconds } = convertMs(deltaTime);
      // console.log(`${hours}:${minutes}:${seconds}`);
    }, 1000);
  },
};

timer.start();

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}

// ********************************88
// ЛІЧИЛЬНИК ЗВОРОТНЬОГО ВІДЛІКУ

// const box = document.querySelector('.ad')
// const seconds = document.querySelector('.seconds')
// let count = 11;

// const id = setInterval (()=>{
// count -= 1;
// seconds.textContent = count
// console.log(count)
// if(!count) {
//     box.style.display = 'none';
// clearInterval(id);

// }
// },1000)

// console.log(31536000000 * 52)

