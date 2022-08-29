import { galleryItems } from './gallery-items.js';



const gallery = document.querySelector('.gallery');

const markup = galleryItems.map((image) => 
`<div class="gallery__item">
  <a class="gallery__link" href=${image.original}>
  <img
      class="gallery__image"
      src=${image.preview}
      data-source=${image.original}
      alt=${image.description}
    />
  </a>
</div>`).join("");

gallery.innerHTML = markup;

gallery.addEventListener("click", imgClick);
function imgClick(event) {
  
  event.preventDefault();

  if (event.target.classList.contains('gallery')) return;

  const bigImage = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src=${bigImage} width="800" height="600">
`);

instance.show()
}



