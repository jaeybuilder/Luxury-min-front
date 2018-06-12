var wrapper = new XHR();

$ = (id) => document.getElementById(id);

log = () => {
    wrapper.get('./value', {}, {}).then((data) => {
        if (data.session != undefined) {

            if (data.session.user.admin == true) {
                $('updateb').style.display = "inline-block";
                $('orders').style.display = "inline-block";
            }
            
            $('login').style.display = "none";
            $('register').style.display = "none";
            $('mail').innerHTML = data.session.user.email;
        } else {
            $('account').style.display = "none";
            $('dashboard').style.display = "none";
        }
    });
};

log();