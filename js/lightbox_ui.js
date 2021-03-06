import loader from './photoloader.js';
import {config} from "./config.js";

const display_lightbox = (data) => {
	document.querySelector('#lightbox_title').innerHTML = data.photo.titre;
	document.querySelector('#lightbox_full_img').src = config.root + data.photo.url.href;
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