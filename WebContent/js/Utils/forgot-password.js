var xhr = new XHR();

$ = (id) => document.getElementById(id);

send_email = () => {
    var email = $('iemail').value;
    xhr.post('./password/forgot', {
        email: email
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

check_status = () => {
    var status = document.location.href.split('status=')[1];
    if (status == 404) {
        alert('Token expired, please ask again for a new email')
    } else if (status == 403) {
        alert('Invalid token')
    }
}

addEventListener('load', check_status)
$('send').addEventListener('click', send_email)