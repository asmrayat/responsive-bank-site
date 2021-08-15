document.getElementById('login-submit').addEventListener('click', function () {
    //get email
    const emailfield = document.getElementById('user-email');
    const userEmail = emailfield.value;


    //get password
    const passwordfield = document.getElementById('user-password');
    const userPassword = passwordfield.value;

    if (userEmail == 'abc@gmail.com' && userPassword == 'abcd') {
        window.location.href = 'mainPage.html';
    }
}

)