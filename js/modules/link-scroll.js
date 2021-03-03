// selecionado todos os links que começam com o #
export default function initLinkScroll() {
	const linkInternos = document.querySelectorAll('[data-anime="menu"] a[href^="#"]');

	function scrollToSection(event) {
		event.preventDefault();
		const href = event.currentTarget.getAttribute('href');
		const section = document.querySelector(href);

		section.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
		// forma alternativa
		// const topo = section.offsetTop;
		// window.scrollTo({
		//     top: topo,
		//     behavior: 'smooth',
		// })
	}

	linkInternos.forEach((link) => {
		link.addEventListener('click', scrollToSection);
	});
}
