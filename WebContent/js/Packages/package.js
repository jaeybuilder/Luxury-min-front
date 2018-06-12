var wrapper = new XHR();

$ = (id) => document.getElementById(id);

package1 = () => {
    var value = $('btn-15').getAttribute('value');
    wrapper.post('./packages/assign/', {
        value: value
    }, {
        'Content-Type': 'application/json'
    }).then(function(data) {
        if (data.status == 200) {
            $('buy-sucess').style.display = 'inline-block';
        } else {
            $('buy-danger').style.display = 'inline-block';
        }
    }).catch(function(error) {
        console.log(error);
    });
}

package2 = () => {
    var value = $('btn-2').getAttribute('value');
    wrapper.post('./packages/assign', {
        value: value
    }, {
        'Content-Type': 'application/json'
    }).then(function(data) {
        if (data.status == 200) {
            $('buy-sucess').style.display = 'inline-block';
        } else {
            $('buy-danger').style.display = 'inline-block';
        }
    }).catch(function(error) {
        console.log(error);
    });
}

package3 = () => {
    var value = $('btn-3').getAttribute('value');
    wrapper.post('./packages/assign', {
        value: value
    }, {}).then(function(data) {
        if (data.status == 200) {
            $('buy-sucess').style.display = 'inline-block';
        } else {
            $('buy-danger').style.display = 'inline-block';
        }
    }).catch(function(error) {
        console.log(error);
    });
}

$('btn-15').addEventListener('click', () => {
    package1();
})