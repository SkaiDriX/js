import { config } from "./config.js";
import lightbox from "./lightbox.js"


const display_lightbox = (content) => {
    // Ajout des informations sur la photo
    document.querySelector('#lightbox_title').innerHTML = content.data.photo.titre;
    document.querySelector('#lightbox_full_img').src = config.root + content.data.photo.url.href;
    document.querySelector('#desc').innerHTML = content.data.photo.descr;
    document.querySelector('#taille').innerHTML = content.data.photo.width + "x" + content.data.photo.height;
    document.querySelector('#type').innerHTML = content.data.photo.type;
    document.querySelector('#octet').innerHTML = content.data.photo.size;

    // Ajout des commentaires
    document.querySelector("#comments").innerHTML =
        content.coms.comments.reduce((list, com) =>
            list + `
        <div class="comment">
        <div class="comment-details">
        <div><label>Titre : </label><span class="titre">${com.titre}</span></div>
        <div><label>Pseudo : </label><span class="pseudo">${com.pseudo}</span></div>
        <div><label>Date : </label><span class="date">${com.date}</span></div>
        </div> 
        <div class="content"><label>Contenu : </label><span>${com.content}</span></div> 
        </div>`, "");

    document.querySelector('#lightbox_previous').addEventListener('click', lightbox.prev);
    document.querySelector('#lightbox_next').addEventListener('click', lightbox.next);
    show();
}

const show = () => {
    let lightbox = document.querySelector('#lightbox_container');
    lightbox.classList.add('lightbox_container--visible');
    lightbox.classList.remove('lightbox_container--hidden');
}

const hide = () => {
    let lightbox = document.querySelector('#lightbox_container');
    lightbox.classList.remove('lightbox_container--visible');
    lightbox.classList.add('lightbox_container--hidden');
}

export default {
    display_lightbox,
    show,
    hide
}