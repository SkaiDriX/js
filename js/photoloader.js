import {config} from "./config.js";

/**
* Erreur lors d'un fetch vers l'API
*/
const fetchError = (error) => {
	console.log("Erreur lors de la tentative de contact de l'API :" + error);
}

/**
* Conversion en JSON de la réponse de l'API
*/
const conversionJson = (reponse) => {
	if(reponse.ok) return reponse.json();
	return Promise.reject(new Error(reponse.statusText));
}

/**
* Méthode pour récupérer les informations d'une image en particulier dans l'API
* id : numéro de l'image à récupérer
*/
const loadPicture = (id) => {
	return fetch(config.root + config.photos + "/" + id, {
		credentials: 'include'
	}).then(conversionJson).catch(fetchError);
}

/**
* Méthode pour récupérer les informations sur la galerie
*/
const loadRessource = () => {
	return fetch(config.root + config.photos, {
		credentials: 'include'
	}).then(conversionJson).catch(fetchError);	
}

export default {
	loadPicture,
	loadRessource
}