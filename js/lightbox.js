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
const prev = () => {
    if (vignette.previousElementSibling === null) {
        let p = gallery.prev()
        p.then(gallery_ui.displayGallery)
        p.then(info => loader.loadRessource(config.root + info.photos[info.size - 1].links.self.href).then(lightbox_ui.display_lightbox))
        p.then(vignette = document.getElementById("gallery_container").lastChild.firstElementChild)

        console.log(vignette)
        console.log(vignette.parentNode)
    } else {
        return load(vignette.previousElementSibling.firstElementChild).then(lightbox_ui.display_lightbox)
    }
}

/**
 * On récupère la vignette suivante
 */
const next = () => {
    if (vignette.nextElementSibling === null) {
        let p = gallery.next()
        p.then(gallery_ui.displayGallery)
        p.then(info => loader.loadRessource(config.root + info.photos[0].links.self.href).then(lightbox_ui.display_lightbox))
        p.then(console.log(document.getElementById("gallery_container").lastChild.firstElementChild))
    } else {
        return load(vignette.nextElementSibling.firstElementChild).then(lightbox_ui.display_lightbox)
    }
}

export default {
    load,
    prev,
    next
}