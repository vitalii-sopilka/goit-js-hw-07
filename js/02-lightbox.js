import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

const imageItem = galleryItems.map(({ preview, original, description }) => 
  `<li class="gallery__item"><a class="gallery__link" href='${original}'>
  <img class='gallery__image'
  src='${preview}'
  alt='${description}'
  />
  </a>
  </li>`
).join("");

galleryList.insertAdjacentHTML("beforeend", imageItem);
new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250,
});
