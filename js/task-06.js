const inputEl = document.querySelector('#validation-input');
// =========================================================

inputEl.addEventListener('focus', onInputBlur);

// =========================================================
 
function onInputBlur() {
    if (inputEl.getAttribute('data-length') === inputEl.target.value.length) {
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }
};
// ========================================================

// const textInput = document.querySelector('#validation-input')

// console.log(textInput.getAttribute('data-length'))

// textInput.addEventListener('blur', event => {
// 	if (event.target.value.length == textInput.getAttribute('data-length')) {
// 		textInput.classList.add('valid')
// 		if (textInput.classList.contains('invalid')) {
// 			textInput.classList.remove('invalid')
// 		}
// 	} else {
// 		if (textInput.classList.contains('valid')) {
// 			textInput.classList.remove('valid')
// 		}
// 		textInput.classList.add('invalid')
// 	}
// })