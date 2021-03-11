export default class ScrollAnima {

	constructor(section) {
		this.section = document.querySelectorAll(section);
		this.windowMetade = window.innerHeight * 0.6;
		this.animaScroll = this.animaScroll.bind(this);
	}

	animaScroll() {
		this.section.forEach((section) => {
			const sectionTop = section.getBoundingClientRect().top;
			const sectionVision = (sectionTop - this.windowMetade) < 0;
			if (sectionVision) {
				section.classList.add('ativo');
			}
		});
	}

	init() {
		this.animaScroll();
		window.addEventListener('scroll', this.animaScroll);
	}
}
