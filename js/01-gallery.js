import { galleryItems } from './gallery-items.js';

const imgRef = document.querySelector('.gallery');
const previewPhoto = createPreviewPhoto(galleryItems);

imgRef.insertAdjacentHTML('beforeend', previewPhoto);

function createPreviewPhoto(galleryItems) {
    return galleryItems.map(({ preview, original, description })  => {
        return `<li class = "gallery__item">
        <a class = "gallery__link" href = '${original}'>
        <img class = "gallery__image"
        src = '${preview}'
        data-source ='${original}'
        alt = '${description}'
        />
        </a>
        </li>`}).join('');
}

const instance = basicLightbox.create(`<img />`,
    {
        onShow: () => {
        window.addEventListener('keydown', onEscPress);
    },
        onClose: () => {
        window.removeEventListener('keydown', onEscPress);
    },
    })


const onClickPreviewImg = (event) => {
event.preventDefault()
    if (event.target.nodeName !== "IMG") {
    return;
    }
    instance.element().querySelector('img').src = event.target.dataset.source;
    instance.show();
    

}


function onEscPress(event) {
    if (event.code !== 'Escape') return;
    instance.close();
}


imgRef.addEventListener('click', onClickPreviewImg);