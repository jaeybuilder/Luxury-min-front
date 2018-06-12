$ = (id) => document.getElementById(id);

fetchDate = () => {
    const options = {
        method: 'get',
        credentials: 'include',
        headers: {
            "Content-type": "application/json"
        },
    }

    fetch('./packages/buy_date', options)
        .then(response => response.json())
        .then(body => {
            console.log(body)
            if (body.status == 200) {
                var date = body.date.substring(0, body.date.indexOf('T'))
                var final_date = date.split('-').reverse().join('-');

                if (final_date.length == 10) {
                    month = final_date[3] + final_date[4];
                } else {
                    month = final_date[2] + final_date[3];
                }

                calcData(month, body.package).then((data1) => {
                    if(body.package == 1){   
                        $('btc-month').style.display = 'inline-block';
                        $('btc-date').innerHTML = `${data1} of 2018`;
                    } else if (body.package == 2) {
                        $('eth-month').style.display = 'inline-block';
                        $('eth-date').innerHTML = `${data1} of 2018`;
                    } else if (body.package == 3) {
                        $('eth-graph').style.display = 'inline-block';
                        $('btc-month').style.display = 'inline-block';
                        $('btc-date').innerHTML = `${data1} of 2018`;
                        $('eth-month').style.display = 'inline-block';
                        $('eth-date').innerHTML = `${data1} of 2018`;
                    }
                }).catch((error) => {
                    console.log(error);
                });
            } else {
                $('rate').style.display = 'none';
                $('console').style.display = 'none';
                $('tab').style.display = 'none';
            }
        })
        .catch((err) => {})
}

fetchBalance = () => {
    const options = {
        method: 'get',
        credentials: 'include',
        headers: {
            "Content-type": "application/json"
        },
    }

    fetch('./packages/getBalance', options)
        .then(response => response.json())
        .then(body => {
            console.log(body)
            const pack = localStorage.getItem('package')
            if (body.status == 200) {
                if(pack == 1){
                    $('btc-balance').style.display = 'inline-block';
                    $('btc-balance-text').innerHTML = `${body.btc_balance} btc`;
                } else if(pack == 2){
                    $('eth-balance').style.display = 'inline-block';
                    $('eth-balance-text').innerHTML = `${body.eth_balance} eth`;
                } else if(pack == 3){
                    $('eth-balance').style.display = 'inline-block';
                    $('eth-balance-text').innerHTML = `${body.eth_balance} eth`;
                    $('btc-balance').style.display = 'inline-block';
                    $('btc-balance-text').innerHTML = `${body.btc_balance} btc`;
                }
            } else {
                $('result').style.display = 'inline-block';
                $('status-text').innerHTML = 'User has no package yet';
                $('rate').style.display = 'none';
            }
        })
        .catch((err) => {})
}

fetchHashes = () => {
    const options = {
        method: 'get',
        credentials: 'include',
        headers: {
            "Content-type": "application/json"
        },
    }

    fetch('./packages/user_hashes', options)
        .then(response => response.json())
        .then(body => {
            console.log(body)
            const pack = localStorage.getItem('package')
            if (body.status == 200) {
                if(pack == 1){
                    $('btc-hashes').style.display = 'inline-block';
                    $('btc-consoleHash').innerHTML = `${body.btc_hashes}  th/s`;    
                } else if(pack == 2){
                    $('eth-hashes').style.display = 'inline-block';
                    $('eth-consoleHash').innerHTML = `${body.eth_hashes}  mh/s`;
                } else if(pack == 3) {
                    $('btc-hashes').style.display = 'inline-block';
                    $('eth-hashes').style.display = 'inline-block';
                    $('eth-consoleHash').innerHTML = `${body.eth_hashes}  mh/s`;
                    $('btc-consoleHash').innerHTML = `${body.btc_hashes}  th/s`;
                }
            } else {
                $('eth-hashes').style.display = 'none';
                $('btc-hashes').style.display = 'none';
            }
        })
        .catch((err) => {})
}

fetchPackage = () => {
    const options = {
        method: 'get',
        credentials: 'include',
        headers: {
            "Content-type": "application/json"
        },
    }

    fetch('./package_id', options)
        .then(response => response.json())
        .then(body => {
            console.log(body)
            localStorage.setItem('package', body.package)
            if (body.package == 1) {
                $('tab-btc').style.display = 'inline-block';
            } else if (body.package == 2) {
                $('tab-eth').style.display = 'inline-block';
            } else if (body.package == 3) {
                $('tab-btc').style.display = 'inline-block';
                $('tab-eth').style.display = 'inline-block';
            }
        })
        .catch((err) => {})
}

window.onload = ev => {
    fetchPackage();
}

const getUserData = async () => {
    const date = await fetchDate();
    const balance = await fetchBalance();
    const hashes = await fetchHashes();
}

openCity = (evt, cityName) => {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "inline-block";
    evt.currentTarget.className += " active";
    getUserData();
}