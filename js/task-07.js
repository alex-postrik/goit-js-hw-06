// ====================================================
const ref = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text')
};
// ====================================================
ref.input.addEventListener('input', () => {
    ref.text.style.fontSize = ref.input.value + 'px';
});
// ====================================================
// ref.input.addEventListener('input', fontSizeControl);

// function fontSizeControl(evt) {
// const size = ref.input.value;
//     ref.text.style.fontSize = size + 'px';
// };

// ====================================================
