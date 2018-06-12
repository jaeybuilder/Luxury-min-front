var wrapper = new XHR();

$ = (id) => document.getElementById(id);

validateLogin = () => {
    let email = $('iemail');
    let password = $('ipassword');

    if (email.value == '' || password.value == '') {
        handleLog(email, password);
        $('sign-error').style.display = 'inline-block';
    } else {
        handleLog(email, password);
        $('sign-error').style.display = 'none';
        // login();
        fetchLogin();
    }
}

validateSignup = () => {
    let email = $('iemail');
    let username = $('iusername');
    let password = $('ipassword');
    let name = $('iname');
    let lastname = $('ilastname');

    if (email.value == '' || username.value == '' || password.value == '' || name.value == '' || lastname.value == '') {
        handleSign(name, lastname, username, email, password);
        $('sign-error').style.display = 'inline-block';
    } else {
        handleSign(name, lastname, username, email, password);
        $('sign-error').style.display = 'none';
        validateBox();
    }
}

validateBox = () => {
    let box = $('check');
    if (box.checked) {
        box.setAttribute('value', '1');
        box.setAttribute('disable', 'true');
        fetchSign();
    } else {
        box.setAttribute('value', '0');
        box.setAttribute('disable', 'false');
        $('sign-war').style.display = 'inline-block';
    }
}

handleSign = (name, lastname, username, email, password) => {
    let sign = [name, lastname, username, email, password];
    for (var i = 0; i < 5; i++) {
        switch (sign[i].name) {
            case 'name':
                if (sign[i].value == '') {
                    $('name-war').style.display = 'inline-block'
                    $('name-ok').style.display = 'none'
                } else {
                    $('name-ok').style.display = 'inline-block'
                    $('name-war').style.display = 'none'
                }
                break;
            case 'lastname':
                if (sign[i].value == '') {
                    $('lastname-war').style.display = 'inline-block'
                    $('lastname-ok').style.display = 'none'
                } else {
                    $('lastname-ok').style.display = 'inline-block'
                    $('lastname-war').style.display = 'none'
                }
                break;
            case 'email':
                if (sign[i].value == '') {
                    $('email-war').style.display = 'inline-block'
                    $('email-ok').style.display = 'none'
                } else {
                    $('email-ok').style.display = 'inline-block'
                    $('email-war').style.display = 'none'
                }
                break;
            case 'username':
                if (sign[i].value == '') {
                    $('username-war').style.display = 'inline-block'
                    $('username-ok').style.display = 'none'
                } else {
                    $('username-ok').style.display = 'inline-block'
                    $('username-war').style.display = 'none'
                }
                break;
            case 'password':
                if (sign[i].value == '') {
                    $('password-war').style.display = 'inline-block'
                    $('password-ok').style.display = 'none'
                } else {
                    $('password-ok').style.display = 'inline-block'
                    $('password-war').style.display = 'none'
                }
                break;
        }
    }
}

handleLog = (email, password) => {
    let loging = [email, password];
    for (var i = 0; i < 2; i++) {
        switch (loging[i].name) {
            case 'email':
                if (loging[i].value == '') {
                    $('email-war').style.display = 'inline-block'
                    $('email-ok').style.display = 'none'
                } else {
                    $('email-ok').style.display = 'inline-block'
                    $('email-war').style.display = 'none'
                }
                break;
            case 'password':
                if (loging[i].value == '') {
                    $('password-war').style.display = 'inline-block'
                    $('password-ok').style.display = 'none'
                } else {
                    $('password-ok').style.display = 'inline-block'
                    $('password-war').style.display = 'none'
                }
                break;
        }
    }
}

fetchLogin = () => {
    let email = $('iemail').value;
    let password = $('ipassword').value;

    const options = {
        method: 'post',
        credentials: 'include',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }

    fetch('./login', options)
        .then(response => response.json())
        .then(body => {
            if (body.status == 200) {
                window.location.href = "./user.html";
                $('login-sucess').style.display = 'inline-block';
            } else {
                $('login-danger').style.display = 'inline-block';
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

logout = () => {
    const options = {
        method: 'get',
        credentials: 'include',
        headers: {
            "Content-type": "application/json"
        },
    }

    fetch('./logout', options)
        .then(response => response.json())
        .then(body => {
            console.log(body)
            if (body.status == 200) {
                alert('logout')
                window.location.href = "./products.html";
            } else {
                alert('Youre not logged in')
            }
        })

    .catch((err) => {
        console.log(err)
    })
}

fetchSign = () => {
    let email = $('iemail').value;
    let username = $('iusername').value;
    let password = $('ipassword').value;
    let name = $('iname').value;
    let lastname = $('ilastname').value;

    const options = {
        method: 'post',
        credentials: 'include',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            username: username,
            name: name,
            lastname: lastname,
            password: password
        })
    }

    fetch('./signup', options)
        .then(response => response.json())
        .then(body => {
            console.log(body)
            if (body.status == 200) {
                window.location.href = "./login.html";
                $('sign-sucess').style.display = 'inline-block';
            } else {
                $('sign-danger').style.display = 'inline-block';
            }
        })
        .catch((err) => {
            console.log(err)
        })
}