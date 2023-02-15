// version 1
const refs  = {
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
};

let counterValue = 0;

refs.decrement.addEventListener('click', ()  =>  {
    counterValue -= 1;
    refs.value.textContent = counterValue;
});
refs.increment.addEventListener('click', ()  =>  {
    counterValue += 1;
    refs.value.textContent = counterValue;
});



// =======================================================================
// const incrementEl = document.querySelector('[data-action="increment"]');
// const decrementEl = document.querySelector('[data-action="decrement"]');
// const valueEl = document.querySelector('#value');

// let counterValue = 0;

// decrementEl.addEventListener("click", ()  => {
//     counterValue -= 1;
//     valueEl.textContent = counterValue;
// });

// incrementEl.addEventListener("click", ()  => {
//     counterValue += 1;
//     valueEl.textContent = counterValue;
// });