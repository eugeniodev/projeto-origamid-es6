export default function initModal() {
	const container = document.querySelector('[data-modal="conatiner"]');
	const closeButtom = document.querySelector('[data-modal="fechar"]');
	const openButtom = document.querySelector('[data-modal="abrir"]');

	function toogleModal(event) {
		event.preventDefault();
		container.classList.toggle('ativo');
	}
	function closeArea(event) {
		if (event.target === this) {
			toogleModal(event);
		}
	}
	container.addEventListener('click', closeArea);
	openButtom.addEventListener('click', toogleModal);
	closeButtom.addEventListener('click', toogleModal);
}
