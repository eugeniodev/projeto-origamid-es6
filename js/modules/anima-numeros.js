export default function initAnimaNumeros() {
	function animaNumeros() {
		const anima = document.querySelectorAll('[data-numero]');

		if (anima.length) {
			anima.forEach((numero) => {
			// o simbolo de + transforma um string em numero
				const total = +numero.innerText;
				const incremento = Math.floor(total / 120);
				let start = 0;
				const timer = setInterval(() => {
					start += incremento;
					numero.innerText = start;
					if (start > total) {
						numero.innerText = total;
						clearInterval(timer);
					}
				}, 10 * Math.random());
			});
		}
	}

	function handleMutation(mutation) {
		if (mutation[0].target.classList.contains('ativo')) {
			this.disconnect();
			animaNumeros();
		}
	}

	const observaTarget = document.querySelector('.numeros');
	const observa = new MutationObserver(handleMutation);

	observa.observe(observaTarget, { attributes: true });
}
