function verifyLogin() {

    let email = document.getElementById('login-phone').value;
    let password = document.getElementById('login-password').value;

    fetch('https://fitadda.onrender.com/api/v1/login', {
        method: 'post',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            password,
            email
        }),
    }).then(response => response.json())
        .then(data => {
            console.log("data", data)
            if (data.success === true) {
                const today = new Date()
                let tomorrow = new Date()
                tomorrow.setDate(today.getDate() + 1)

                let expires = "expires=" + tomorrow;
                document.cookie = 'fitaddatoken' + "=" + data.token + ";" + expires + ";path=/";
                document.cookie = 'fitaddatauser' + "=" + data.user.name + ";" + expires + ";path=/";

                alert("Congratulation!! you have successfully Logged In ");
                window.location.replace("../index.html");
            }
            else{
                alert("Invalid Credentials!");
            }
        })
}


function showHidePassword(id) {
    let input = document.getElementById('login-password');
    let passwordType = document.getElementById(id);
    if (input.type == 'password') {
        input.type = "text";
        passwordType.removeAttribute('class');
        passwordType.setAttribute('class', 'far fa-eye');
    }
    else {
        input.type = 'password';
        passwordType.removeAttribute('class');
        passwordType.setAttribute('class', 'far fa-eye-slash');
    }
}
   
