import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {

	// cria a div contendo a informação
	// com o total de animais
	function createAnimal(animal) {
		const div = document.createElement('div');
		div.classList.add('numero-animal');
		div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
		return div;
	}

	// preenche cada animal no dom 
	const numeroGrid = document.querySelector(target);
	function preencherAnimais(animal) {
		const divAnimal = createAnimal(animal);
		numeroGrid.appendChild(divAnimal);
	}

	// anima os numeros de cada animal
	function animaAnimaisNumero() {
		const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
		animaNumeros.init();
	}

	// puxa os animais atravez de um arquivo json 
	// e cria cada animal utilizadno o create animal
	async function criarAnimais() {
		try {
			// fetch e espera a resposta 
			const animaisResponse = await fetch(url);
			// transforma a resposta em json
			const animaisJSON = await animaisResponse.json();
			// apos a transformaçãoes de jason, ativa as funções
			// para preencher e animar os numeros
			animaisJSON.forEach(animal => preencherAnimais(animal));
			animaAnimaisNumero();
		} catch (err) {
			console.log(err);
		}
	}

	return criarAnimais();
}
