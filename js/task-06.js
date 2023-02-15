const inputEl = document.querySelector('#validation-input');
// =========================================================

inputEl.addEventListener('focus', onInputBlur);

// =========================================================
 
function onInputBlur() {
    if (inputEl.dataset.length === inputEl.getAttribute('#data-length')) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }  
         inputEl.classList.remove('valid');
         inputEl.classList.add('invalid'); 
};
