import {config} from "./config.js";

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
}

export default {
	displayGallery
}