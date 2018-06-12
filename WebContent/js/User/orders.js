var xhr = new XHR()

$ = (id) => document.getElementById(id);

show_orders = () => {
    xhr.get('./order/all', {}, {}).then((data) => {
        var tbl = $('table')
        tbl.setAttribute("id", "table")
        tbl.style.width = '100%'
        tbl.setAttribute("border", "3")
        var tbdy = document.createElement('tbody')
        tbdy.setAttribute('id', 'tbdy')
        for (var i = 0; i < 10; i++) {
            var tr = $('table').tHead.children[0],
                th = document.createElement('th')
            switch (i) {
                case 0:
                    th.innerHTML = 'ORDER NUMBER'
                break
                case 1:
                    th.innerHTML = 'USER'
                break
                case 2:
                    th.innerHTML = 'PACKAGE'
                break
                case 3:
                    th.innerHTML = 'SINCE'
                break
                case 4:
                    th.innerHTML = 'ETH HASHES'
                break
                case 5:
                    th.innerHTML = 'BTC HASHES'
                break
                case 6:
                    th.innerHTML = "MONTHLY PAY"
                break
                case 7:
                    th.innerHTML = "ORDER CONFIRM"
                break
                case 8:
                    th.innerHTML = "BILLED"
                break
                case 9:
                    th.innerHTML = "DETAILS"
                break
            }
            tr.appendChild(th)
        }

        for (var i = 0; i < data.orders.length; i++) {
            var tr = document.createElement('tr')
            tr.setAttribute('id', i)
            for (var j = 0; j < 10; j++) {
                var td = document.createElement('td')
                switch (j) {
                    case 0:
                        td.innerHTML = data.orders[i].id
                    break
                    case 1:
                        td.innerHTML = data.orders[i].email
                    break
                    case 2:
                        td.innerHTML = data.orders[i].package_id
                    break
                    case 3:
                        var billing_date = data.orders[i].billing_date.substring(0, data.orders[i].billing_date.indexOf('T'))
                        var date = billing_date.split('-').reverse().join('-')
                        td.innerHTML = date
                    break
                    case 4:
                        td.innerHTML = data.orders[i].eth_hashes
                    break
                    case 5:
                        td.innerHTML = data.orders[i].btc_hashes
                    break
                    case 6:
                        if (data.orders[i].monthly_paid == false) {
                            td.innerHTML = "Debes pagar mensualidad"
                        } else {
                            td.innerHTML = "ya pagaste"
                        }
                    break
                    case 7:
                        if (data.orders[i].payout == false) {
                            td.innerHTML = "no has confirmado"
                        } else {
                            td.innerHTML = "confirmada la transaccion"
                        }
                    break
                    case 8:
                        td.innerHTML = data.orders[i].billed
                    break
                    case 9:
                        td.innerHTML = "Details"
                        td.setAttribute('id', data.orders[i].id)
                        td.addEventListener('click', order_info)
                    break
                }
                tr.appendChild(td)
            }
            tbdy.appendChild(tr)
        }
        tbl.appendChild(tbdy)
    })
}

function order_info() {
    xhr.get(`./order/show/${this.id}`, {}, {}).then((order) => {
        xhr.get(`/order/user/${order[0].email}`,{},{}).then((user) => {
            console.log(order[0])
            console.log(user)
            $("table").innerHTML = ""
            var details = $("test")
    
            var id = document.createElement('p')
            var email = document.createElement('p')
            var btc_hashes = document.createElement('p')
            var eth_hashes = document.createElement('p')
            var fdate = document.createElement('p')
            var status = document.createElement('p')
            var payout = document.createElement('p')
            var billed = document.createElement('p')
            var btc_balance = document.createElement('p')
            var eth_balance = document.createElement('p')
            var btc_address = document.createElement('p')
            var eth_address = document.createElement('p')
            var paid = document.createElement('button')
            var erase = document.createElement('button')
            var confirm = document.createElement('button')
            var hr = document.createElement('hr')
            var btc_hr = document.createElement('hr')
            var ltc_hr = document.createElement('hr')
            
            id.innerHTML = `ID of order: ${order[0].id}`
            email.innerHTML = `User email:  ${order[0].email}` 
            btc_hashes.innerHTML = `BTC hashes: ${order[0].btc_hashes}` 
            btc_balance.innerHTML = `BTC balance: ${user.btc_balance}`
            btc_address.innerHTML = `BTC address: ${order[0].btc_address}`
            eth_hashes.innerHTML = `ETH hashes: ${order[0].eth_hashes}`
            eth_balance.innerHTML = `ETH balance: ${user.eth_balance}`
            eth_address.innerHTML = `ETH address: ${order[0].eth_address}`
            billed.innerHTML = `Billed: ${order[0].billed}`
    
            var billing_date = order[0].billing_date.substring(0, order[0].billing_date.indexOf('T'))
            var date = billing_date.split('-').reverse().join('-')
            fdate.innerHTML = date

            order[0].monthly_paid == false ? status.innerHTML = "Must paid" : status.innerHTML = "Paid"
            
            payout.innerHTML = 'Payout'
            paid.innerHTML = "Pay"
            paid.setAttribute("class", "btn btn-outline-primary")
            erase.innerHTML = "Delete order"
            erase.setAttribute("class", "btn btn-outline-primary")
            confirm.innerHTML = "Confirm order"
            confirm.setAttribute("class", "btn btn-outline-primary")
            id.setAttribute("style", "text-align:center")
            email.setAttribute("style", "text-align:center")
            btc_hashes.setAttribute("style", "text-align:center")
            eth_hashes.setAttribute("style", "text-align:center")
            fdate.setAttribute("style", "text-align:center")
    
            erase.style.margin = "0 auto"
            confirm.style.margin = "10px"
    
            details.appendChild(paid)
            details.appendChild(confirm)
            details.appendChild(erase)
            details.appendChild(id)
            details.appendChild(email)
            details.appendChild(status)
            details.appendChild(billed)
            details.appendChild(fdate)
            details.appendChild(btc_hr)
            details.appendChild(btc_hashes)
            details.appendChild(btc_balance)
            details.appendChild(btc_address)
            details.appendChild(ltc_hr)
            details.appendChild(eth_hashes)
            details.appendChild(eth_balance)
            details.appendChild(eth_address)
            details.appendChild(hr)
    
    
            paid.addEventListener('click', () => {
                xhr.get(`./order/pay/${order[0].id}`, {}, {}).then((data) => {
                    if (data.status == 200) {
                        test()
                            // newHistory(btc_address,ltc_address);
                            // window.location.href = './order.html';
                        $('order-payout').style.display = 'inline-block';
                    } else {
                        $('order-error').style.display = 'inline-block';
                    }
                })
            })
    
            confirm.addEventListener('click', () => {
                xhr.get(`./order/confirm/${order[0].id}`, {}, {}).then((data) => {
                    console.log(data)
                    if (data.status == 200) {
                        window.location.href = './order.html';
                        $('order-confirm').style.display = 'inline-block';
                    } else {
                        $('order-error').style.display = 'inline-block';
                    }
                })
            })
    
            erase.addEventListener('click', () => {
                xhr.get(`./order/delete/${order[0].id}`, {}, {}).then((data) => {
                    console.log(data)
                    if (data.status == 200) {
                        window.location.href = './order.html';
                        $('order-delete').style.display = 'inline-block';
                    } else {
                        $('order-error').style.display = 'inline-block';
                    }
                })
            })
        })
        
    })
}

addEventListener('load', show_orders)

newHistory = (btc, ltc) => {
    xhr.post('./history/new', {}, {}).then((data) => {
        console.log(data)
        if (data.status == 200) {
            // window.location.href = './order.html';
            $('order-delete').style.display = 'inline-block';
        } else {
            $('order-error').style.display = 'inline-block';
        }
    })
}

test = () => {
    xhr.get('./getBalance', {}, {}).then((data) => {
        if (data.status == 200) {
            console.log(data)
        } else {
            console.log(data)
        }
    })
}