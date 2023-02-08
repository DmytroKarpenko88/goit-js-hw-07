import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryCards(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onImageClick);

function createGalleryCards(items) {
  return items
    .map(
      ({ description, original, preview }) => `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        
      />
    </a>
  </div>  `
    )
    .join('');
}

function onImageClick(event) {
  event.preventDefault();
  const link = event.target.dataset.source;

  const instance = basicLightbox.create(`
      <img src="${link}" width="800" height="600">
  `);

  instance.show();

  galleryContainer.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
}
