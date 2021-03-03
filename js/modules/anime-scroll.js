export default function initScroll() {
	const scrollSection = document.querySelectorAll('[data-anime="scroll"]');

	const windowMetade = window.innerHeight * 0.6;

	function animaScroll() {
		scrollSection.forEach((section) => {
			const sectionTop = section.getBoundingClientRect().top;
			const sectionVision = (sectionTop - windowMetade) < 0;
			if (sectionVision) {
				section.classList.add('ativo');
			}
		});
	}

	if (scrollSection.length) {
		animaScroll();
		window.addEventListener('scroll', animaScroll);
	}
}
