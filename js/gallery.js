import loader from './photoloader.js';

/**
* Récupération de la galerie
*/
const load = () => {
	return loader.loadRessource();
}

export default {
	load
}