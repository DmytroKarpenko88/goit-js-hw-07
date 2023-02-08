import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryCards(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onImageClick);

const lightbox = new SimpleLightbox('.gallery a', {
  animationSlide: false,
  captionsData: 'alt',
  captionDelay: 500,
});

function createGalleryCards(items) {
  return items
    .map(
      ({
        description,
        original,
        preview,
      }) => `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a> `
    )
    .join('');
}

function onImageClick(event) {
  event.preventDefault();
}
