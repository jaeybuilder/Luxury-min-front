var wrapper = new XHR();


var checkoutHandler = StripeCheckout.configure({
    key: "pk_test_BHstT2OmmI6hlik3NnMl6ZHz",
    locale: "auto"
});

const button = document.getElementById("buttonCheckout");

button.addEventListener("click", (ev) => {

    checkoutHandler.open({
        name: "Lux mining",
        description: "Buying package",
        token: handleToken
    })
});

handleToken = (token) => {
    let btc = button.getAttribute('btc');
    let eth = button.getAttribute('ltc');
    let value = button.getAttribute('value');
    let options = [];

    if (btc !== null && eth == null) {
        options = {
            value,
            btc
        }
        console.log(options)
    } else if (eth !== null && btc == null) {
        options = {
            value,
            eth
        }
        console.log(options)
    } else {
        options = {
            value,
            btc,
            eth
        }
        console.log(options)
    }

    wrapper.post('/payment/stripe', {token, options}, {"Content-Type": "application/json"}).then(data => {
        options.billed = data.billed
        switch (data.status) {
            case 200:
            wrapper.post('./packages/assign', {options}, {'Content-Type': 'application/json'}).then((data) => {
                console.log(data)
                if (data.status == 200) {
                    $('buy-sucess').style.display = 'inline-block'
                } else {
                    $('buy-danger').style.display = 'inline-block'
                }
            }).catch(function(error) {
                console.log(error)
            })
            break
            case 403:
                alert('ALREADY BOUGHT ONE')
            break
            case 400:
                alert('You need to add a bitcoin wallet before buying a bitcoin package')
            break
            case 401:
                alert('You need to add a ethereum wallet before buying a ethereum package')
            break
            default:
                alert('Error')
            break
        }
    })
}