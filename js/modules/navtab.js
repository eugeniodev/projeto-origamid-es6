export default class TabNav{
	constructor(menu, content) {
		this.tabMenu = document.querySelectorAll(menu);
		this.tabContent = document.querySelectorAll(content);
		this.activeClass = 'ativo';
	}
	
	// ativa a tab de acordo com o index da mesma

	activateTab(index) {
		this.tabContent.forEach((section) => {
			section.classList.remove(this.activeClass);
		});
		this.tabContent[index].classList.add(this.activeClass);
	}
	
	// adiciona os eventos nos tabs

	addTabNavEvent() {
		this.tabMenu.forEach((itemMenu, index) => {
			// nesse caso nao tem como passar a funcao com callback
			// pois o index se encontar fora do
			// metodo addeventlister.
			// lembrando que item menu e o elemento em se
			// e o index e o numero do item.
			itemMenu.addEventListener('click', () => {
				this.activateTab(index);
			});
		});
	}

	init() {
		if (this.tabMenu.length && this.tabContent.length) {
			// ativar primeiro item
			this.activateTab(0);
			this.addTabNavEvent();
		}
		return this;
	}
}
