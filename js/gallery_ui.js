import { config } from "./config.js";
import lightbox from "./lightbox.js";
import lightbox_ui from "./lightbox_ui.js";
import gallery from "./gallery.js";

/**
 * Méthode pour récupérer et afficher les images dans la galerie
 */
const displayGallery = (data) => {
    let container = document.querySelector('#gallery_container');
    container.innerHTML =
        data.photos.reduce((list, vignette) =>
            list +
            `<div class="vignette">
			<img data-img="${vignette.photo.original.href}" data-uri="${vignette.links.self.href}" src="${config.root+vignette.photo.thumbnail.href}">
		</div>`, "");

    // Événements pour la lightbox
    container.querySelectorAll(".vignette").forEach(v => {
        v.addEventListener('click', e => {
            lightbox.load(e.target).then(lightbox_ui.display_lightbox);
        });
    });

    // Reset des boutons
    document.querySelector('#first').disabled = false;
    document.querySelector('#previous').disabled = false;    
    document.querySelector('#next').disabled = false;
    document.querySelector('#last').disabled = false;

    // On bloque les boutons selon la position dans la galerie
    if(gallery.isFirstPage())
    {
        document.querySelector('#first').disabled = true;
        document.querySelector('#previous').disabled = true;
    }

    if(gallery.isLastPage())
    {
        document.querySelector('#next').disabled = true;
        document.querySelector('#last').disabled = true;
    }
}

export default {
    displayGallery
}