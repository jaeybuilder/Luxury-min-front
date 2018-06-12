var wrapper = new XHR();

$ = (id) => document.getElementById(id);

paypal.Button.render({
    env: 'sandbox', // sandbox | production

    // Show the buyer a 'Pay Now' button in the checkout flow
    commit: true,

    // payment() is called when the button is clicked
    payment: () => {

        // Set up a url on your server to create the payment
        var CREATE_URL = './payment/paypal/create';

        // Make a call to your server to set up the payment

        let button = $('paypal-button-container');
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
                eth,
                value
            }
        }
        return paypal.request.post(CREATE_URL, options).then((res) => {
            console.log(res)
            switch (res.status) {
                case 400:
                   alert('You need to add a bitcoin wallet before buying a bitcoin package')
                break
                case 401:
                    alert('You need to add a ethereum wallet before buying a ethereum package')
                break
                case 403:
                    $('buy-danger').style.display = 'inline-block'
                break
                default:
                    localStorage.setItem('billed', res.billed)
                    localStorage.setItem('btc', res.btc)
                    localStorage.setItem('eth', res.eth)
                    localStorage.setItem('value', res.value)
                    return res.paymentID;
                break
            }
        }).catch((err) => {
            console.log(err)
        })
    },

    // onAuthorize() is called when the buyer approves the payment

    onAuthorize: (data, actions) => {
        // Set up a url on your server to execute the payment
        var EXECUTE_URL = './payment/paypal/pay';

        // Set up the data you need to pass to your server
        var data = {
            paymentID: data.paymentID,
            payerID: data.payerID
        };

        // Make a call to your server to execute the payment

        return paypal.request.post(EXECUTE_URL, data).then((res) => {
            console.log(res)
            const price = localStorage.getItem('billed')
            const value = localStorage.getItem('value')
            const eth = (localStorage.getItem('eth') != undefined ? localStorage.getItem('eth') : "")
            const btc = (localStorage.getItem('btc') != undefined ? localStorage.getItem('btc') : "")
            options = {
                btc,
                eth,
                price,
                value
            }
            localStorage.removeItem('billed')
            localStorage.removeItem('eth')
            localStorage.removeItem('btc')
            localStorage.removeItem('value')
            if (res.status === 200) {
                wrapper.post('./packages/assign', {
                    options
                }, {
                    'Content-Type': 'application/json'
                }).then((data) => {
                    console.log(data)
                    if (data.status == 200) {
                        $('buy-sucess').style.display = 'inline-block'
                    } else {
                        $('buy-danger').style.display = 'inline-block'
                    }
                }).catch((error) => {
                    console.log(error)
                })
            } else if (data.status === 403) {
                alert('ALREADY BOUGHT ONE')
            }
        })
    }
}, '#paypal-button-container')