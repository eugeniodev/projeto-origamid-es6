import outsideClick from './outsideclick.js';

export default function initdropDown() {
	const dropDownMenu = document.querySelectorAll('[data-dropdown]');
	// console.log(dropclickMenu);
	const typeEvent = ['touchstart', 'click'];

	function handleClick(event) {
		event.preventDefault();
		this.classList.toggle('ativo');

		outsideClick(this, typeEvent, () => {
			this.classList.remove('ativo');
			// console.log('funcionando');
		});
	}

	dropDownMenu.forEach((item) => {
		typeEvent.forEach((userEvent) => {
			item.addEventListener(userEvent, handleClick);
		});
	});
}
