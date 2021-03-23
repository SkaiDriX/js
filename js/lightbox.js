import loader from './photoloader.js';
import { config } from "./config.js";
import lightbox_ui from "./lightbox_ui.js"
import gallery from "./gallery.js"
import gallery_ui from './gallery_ui.js';

var vignette = null;

/**
 * Récupération des informations de la photo cliqué
 */
async function load(node) {
    vignette = node.parentNode;
    let data = await loader.loadRessource(config.root + node.getAttribute("data-uri")).then(content => { return content })
    let coms = await loader.loadRessource(config.root + data.links.comments.href).then(content => { return content })
    let object = { data, coms }
    return object
}

/**
 * On récupère la vignette précédente
 */
async function prev() {
    if (vignette.previousElementSibling === null) {
        // Changement de galerie 
        if(gallery.isFirstPage()) {
            await gallery.last().then(gallery_ui.displayGallery); 
        } else {
            await gallery.prev().then(gallery_ui.displayGallery); 
        }

        vignette = document.getElementById("gallery_container").lastElementChild;
        load(vignette.firstElementChild).then(lightbox_ui.display_lightbox);            
    } else {
        load(vignette.previousElementSibling.firstElementChild).then(lightbox_ui.display_lightbox);
    }
}

/**
 * On récupère la vignette suivante
 */
async function next() {
    if (vignette.nextElementSibling === null) {
        // Changement de galerie
        if(gallery.isLastPage()) {
            await gallery.first().then(gallery_ui.displayGallery); 
        } else {
            await gallery.next().then(gallery_ui.displayGallery);
        }

        vignette = document.getElementById("gallery_container").firstElementChild;
        load(vignette.firstElementChild).then(lightbox_ui.display_lightbox);            
    } else {
        load(vignette.nextElementSibling.firstElementChild).then(lightbox_ui.display_lightbox);
    }
}

/**
 * Ajout d'un commentaire
 */
const addComment = () => {
    // Récupération des vars
    let title = document.getElementById("comment-title");
    let message = document.getElementById("comment-content");
    let auteur = document.getElementById("comment-pseudo");

    let json_data = JSON.stringify( {
        titre: title.value,
        content : message.value,
        pseudo : auteur.value
    }) ;

    let url = config.root + vignette.firstElementChild.getAttribute("data-uri") + "/comments";

    fetch(url, {
        method: 'POST',
        body: json_data,
        credentials: 'include',
        headers: {
        'Content-Type': "application/json;charset=utf8"
        }
    }).then(response => response.json()).then(response => {lightbox_ui.ajouterCommentaire(response.comment); });

    // Reset des values
    title.value = '';
    message.value = '';
    auteur.value = '';
}

export default {
    load,
    prev,
    next,
    addComment
}