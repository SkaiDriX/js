import gallery_ui from './js/gallery_ui.js';
import gallery from './js/gallery.js';

/**
* Gestion de l'évènement "click" sur le bouton de chargement
*/
document.querySelector('#load_gallery')
	.addEventListener('click',  e => {
		// Chargement et affichage de la galerie
		gallery.load().then(gallery_ui.displayGallery);
	});
