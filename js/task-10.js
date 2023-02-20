function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// const ref = {
//   divControls: document.querySelector("#controls"),
//   divBoxes: document.querySelector("#boxes"),
// };
// const div = createElement("div");
// div.style.width = "30";
// div.style.height = "30";
// div.style.backround = getRandomHexColor();

// ref.divControls.addEventListener("click", createBoxes);

// function createBoxes(amount) {
//   amount.prevenrtDefault();
// }

const ref = {
    boxesRef: document.querySelector("#boxes"),
    inputRef: document.querySelector("input"),
    buttonRef: document.querySelectorAll("button"),
    buttonCreateRef: document.querySelector("[data-create]"),
    buttonDestroyeRef: document.querySelector("[data-destroy]"),
};
// console.log(boxesRef);
// console.log(inputRef);
// console.log(buttonRef);

// ref.buttonCreateRef.addEventListener("click", createBoxes);

const createBoxes = (amount) => {
    let defaultSize = 30;
    const elemDiv = [];
    for (let i = 1; i <= amount; i += 1) {

        const divEl = document.createElement("div");
        divEl.style.backgroundColor = getRandomHexColor();
        divEl.style.width = 30 + "px";
        divEl.style.height = 30 + "px";

        elements.push(divEl);
    };

    ref.boxesRef.append(...elemDiv);
};

ref.buttonCreateRef.addEventListener("click", createBoxes);

// const destroyBoxes = () => {
//   ref.boxesRef.innerHTML = "";
// };
// =======================================================
// const createBoxes = (amount) => {
//   let defaultSize = 30;
//   const arrayDiv = [];

//   for (let i = 0; i < amount; i++) {
//     let randomColor = getRandomHexColor();
//     defaultSize += 10;

//     const newDivEl = document.createElement("div");
//     newDivEl.style.margin = "10px";
//     newDivEl.style.width = defaultSize + "px";
//     newDivEl.style.height = defaultSize + "px";
//     newDivEl.style.backgroundColor = randomColor;

//     arrayDiv.push(newDivEl);
//   }
//   return insertDivBoxesEl.append(...arrayDiv);
// };
// const onCreateBoxes = (event) => createBoxes(inputEl.value);
// const onDestroyBoxes = (event) => (
//   (insertDivBoxesEl.innerHTML = ""), (inputEl.value = "")
// );

// ref.buttonCreateRef.addEventListener("click", onCreateBoxes);
// ref.buttonDestroyeRef.addEventListener("click", onDestroyBoxes);