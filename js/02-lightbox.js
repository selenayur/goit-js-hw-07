import { galleryItems } from './gallery-items.js';


const imgRef = document.querySelector('.gallery');
const previewPhoto = createPreviewPhoto(galleryItems);


imgRef.insertAdjacentHTML('beforeend', previewPhoto);

function createPreviewPhoto(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class = "gallery__item">
                <a class = "gallery__link" href = ${original}>
                <img class = "gallery__image" src = ${preview} alt = ${description} />
                </a>
                </li>`}).join('');
}


var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: '300',
});