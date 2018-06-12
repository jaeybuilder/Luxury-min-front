$ = (id) => document.getElementById(id);

var btc_price = 0;
var ltc_price = 0;

var sliderBtc = $("btc-slider");
var outputBtc = $('btc-text');

var sliderLtc = $("ltc-slider");
var outputLtc = $('ltc-text');

var sliderMixedBtc = $("mixed-slider-btc");
var outputMixedBtc = $('mixed-text-btc');

var sliderMixedLtc = $("mixed-slider-ltc");
var outputMixedLtc = $('mixed-text-ltc');

// Display the default slider value
outputBtc.innerHTML = `${sliderBtc.value} th/s price: 0$`;
outputLtc.innerHTML = `${sliderLtc.value} mh/s price: 0$`;

outputMixedBtc.innerHTML = `${sliderBtc.value} th/s price: 0$`;
outputMixedLtc.innerHTML = `${sliderLtc.value} mh/s price: 0$`;

// Update the current slider value (each time you drag the slider handle)
sliderBtc.oninput = function() {
    outputBtc.innerHTML = `${this.value} th/s price: ${calculateBtc(this.value)} $`;
    $('modal-1').setAttribute('btc', this.value);
    $('modal-1').setAttribute('btc-price', calculateBtc(this.value));
}

sliderLtc.oninput = function() {
    outputLtc.innerHTML = `${this.value} mh/s price: ${calculateLtc(this.value)} $ `;
    $('modal-2').setAttribute('ltc', this.value);
    $('modal-2').setAttribute('ltc-price', calculateLtc(this.value));
}

sliderMixedBtc.oninput = function() {
    outputMixedBtc.innerHTML = `${this.value} th/s price: ${calculateBtc(this.value)} $`;
    $('modal-3').setAttribute('btc', this.value);
    $('modal-3').setAttribute('btc-price', calculateBtc(this.value));
}

sliderMixedLtc.oninput = function() {
    outputMixedLtc.innerHTML = `${this.value} mh/s price: ${calculateLtc(this.value)} $`;
    $('modal-3').setAttribute('ltc', this.value);
    $('modal-3').setAttribute('ltc-price', calculateLtc(this.value));
}

calculateBtc = (btc) => {
    return btc * btc_price;
}

calculateLtc = (ltc) => {
    return ltc * ltc_price;
}

const getPricing = async () => {
    const ltcreq = await fetch('./packages/ltc_hash_price') // get ltcprice
    const btcreq = await fetch('./packages/btc_hash_price') // get btcprice
    
    const ltcpri = await ltcreq.json() // parse JSON
    const btcprice = await btcreq.json() // parse JSON
    
    ltc_price = parseFloat(ltcpri.price)
    btc_price = parseInt(btcprice.price)
}

getPricing();
