import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesMarkup = galleryItems.map(({ preview, original, description }) => {
  return `<div class="gallery__item">
    <a class="gallery__link" href = "${original}">
      <img
        class="gallery__image"
        src="${preview}" 
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
})
const imagesMarkupString = imagesMarkup.join('')

const galleryEl = document.querySelector('.gallery')

galleryEl.insertAdjacentHTML('beforeend', imagesMarkupString)

function onGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return
  }

  const currentImgOriginalSrc = e.target.dataset.source;
  const currentImgOriginalAlt = e.target.alt;

  const instance = basicLightbox.create(`
  <img width="1400" height="900" src="${currentImgOriginalSrc}" alt="${currentImgOriginalAlt}">
  `, {
  onShow: instance => {
      window.addEventListener('keydown', keyEscape)
  },
  onClose: instance => {
      window.removeEventListener('keydown', keyEscape)
    }
  })

  instance.show()

  function keyEscape(evt) {
    if (evt.code === "Escape") {
      console.log('ESCAPE!!!');
      instance.close()
      return
    }
    console.log(evt.code ,"NOT ESCAPE!!");
  }
}


galleryEl.addEventListener('click', onGalleryClick)

