// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
import { galleryItems } from './gallery-items';
// Change code below this line

let galleryItemsString = "";
galleryItems.forEach((galleryItem) => {
    galleryItemsString += `
        <li class="gallery__item">
            <a href="${galleryItem.original}" class="gallery__link"><img src="${galleryItem.preview}" class="gallery__image" alt="${galleryItem.description}" /></a>
        </li>
    `;
});

document.querySelector(".gallery").insertAdjacentHTML("afterbegin", galleryItemsString);

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250
});
