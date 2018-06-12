$ = (id) => document.getElementById(id);

const stripeButton = $('buttonCheckout');
const paypalButton = $('paypal-button-container');

$('modal-1').addEventListener("click", (ev) => {
    let btc = $('modal-1');

    stripeButton.setAttribute('value', '1');
    paypalButton.setAttribute('value', '1');

    stripeButton.setAttribute('btc', btc.getAttribute('btc'));
    paypalButton.setAttribute('btc', btc.getAttribute('btc'));

    stripeButton.setAttribute('btc-price', btc.getAttribute('btc-price'));
    paypalButton.setAttribute('btc-price', btc.getAttribute('btc-price'));
});

$('modal-2').addEventListener("click", (ev) => {
    let ltc = $('modal-2');

    stripeButton.setAttribute('value', '2');
    paypalButton.setAttribute('value', '2');

    stripeButton.setAttribute('ltc', ltc.getAttribute('ltc'));
    paypalButton.setAttribute('ltc', ltc.getAttribute('ltc'));

    stripeButton.setAttribute('ltc-price', ltc.getAttribute('ltc-price'));
    paypalButton.setAttribute('ltc-price', ltc.getAttribute('ltc-price'));
});

$('modal-3').addEventListener("click", (ev) => {
    let btc = $('modal-3');
    let ltc = $('modal-3');

    stripeButton.setAttribute('value', '3');
    paypalButton.setAttribute('value', '3');

    paypalButton.setAttribute('btc', btc.getAttribute('btc'));
    stripeButton.setAttribute('btc', btc.getAttribute('btc'));

    paypalButton.setAttribute('ltc', ltc.getAttribute('ltc'));
    stripeButton.setAttribute('ltc', ltc.getAttribute('ltc'));

    stripeButton.setAttribute('btc-price', btc.getAttribute('btc-price'));
    paypalButton.setAttribute('btc-price', btc.getAttribute('btc-price'));

    stripeButton.setAttribute('ltc-price', ltc.getAttribute('ltc-price'));
    paypalButton.setAttribute('ltc-price', ltc.getAttribute('ltc-price'));
});

function copyBtc() {
    /* Get the text field */
    var copyText = document.getElementById("copy-btc");

    /* Select the text field */
    copyText.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert(`Copied the text: ${copyText.value}`);
}

function copyLtc() {
    /* Get the text field */
    var copyText = document.getElementById("copy-ltc");

    /* Select the text field */
    copyText.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert(`Copied the text: ${copyText.value}`);
}

prodlog = (id) => {
    wrapper.get('./value', {}, {}).then((data) => {
        if (data.session != undefined) {
            switch (id.id) {
                case '1':
                    // statements_1
                    $('text-warning1').style.display = 'none';
                    break;
                case '2':
                    // statements_1
                    $('text-warning2').style.display = 'none';
                    break;
                case '3':
                    // statements_1
                    $('text-warning3').style.display = 'none';
                    break;
            }
        }
    });
};