import loader from './photoloader.js';
import { config } from "./config.js";
import lightbox_ui from "./lightbox_ui.js"

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
    if (vignette.previousElementSibling === null)
        return load(vignette.parentNode.lastElementChild.firstElementChild).then(lightbox_ui.display_lightbox)
    else
        return load(vignette.previousElementSibling.firstElementChild).then(lightbox_ui.display_lightbox)
}

/**
 * On récupère la vignette suivante
 */
const next = () => {
    if (vignette.nextElementSibling === null)
        return load(vignette.parentNode.firstElementChild.firstElementChild).then(lightbox_ui.display_lightbox)
    else
        return load(vignette.nextElementSibling.firstElementChild).then(lightbox_ui.display_lightbox)
}

export default {
    load,
    prev,
    next
}