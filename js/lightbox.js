import loader from './photoloader.js';
import { config } from "./config.js";
import lightbox_ui from "./lightbox_ui.js"
import gallery from "./gallery.js"
import gallery_ui from './gallery_ui.js';

var vignette = null;
/**
 * Récupération des informations de la photo cliqué
 */
const load = (node) => {
    vignette = node.parentNode;
    return loader.loadRessource(config.root + node.getAttribute("data-uri"))
}

/**
 * On récupère la vignette précédente
 */
async function prev () {
    if (vignette.previousElementSibling === null) {
        let p = await gallery.prev(); // Changement de galerie
		
		gallery_ui.displayGallery(p);
		vignette = document.getElementById("gallery_container").lastElementChild;

		return load(vignette.firstElementChild).then(lightbox_ui.display_lightbox);
    } else {
        return load(vignette.previousElementSibling.firstElementChild).then(lightbox_ui.display_lightbox);
    }
}

/**
 * On récupère la vignette suivante
 */
async function next () {
    if (vignette.nextElementSibling === null) {
        let p = await gallery.next(); // Changement de galerie
		gallery_ui.displayGallery(p);
		
		vignette = document.getElementById("gallery_container").firstElementChild;

		return load(vignette.firstElementChild).then(lightbox_ui.display_lightbox);
    } else {
        return load(vignette.nextElementSibling.firstElementChild).then(lightbox_ui.display_lightbox);
    }
}

export default {
    load,
    prev,
    next
}