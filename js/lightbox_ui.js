import { config } from "./config.js";

let isActive = false;

const display_lightbox = (content) => {
    // Ajout des informations sur la photo
    document.querySelector('#lightbox_title').innerHTML = content.data.photo.titre;
    document.querySelector('#lightbox_full_img').src = config.root + content.data.photo.url.href;
    document.querySelector('#desc').innerHTML = content.data.photo.descr;
    document.querySelector('#taille').innerHTML = content.data.photo.width + "x" + content.data.photo.height;
    document.querySelector('#type').innerHTML = content.data.photo.type;
    document.querySelector('#octet').innerHTML = content.data.photo.size;

    // Vidage de la zone des commentaires
    document.querySelector("#comments").innerHTML = '';

    // Ajout des commentaires
    content.coms.comments.forEach(element => ajouterCommentaire(element));

    if(!isActive)
        show();        
}

const ajouterCommentaire = (element) => {
    let div = document.createElement('div');
    div.classList.add("comment");
    div.innerHTML = `
        <div class="comment-details">
        <div><label>Titre : </label><span class="titre">${element.titre}</span></div>
        <div><label>Pseudo : </label><span class="pseudo">${element.pseudo}</span></div>
        <div><label>Date : </label><span class="date">${element.date}</span></div>
        </div> 
        <div class="content"><label>Contenu : </label><span>${element.content}</span></div> 
    `;

    document.querySelector("#comments").prepend(div);
}

const show = () => {
    let lightbox = document.querySelector('#lightbox_container');
    lightbox.classList.add('lightbox_container--visible');
    lightbox.classList.remove('lightbox_container--hidden');   
    
    // Full Screen
    document.documentElement.requestFullscreen();

    isActive = true;
}

const hide = () => {
    let lightbox = document.querySelector('#lightbox_container');
    lightbox.classList.remove('lightbox_container--visible');
    lightbox.classList.add('lightbox_container--hidden');

    isActive = false;
}

export default {
    display_lightbox,
    show,
    hide,
    ajouterCommentaire
}