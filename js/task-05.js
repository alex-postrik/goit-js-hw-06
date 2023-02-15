
const ref = {
input: document.querySelector('#name-input'),
span: document.querySelector('#name-output')
}
// ===================================================
ref.input.addEventListener('input', onInputChange);
// ===================================================
function onInputChange(event) {
  ref.span.textContent = event.target.value;
  if (event.target.value === "") {
   ref.span.textContent = 'Anonymous';
  }
};

//===================================================

// ref.input.addEventListener('input', event => {
//   if (event.target.value !== "") {
//       ref.span.textContent = "Anonymous";
//     }
//   ref.span.textContent = event.target.value;
// });