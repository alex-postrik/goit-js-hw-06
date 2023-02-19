function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const chaneColorBtn = document.querySelector(".change-color");
const spanColorName = document.querySelector(".color");

chaneColorBtn.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor(evt) {
  evt.preventDefault();
  spanColorName.textContent = document.body.style.background =
    getRandomHexColor();
}