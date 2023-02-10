const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const inredientEl = document.querySelector('#ingredients');

const itemEl = ingredients.map(ingredient => {
  const itemListEl = document.createElement('li');
  itemListEl.textContent = ingredient;
   // console.log(itemListEl.textContent = ingredient);
  itemListEl.classList.add('itemListEl');
  return itemListEl;
});
inredientEl.append(...itemEl);
console.log(inredientEl);