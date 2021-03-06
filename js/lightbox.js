import loader from './photoloader.js';
import {config} from "./config.js";

/**
* Récupération des informations de la photo cliqué
*/
const load = (node) => {
	return loader.loadRessource(config.root + node.getAttribute("data-uri"));
}

export default {
	load
}