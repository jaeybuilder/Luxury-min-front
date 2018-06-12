var wrapper = new XHR();

$ = (id) => document.getElementById(id);

show_histories = () => {
    wrapper.get('./history/show', {}, {}).then((data) => {
        console.log(data)
        var tbl = $('table')
        tbl.setAttribute("id", "table")
        tbl.style.width = '100%'
        tbl.setAttribute("border", "3")
        var tbdy = document.createElement('tbody')
        tbdy.setAttribute('id', 'tbdy')
        for (var i = 0; i < 3; i++) {
            var tr = $('table').tHead.children[0],
                th = document.createElement('th')
            switch (i) {
                case 0:
                    th.innerHTML = 'Date'
                    break
                case 1:
                    th.innerHTML = 'BTC amount'
                    break
                case 2:
                    th.innerHTML = 'ETH amount'
                    break
            }
            tr.appendChild(th)
        }

        for (var i = 0; i < data.histories.length; i++) {
            var tr = document.createElement('tr')
            tr.setAttribute('id', i)
            for (var j = 0; j < 3; j++) {
                var td = document.createElement('td')
                switch (j) {
                    case 0:
                        var date = data.histories[i].date.substring(0, data.histories[i].date.indexOf('T'));
                        td.innerHTML = date.split('/').reverse().join('/')
                        break
                    case 1:
                        td.innerHTML = data.histories[i].btc_amount
                        break
                    case 2:
                        td.innerHTML = data.histories[i].eth_amount
                        break
                }
                tr.appendChild(td)
            }
            tbdy.appendChild(tr)
        }
        tbl.appendChild(tbdy)
    })
}

window.onload = (ev) => {
    show_histories();
}