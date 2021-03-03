export default function initAccordion() {
	const acordion = document.querySelectorAll('[data-animate="acordion"] dt');
	const ativoClass = 'ativo';

	function activeAccordion() {
		this.classList.toggle(ativoClass);
		this.nextElementSibling.classList.toggle(ativoClass);
	}

	if (acordion.length) {
		acordion.forEach((item) => {
			item.addEventListener('click', activeAccordion);
		});
	}
}
