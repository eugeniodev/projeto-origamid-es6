export default function initFetchBitcoin(url, traget) {
	fetch(url)
		.then((r) => r.json())
		.then((json) => {
			const btcPreco = document.querySelector(traget);

			btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4);

			console.log(json.BRL.sell);
		}).catch((err) => console.log(Error(err)));
}
