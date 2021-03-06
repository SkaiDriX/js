import gallery_ui from './js/gallery_ui.js';
import lightbox_ui from './js/lightbox_ui.js';
import gallery from './js/gallery.js';

/**
* Gestion de l'évènement "click" sur le bouton de chargement
*/
document.querySelector('#load_gallery').addEventListener('click',  e => {
	// Chargement et affichage de la galerie
	gallery.load().then(gallery_ui.displayGallery);
});

/**
* Gestion de l'évènement "click" sur le bouton de fermeture de la ligthbox
*/
document.querySelector('#lightbox_close').addEventListener('click',  e => {
		lightbox_ui.hide();
});

/**
* Gestion de l'évènement "click" sur le bouton de la page suivante
*/
document.querySelector('#next').addEventListener('click',  e => {
		gallery.next().then(gallery_ui.displayGallery);
});

/**
* Gestion de l'évènement "click" sur le bouton de la page précédente
*/
document.querySelector('#previous').addEventListener('click',  e => {
		gallery.prev().then(gallery_ui.displayGallery);
});

/**
* Gestion de l'évènement "click" sur le bouton de la première page
*/
document.querySelector('#first').addEventListener('click',  e => {
		gallery.first().then(gallery_ui.displayGallery);
});

/**
* Gestion de l'évènement "click" sur le bouton de la dernière page
*/
document.querySelector('#last').addEventListener('click',  e => {
		gallery.last().then(gallery_ui.displayGallery);
});