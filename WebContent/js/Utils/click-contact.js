$ = (id) => document.getElementById(id);

send_mail = () => {
    let xhr = new XHR();
    let name = $('name').value;
    let last_name = $('lastname').value;
    let message = $('message').value;
    xhr.post(`./email/send`, {
        name: name,
        lastname: lastname,
        message: message
    }, {
        'Content-Type': 'application/json'
    }).then((data) => {
        if (data.status === 200) {
            alert("Mail sent");
        } else {
            alert("There was a mistake. Try again")
        }
    }).catch((err) => {
        console.log(err);
    });
};

$('send').addEventListener('click', send_mail);