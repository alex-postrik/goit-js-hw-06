const inputEl = document.querySelector('#validation-input');
// =========================================================

// inputEl.addEventListener("blur", onInputBlur);

// =========================================================

// const validInput = document.querySelector("#validation-input");

// inputEl.onInputBlur("blur", (evt) => {
//   if (evt.target.value.length == inputEl.getAttribute("data-length")) {
//     inputEl.classList.add("invalid");
//   } else {
//     inputEl.classList.remove("invalid");
//     inputEl.classList.add("valid");
//   }
// });
// ========================================================
inputEl.addEventListener("blur", (evt) => {
  if (evt.target.value.length === inputEl.getAttribute("data-length")) {
    inputEl.classList.add("valid");
    if (inputEl.classList.contains("invalid")) {
      inputEl.classList.remove("invalid");
    }
  } else {
    if (inputEl.classList.contains("valid")) {
      inputEl.classList.remove("valid");
    }
    inputEl.classList.add("invalid");
  }
});
