
const formRef = document.querySelector('.form');
const inputs = formRef.querySelectorAll('input');
import { Notify } from "notiflix/build/notiflix-notify-aio";
formRef.addEventListener("submit",onFormSubmit);
function onFormSubmit (e){
        e.preventDefault();
        const {
          elements: { delay, step,amount}
        } = e.currentTarget;
       let delayValue = Number(delay.value); 
       const stepValue = Number(step.value);
       const amountValue = Number(amount.value);
       for (let position = 0; position < amountValue; position += 1){
         let delay = delayValue += stepValue;
        createPromise(position + 1 , delay)
       
          .then(({ position, delay }) => {
            setTimeout(() => {
              Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
            }, delay);
          })
        .catch(({ position, delay }) => {
          setTimeout(() => {
            Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
          }, delay);
        });
    }     
} 
      function createPromise(position, delay) {
        return new Promise((resolve, reject) => {
          const shouldResolve = Math.random() > 0.3;
        
            if (shouldResolve) {
              resolve({ position, delay });
            } else {
              reject({ position, delay });
            }
        });
      }  