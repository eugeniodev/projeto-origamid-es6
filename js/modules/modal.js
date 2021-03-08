export default class Modal{

	constructor(buttonAbrir, buttonFechar, containerModal) {
		this.container = document.querySelector(containerModal);
		this.buttonAbrir = document.querySelector(buttonAbrir);
		this.buttonFechar = document.querySelector(buttonFechar);

		// bind this ao callback para
		// fazer referencia ao obj da class

		this.toogleModal = this.toogleModal.bind(this);
		this.cliqueForaModal = this.cliqueForaModal.bind(this);
	}
	
	// abre ou fecha o modal

	toogleModal(event) {
		event.preventDefault();
		this.container.classList.toggle('ativo');
	}

	// fecha modal ao clicar do lado de fora
	
	cliqueForaModal(event) {
		if (event.target === this.container) {
			this.toogleModal(event);
			
		}
	}

	// adiciona os eventos aos elementos do modal

	addModalEvent() {
		this.container.addEventListener('click', this.cliqueForaModal);
		this.buttonFechar.addEventListener('click', this.toogleModal);
		this.buttonAbrir.addEventListener('click', this.toogleModal);
	}

	init() {
		if (this.container && this.buttonAbrir && this.buttonFechar){
			this.addModalEvent();
		}

		return this;
	}
}
