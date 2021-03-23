import lightbox_ui from './js/lightbox_ui.js';
import gallery from './js/gallery.js';
import lightbox from './js/lightbox.js';
import gallery_ui from './js/gallery_ui.js';

/**
* Gestion de l'évènement "click" sur le bouton de chargement
*/
document.querySelector('#load_gallery').addEventListener('click',  e => {
	if(gallery.getGallery() != null) {
		alert("La galerie est déjà chargée !");
	} else {
		gallery.load().then(gallery_ui.displayGallery);
	}
});

/**
* Gestion de l'évènement "click" sur le bouton de la page suivante
*/
document.querySelector('#next').addEventListener('click',  e => {
	if(gallery.getGallery() == null) {
		alert("Veuillez d'abord charger une galerie !");
	} else {
		gallery.next().then(gallery_ui.displayGallery);
	}
});

/**
* Gestion de l'évènement "click" sur le bouton de la page précédente
*/
document.querySelector('#previous').addEventListener('click', e => {
	if(gallery.getGallery() == null) {
		alert("Veuillez d'abord charger une galerie !");
	} else {
		gallery.prev().then(gallery_ui.displayGallery);
	}
});

/**
* Gestion de l'évènement "click" sur le bouton de la première page
*/
document.querySelector('#first').addEventListener('click', e => {
	if(gallery.getGallery() == null) {
		alert("Veuillez d'abord charger une galerie !");
	} else {
		gallery.first().then(gallery_ui.displayGallery);
	}
});

/**
* Gestion de l'évènement "click" sur le bouton de la dernière page
*/
document.querySelector('#last').addEventListener('click', e => {
	if(gallery.getGallery() == null) {
		alert("Veuillez d'abord charger une galerie !");
	} else {
		gallery.last().then(gallery_ui.displayGallery);
	}
});

/**
* Gestion de l'évènement "click" sur le bouton de fermeture de la ligthbox
*/
document.querySelector('#lightbox_close').addEventListener('click',  e => {
	// On quitte le fullscreen
	if (document.fullscreenElement)
		document.exitFullscreen();	
	
	lightbox_ui.hide();
});

/**
* Gestion de l'évènement "click" sur le bouton NEXT de la ligthbox
*/
document.querySelector('#lightbox_next').addEventListener('click', e => lightbox.next());

/**
* Gestion de l'évènement "click" sur le bouton PRECEDENT de la ligthbox
*/
document.querySelector('#lightbox_previous').addEventListener('click', e => lightbox.prev());

/**
* Gestion de l'évènement "click" sur le bouton AJOUT COMMENTAIRE de la ligthbox
*/
document.querySelector('#comment-add-button').addEventListener('click', e => lightbox.addComment());
