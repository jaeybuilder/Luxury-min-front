var xhr = new XHR();

$ = (id) => document.getElementById(id);

validate_passwords = () => {
    var password = $('password').value;
    var cpassword = $('cpassword').value;

    cpassword && password ? reset_password() : $('password-danger').style.display = 'inline-block';;
}

reset_password = () => {
    var cpassword = $('cpassword').value;
    var token = document.location.href.split('token=')[1];
    xhr.post(`./password/reset/${token}`, {
        password: cpassword
    }, {
        'Content-Type': 'application/json'
    }).then((data) => {
        console.log(data);
        if (data.status == 200) {
            $('password-sucess').style.display = 'inline-block';
        } else {
            $('password-danger').style.display = 'inline-block';
        }
    })
}

$('reset').addEventListener('click', validate_passwords);