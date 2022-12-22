import { galleryItems } from './gallery-items.js';
// Change code below this line



console.log(galleryItems);

// ? Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

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

console.log(imagesMarkup);
const imagesMarkupString = imagesMarkup.join('')

const galleryEl = document.querySelector('.gallery')

galleryEl.insertAdjacentHTML('beforeend', imagesMarkupString)

// const galleryItemEl = document.querySelector('.gallery__Item')
// const galleryLinksEl = document.querySelectorAll('.gallery__link')
// const galleryImageEl = document.querySelector('.gallery__image')
const bodyEl = document.querySelector('body');
const headEl = document.querySelector('head')

// Підключаю ЛайтБокс
const connectScriptLightBox = '<script src="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"></script>';
const connectStyleLightBox = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css">`;


bodyEl.insertAdjacentHTML('beforeend', connectScriptLightBox)
headEl.insertAdjacentHTML('beforeend', connectStyleLightBox)
// 


function onGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return
  }

  const currentImgOriginalSrc = e.target.dataset.source;
  const currentImgOriginalAlt = e.target.alt;
  console.log(currentImgOriginalSrc);
  console.log(currentImgOriginalAlt);

  basicLightbox.create(`
  <img width="1400" height="900" src="${currentImgOriginalSrc}">
  `).show()


  

}

galleryEl.addEventListener('click', onGalleryClick)







/*
? Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
? Реалізація делегування на div.gallery і отримання url великого зображення.
? Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
? Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
? Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

*/
