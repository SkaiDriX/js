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
* Méthode pour récupérer les informations sur la galerie
*/
const loadRessource = (uri) => {
	return fetch(uri, {
		credentials: 'include'
	}).then(conversionJson).catch(fetchError);	
}

export default {
	loadRessource
}