import outsideClick from './outsideclick.js';

export default class DropDown {
	constructor(element, events) {
		this.dropDownMenu = document.querySelectorAll(element);
		
		// define touchstar e click como argumentos padrao
		// de events caso nao defina
		if (events === undefined) {
			this.typeEvent = ['touchstart', 'click'];
		} else {
			this.typeEvent = events;
		}
		this.activeClass = 'ativo';
		this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
	}
	
	// ativa o dropdowmenu e adiciona
	// a funcao que observa o clique fora dele
	activeDropDownMenu(event) {
		event.preventDefault();
		const element = event.currentTarget;

		element.classList.toggle(this.activeClass);
		outsideClick(element, this.typeEvent, () => {
			element.classList.remove(this.activeClass);
		});
	}

	// adiciona os eventos ao dropdownmenu
	addDropDownMenuEvent() { 
		this.dropDownMenu.forEach((item) => {
			this.typeEvent.forEach((userEvent) => {
				item.addEventListener(userEvent, this.handleClick);
			});
		});
	}
	
	init() {
		if (this.dropDownMenu.length) {
			this.addDropDownMenuEvent();
		}
		return this;
	}
}
