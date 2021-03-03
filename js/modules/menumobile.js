import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
	const menuButton = document.querySelector('[data-menu="button"]');
	const menuList = document.querySelector('[data-menu="list"]');
	const events = ['touchstart', 'click'];

	function openMenu() {
		menuButton.classList.add('ativo');
		menuList.classList.add('ativo');
		outsideClick(menuList, events, () => {
			menuList.classList.remove('ativo');
			menuButton.classList.remove('ativo');
		});
	}

	if (menuButton) {
		events.forEach((userEvent) => {
			menuButton.addEventListener(userEvent, openMenu);
		});
	}
}
