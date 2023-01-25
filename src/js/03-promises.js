import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form')
form.addEventListener('submit', onFormSubmited)

function onFormSubmited(e) {
  e.preventDefault();
let delay = Number(form.delay.value);
let step = Number(form.step.value);
let amount = Number(form.amount.value);
let count = 0;
let difference = delay - step;
const makeCount = setInterval(() => {
    count += 1;
    difference += step;

    createPromise(count, difference).then(Success).catch(Error);

    if (count === amount) {
      clearInterval(makeCount);
    }
  }, step);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
    resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    reject(`❌ Rejected promise ${position} in ${delay}ms`)
  }
    }, delay)
  })
  
}

function Success(value) {
  Notify.success(value)
}

function Error(error) {
  Notify.failure(error)
}
