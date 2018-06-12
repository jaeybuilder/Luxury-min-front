var wrapper = new XHR();

$ = (id) => document.getElementById(id);

// fetchWallets = () => {
//     let btc = $('btc-wallet').value;
//     let ltc = $('ltc-wallet').value;

//     const options = {
//         method: 'post',
//         credentials: 'include',
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify({
//             btc: btc,
//             ltc: ltc
//         })
//     }

//     fetch('./edit', options)
//         .then(response => response.json())
//         .then(body => {
//             if (body.status == 200) {
//                 $('wallet-sucess').style.display = 'inline-block';
//             } else {
//                 $('wallet-danger').style.display = 'inline-block';
//             }
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// }

const save_wallet = () => {
    let btc = $('btc-wallet').value
    let eth = $('ltc-wallet').value

    wrapper.post('./edit', {btc, eth}, {"Content-type": "application/json"}).then((data) => {
        if (data.status == 200) {
            $('wallet-sucess').style.display = 'inline-block'
        } else {
            $('wallet-danger').style.display = 'inline-block'
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

$('wallets').addEventListener('click', save_wallet)