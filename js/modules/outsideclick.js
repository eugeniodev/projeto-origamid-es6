export default function outsideClick(element, typeEvent, callback) {
	const html = document.documentElement;
	const outside = 'data-outside';

	function handleOutsideClick(event) {
		// console.log(element.contains(event.target))
		if (!element.contains(event.target)) {
			element.removeAttribute(outside, '');
			typeEvent.forEach((item) => {
				html.removeEventListener(item, handleOutsideClick);
			});
			callback();
		}
	}

	if (!element.hasAttribute(outside)) {
		typeEvent.forEach((item) => {
			setTimeout(() => {
				html.addEventListener(item, handleOutsideClick);
			});
		});
		element.setAttribute(outside, '');
	}
}
