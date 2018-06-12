var wrapper = new XHR();

$ = (id) => document.getElementById(id);

btn = () => {
    wrapper.get('./value', {}, {}).then((data) => {
        if (data.session != undefined) {
            $('pack-log').style.display = 'none';
        } else {
            $('modal-1').style.display = "none";
            $('modal-2').style.display = "none";
            $('modal-3').style.display = "none";
        }
    });
};

btn();