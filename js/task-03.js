const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listEl = document.querySelector('.gallery');

const markup = images.map(({ url, alt }) => `<li class="gallery__item">
<img class="gallery__image" src="${url}" alt="${alt}" width="500">
</li>`) .join('');
listEl.insertAdjacentHTML('afterbegin', markup);

// ===============================================
// const imageProduktCard = image => {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('gallery__item')
//   const imageEl = document.createElement('img');
//   imageEl.src = image.url;
//   imageEl.alt = image.alt;
//   imageEl.width = 350;

//   itemEl.append(imageEl);
//   return itemEl;
// };
// const elements = images.map(imageProduktCard);
// listEl.append(...elements);

