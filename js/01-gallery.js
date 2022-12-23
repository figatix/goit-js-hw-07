import { galleryItems } from './gallery-items.js';
// Change code below this line


/*
? Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
? Реалізація делегування на div.gallery і отримання url великого зображення.
? Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
? Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
? Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

*/


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

// Підключаю ЛайтБокс
// const bodyEl = document.querySelector('body');
// const headEl = document.querySelector('head')

// const connectScriptLightBox = '<script src="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"></script>';
// const connectStyleLightBox = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css">`;


// bodyEl.insertAdjacentHTML('beforeend', connectScriptLightBox)
// headEl.insertAdjacentHTML('beforeend', connectStyleLightBox)
// 


function onGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return
  }

  const currentImgOriginalSrc = e.target.dataset.source;
  const currentImgOriginalAlt = e.target.alt;

  const instance = basicLightbox.create(`
  <img width="1400" height="900" src="${currentImgOriginalSrc}" alt="${currentImgOriginalAlt}">
  `)

  instance.show(() => {
    window.addEventListener('keydown', keyEscape)
  })

  function keyEscape(evt) {
    if (evt.code === "Escape") {
      console.log('ESCAPE!!!');
      instance.close(() => {
        window.removeEventListener('keydown', keyEscape)
      })
      return
    }
    console.log("NOT ESCAPE!!");
  }

}

galleryEl.addEventListener('click', onGalleryClick)


