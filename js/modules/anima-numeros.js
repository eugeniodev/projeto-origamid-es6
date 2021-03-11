export default class AnimaNumeros {

	constructor(numeros, observaTarget, observeClass) {
		this.numeros = document.querySelectorAll(numeros);
		this.observaTarget = document.querySelector(observaTarget);
		this.observeClass = observeClass;
		// bind o this do objeto ao callback da mutação
		this.handleMutation = this.handleMutation.bind(this);
	}

	// recebe um elemento do dom, com numero em seu texto
	// incremmenta a partir de 0 até o número final
	static incrementarNumber(numero) {
		// o simbolo de + transforma um string em numero
		const total = +numero.innerText;
		const incremento = Math.floor(total / 140);
		let start = 0;
		const timer = setInterval(() => {
			start += incremento;
			numero.innerText = start;
			if (start > total) {
				numero.innerText = total;
				clearInterval(timer);
			}
		}, 10 * Math.random());
	}

	// ativa incrementar número para cada
	// número selecionado do dom
	animaNumeros() {
		this.numeros.forEach((numero) => {
			this.constructor.incrementarNumber(numero);
		});
	}

	// função que ocorre quando a mutação acontece
	handleMutation(mutation) {
		if (mutation[0].target.classList.contains(this.observeClass)) {
			this.observer.disconnect();
			this.animaNumeros();
		}
	}

	// adciona o MutationObserver para verificar 
	// quando a classe ativo e adicionado ao elemnto target 
	addMutationObserver() {
		this.observer = new MutationObserver(this.handleMutation);
		this.observer.observe(this.observaTarget, { attributes: true });
	}

	init() {
		if (this.numeros.length && this.observaTarget) {
			this.addMutationObserver();
		}
		return this;
	}
}
