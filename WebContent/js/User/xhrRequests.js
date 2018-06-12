var wrapper = new XHR();

$ = (id) => document.getElementById(id);

signup = () => {
    let email = $('iemail').value;
    let username = $('iusername').value;
    let password = $('ipassword').value;
    let name = $('iname').value;
    let lastname = $('ilastname').value;

    wrapper.post('./signup', {
        email: email,
        username: username,
        password: password,
        name: name,
        lastname: lastname
    }, {
        'Content-Type': 'application/json'
    }).then(function(data) {
        if (data.status == 200) {
            console.log(data)
            window.location.href = "./products.html";
            $('sign-sucess').style.display = 'inline-block';
        } else {
            $('sign-danger').style.display = 'inline-block';
        }
    }).catch(function(error) {
        console.log(error);
    });
}

login = () => {
    let email = $('iemail').value;
    let password = $('ipassword').value;
    wrapper.post('./login', {
        email: email,
        password: password
    }, {
        'Content-Type': 'application/json'
    }).then(function(data) {
        if (data.status == 200) {
            window.location.href = "./user.html";
            $('login-sucess').style.display = 'inline-block';
        } else {
            $('login-danger').style.display = 'inline-block';
        }
    }).catch(function(error) {
        console.log(error);
    });
}

logout = () => {
    wrapper.get('./logout', {}, {}).then(function(data) {
        if (data.status == 200) {
            $('logout-sucess').style.display = 'inline-block';
        } else {
            alert("You're not logged in");
        }
    }).catch(function(error) {
        console.log(error);
    });
}

updateWallets = () => {
    var btc = $('btc-wallet').value;
    var ltc = $('ltc-wallet').value;

    wrapper.post('./edit', {
        btc_address: btc,
        ltc_address: ltc
    }, {
        'Content-Type': 'application/json'
    }).then((data) => {
        if (data.status == 200) {
            $('wallet-sucess').style.display = 'inline-block';
        } else {
            $('wallet-danger').style.display = 'inline-block';
        }
    }).catch((err) => {
        console.log(err)
    });
};

th = () => {
    wrapper.get('./packages/user_hashes', {}, {}).then((data) => {
        if (data.status == 200) {
            $('console').style.display = 'inline-block';
            $('consoleHash').innerHTML = `${data.th}  th/s`;
        } else {
            $('console').style.display = 'none';
            $('div-background').style.display = 'none';
        }
    });
};

date = () => {
    wrapper.get('./packages/buy_date', {}, {}).then((data) => {
        if (data.status == 200) {
            var date = data.date.substring(0, data.date.indexOf('T'))
            var final_date = date.split('-').reverse().join('-');

            if (final_date.length == 10) {
                month = final_date[3] + final_date[4];
            } else {
                month = final_date[2] + final_date[3];
            }

            calcData(month, data.package).then((data1) => {
                $('month').style.display = 'inline-block';
                $('test').innerHTML = `${data1} of 2018`;
            }).catch((error) => {
                console.log(error);
            });

        } else {
            $('rate').style.display = 'none';
            $('console').style.display = 'none';
            $('tab').style.display = 'none';
        }
    });
};

balance = () => {
    wrapper.get('./packages/getBalance', {}, {}).then((data) => {
        if (data.status == 200) {
            $('balance').style.display = 'inline-block';
            $('bal-text').innerHTML = `${data.balance} btc`;
        } else {
            $('result').style.display = 'inline-block';
            $('status-text').innerHTML = 'User has no package yet';
            $('rate').style.display = 'none';
        }
    })
};

coins = () => {
    wrapper.get('./packages/coinmarket', {}, {}).then((data) => {
        if (data.status == 200) {
            $('btc').innerHTML = `BTC: ${data.btc}  $`;
            $('ltc').innerHTML = `LTC: ${data.btc}  $`;
        }
    })
};

btcPrice = () => {
    wrapper.get('./packages/btc_hash_price', {}, {}).then((data) => {
        if (data.status == 200) {
            btc_price = parseInt(data.price);
            console.log(btc_price)
        } else {
            console.log('Error')
        }
    }).catch((error) => {
        console.log('error')
    });
};

ltcPrice = () => {
    wrapper.get('./packages/ltc_hash_price', {}, {}).then((data) => {
        if (data.status == 200) {
            ltc_price = parseFloat(data.price);
            console.log(ltc_price)
        } else {
            console.log('Error')
        }
    }).catch((error) => {
        console.log('error')
    });
};