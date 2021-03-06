import {config} from "./config.js";
import lightbox from "./lightbox.js";
import lightbox_ui from "./lightbox_ui.js";

/**
* Méthode pour récupérer et afficher les images dans la galerie
*/
const displayGallery = (gallery) => {	
	let container = document.querySelector('#gallery_container');
	container.innerHTML = 
		gallery.photos.reduce( (list, vignette) =>
		list +
		`<div class="vignette">
			<img data-img="${vignette.photo.original.href}" data-uri="${vignette.links.self.href}" src="${config.root+vignette.photo.thumbnail.href}">
		</div>`
		,"");		

	// Événements pour la lightbox
	container.querySelectorAll(".vignette").forEach(v => {
		v.addEventListener('click', e => {
			lightbox.load(e.target).then(lightbox_ui.display_lightbox);
		});
	});
}

export default {
	displayGallery
}