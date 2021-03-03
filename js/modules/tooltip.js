export default function initTooltip() {
	const toolTips = document.querySelectorAll('[data-toolTip]');
	// console.log(toolTips);

	const onMouseMove = {
		handleEvent(event) {
			this.toolTipBox.style.top = `${event.pageY + 20}px`;
			this.toolTipBox.style.left = `${event.pageX + 20}px`;
		},
	};

	// handleEvent é necessario para que funcione
	const onMouseLeave = {
		handleEvent() {
			this.toolTipBox.remove();
			this.element.removeEventListener('mouseleave', onMouseLeave);
			this.element.removeEventListener('mousemove', onMouseMove);
		},
	};

	function criarTooltipBox(element) {
		const tooTipBox = document.createElement('div');
		const text = element.getAttribute('area-lebal');
		tooTipBox.classList.add('tooltip');
		tooTipBox.innerText = text;
		document.body.appendChild(tooTipBox);
		return tooTipBox;
	}

	function onMouseOver() {
		const toolTipBox = criarTooltipBox(this);
		onMouseMove.toolTipBox = toolTipBox;
		this.addEventListener('mousemove', onMouseMove);

		onMouseLeave.toolTipBox = toolTipBox;
		onMouseLeave.element = this;
		// console.log(toolTipBox);
		// function onMouseLeave(){
		//     toolTipBox.remove();
		// }
		this.addEventListener('mouseleave', onMouseLeave);
	}
	toolTips.forEach((item) => {
		item.addEventListener('mouseover', onMouseOver);
	});
}
