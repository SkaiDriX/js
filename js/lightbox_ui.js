import { config } from "./config.js";
import lightbox from "./lightbox.js"


const display_lightbox = (data) => {
    document.querySelector('#lightbox_title').innerHTML = data.photo.titre;
    document.querySelector('#lightbox_full_img').src = config.root + data.photo.url.href;
    document.querySelector('#desc').innerHTML = data.photo.descr;
    document.querySelector('#taille').innerHTML = data.photo.width + "x" + data.photo.height;
    document.querySelector('#type').innerHTML = data.photo.type;
    document.querySelector('#octet').innerHTML = data.photo.size;
	
    document.querySelector('#lightbox_previous').addEventListener('click', lightbox.prev);
    document.querySelector('#lightbox_next').addEventListener('click', lightbox.next);
    show();
}

const show = () => {
    let lightbox = document.querySelector('#lightbox_container');
    lightbox.classList.add('lightbox_container--visible');
    lightbox.classList.remove('lightbox_container--hidden');
}

const hide = () => {
    let lightbox = document.querySelector('#lightbox_container');
    lightbox.classList.remove('lightbox_container--visible');
    lightbox.classList.add('lightbox_container--hidden');
}

export default {
    display_lightbox,
    show,
    hide
}