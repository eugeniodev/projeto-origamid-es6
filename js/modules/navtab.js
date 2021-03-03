export default function initTabMenu() {
	const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
	const tabcontent = document.querySelectorAll('[data-tab="content"] section');

	function activateTab(index) {
		tabcontent.forEach((section) => {
			section.classList.remove('ativo');
		});
		tabcontent[index].classList.add('ativo');
	}

	if (tabMenu.length && tabcontent.length) {
		tabcontent[0].classList.add('ativo');

		tabMenu.forEach((itemMenu, index) => {
		//  nesse caso nao tem como passar a funcao com callback
		// pois o index se encontar fora do
		// metodo addeventlister.
		// lembrando que item menu e o elemento em se
		// e o index e o numero do item.
			itemMenu.addEventListener('click', () => {
				activateTab(index);
			});
		});
	}
}
