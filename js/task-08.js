const inputEl = document.querySelector("form.login-form");
// =======================================================
inputEl.addEventListener("submit", auditSubmit);
// =======================================================

function auditSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Будь ласка заповніть всі поля!");
  }

  console.table({ email: email.value, Password: password.value });
  event.currentTarget.reset();
}
