const inputEl = document.querySelector('#validation-input');
// =========================================================

// inputEl.addEventListener("blur", (evt) => {
//   if (inputEl.getAttribute("data-length") === evt.target.value.length) {
//     inputEl.classList.add("valid");
//     inputEl.classList.remove("invalid");
//   }
//   if (inputEl.getAttribute("data-length") !== evt.target.value.length) {
//     inputEl.classList.add("invalid");
//     inputEl.classList.remove("valid");
//   }
// });
// ========================================================
inputEl.addEventListener("blur", () => {
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});
