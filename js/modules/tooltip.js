export default class Tooltip {

	constructor(containerBox) {
		this.toolTips = document.querySelectorAll(containerBox);

		// baind do objeto da classe aos callbacks
		this.onMouseMove = this.onMouseMove.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
		this.onMouseOver = this.onMouseOver.bind(this);
	}
	
	// move a tooltip com base em seus estilos
	// de acordo com a posicao do mouse
	onMouseMove(event) {
		this.toolTipBox.style.top = `${event.pageY + 20}px`;
		if (event.pageX + 190 > window.innerWidth) { 
			this.toolTipBox.style.left = `${event.pageX - 160}px`;
		} else {
			this.toolTipBox.style.left = `${event.pageX + 20}px`;
		}
	}

	// remove a tooltip e os eventos de mosemove e mauseleave
	onMouseLeave({ currentTarget }) {
		this.toolTipBox.remove();
		currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
		currentTarget.removeEventListener('mousemove', this.onMouseMove);
	}
	
	// criar a tooltipbox e colocar no body 
	criarTooltipBox(element) {
		const toolTipBox = document.createElement('div');
		const text = element.getAttribute('area-lebal');
		toolTipBox.classList.add('tooltip');
		toolTipBox.innerText = text;
		document.body.appendChild(toolTipBox);
		this.toolTipBox = toolTipBox;
		return this.toolTipBox;
	}

	// cria a tooltip e adiciona os eventos de mousemuve e mouseleave
	onMouseOver({ currentTarget }) {
		this.criarTooltipBox(currentTarget);
		currentTarget.addEventListener('mousemove', this.onMouseMove);
		currentTarget.addEventListener('mouseleave', this.onMouseLeave);
	}

	// adiciona os eventos de mpuseover a cada tooltip
	addTooltipsEvent() {
		this.toolTips.forEach((item) => {
			item.addEventListener('mouseover', this.onMouseOver);
		});
	}

	init() {
		if (this.toolTips.length) {
			this.addTooltipsEvent();
		}
		return this;
	}

}
