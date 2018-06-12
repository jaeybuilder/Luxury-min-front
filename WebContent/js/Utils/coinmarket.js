var wrapper = new XHR();

$ = (id) => document.getElementById(id);

const market = async () => {
	const data = await fetch('/packages/coinmarket');
	const currencies = await data.json();
	$('btc').innerHTML = `BTC: ${currencies.btc} $`
	$('ltc').innerHTML = `LTC: ${currencies.ltc} $`
} 

market();