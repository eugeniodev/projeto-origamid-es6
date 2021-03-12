import debounce from './debounce.js';

export default class ScrollAnima {

	constructor(section) {
		this.section = document.querySelectorAll(section);
		this.windowMetade = window.innerHeight * 0.6;
		this.checkDistance = debounce(this.checkDistance.bind(this), 50);
	}

	// pega a distância de cada item em relação ao
	// topo do site
	getDistance() {
		this.distance = [...this.section].map((section) => {
			const offset = section.offsetTop;
			return {
				element: section,
				offset: Math.floor( offset - this.windowMetade),
			};
		});
	}
	
	// verifica a distância em cada objeto
	// em relação ao scroll do site
	checkDistance() {
		this.distance.forEach((section) => {
			if (window.pageYOffset > section.offset) {
				section.element.classList.add('ativo');
			} else if (section.element.classList.contains('ativo')){
				section.element.classList.remove('ativo');
			};
		});
	}
	
	init() {
		if (this.section.length){
			this.getDistance();
			this.checkDistance();
			window.addEventListener('scroll', this.checkDistance);
		}
		return this;
	}
	
	// remove o evento de scroll 
	stop() {
		window.removeEventListener('scroll', this.checkDistance);
	}
}
