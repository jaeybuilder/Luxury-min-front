var wrapper = new XHR();

$ = (id) => document.getElementById(id);

const blocked = $('updateb').getAttribute("blocked");

updateBalance = () => {
    wrapper.get(`./packages/update_balance`, {}, {}).then((data) => {
        if (data.status == 200) {
            block();
        } else {
            unblock();
            console.log('Error trying to update');
        }
    })
};

clickButton = () => {
    wrapper.get('./updateButton', {}, {}).then((data) => {
        if (data.status == 200)
            updateBalance();
    });
};

getButton = () => {
    wrapper.get(`./getButton`, {}, {}).then((data) => {
        if (data.status == 200) {
            unblock()
        } else {
            block();
        }
    })
}

unblock = () => {
    $('updateb').disabled = false;
    $('updateb').setAttribute("blocked", false);
    $('updateb').innerHTML = "Update Balance";
}

block = () => {
    $('updateb').setAttribute("blocked", true);
    $('updateb').disabled = true;
    $('updateb').innerHTML = "Blocked...";
}

$('updateb').addEventListener('click', () => {
    clickButton();
})

getButton();