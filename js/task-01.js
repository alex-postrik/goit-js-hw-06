const categoryEL  = document.querySelector('#categories');
console.log(`Number of categories: ${categoryEL.children.length}`);

const itemEl = document.querySelectorAll('.item');
itemEl.forEach(item =>  {
    const title = item.querySelector('h2').textContent;
    const count = item.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${count}`);
});
// =================================================================
// const itemRRef = document.querySelector(".item");

