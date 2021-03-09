import loader from './photoloader.js';
import { config } from "./config.js";

var gallery = null;

/**
 * Récupération de la galerie
 */
const load = () => {
    return loadPage(config.photos);
}

/**
 * Permet de charger une page en particulier
 */
const loadPage = (uri) => {
    let data = loader.loadRessource(config.root + uri);
    data.then(info_galerie => { gallery = info_galerie; });
    return data;
}

/**
 * On récupère la galerie de la page suivante
 */
const next = () => {
    return loadPage(gallery.links.next.href);
}

/**
 * On récupère la galerie de la page précédente
 */
const prev = () => {
    return loadPage(gallery.links.prev.href);
}

/**
 * On récupère la galerie de la dernière page
 */
const last = () => {
    return loadPage(gallery.links.last.href);
}

/**
 * On récupère la galerie de la première page
 */
const first = () => {
    return loadPage(gallery.links.first.href);
}

const getGallery = () => {
    return document.getElementById("gallery_container");
}
export default {
    load,
    prev,
    next,
    last,
    first,
    getGallery
}