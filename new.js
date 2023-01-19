const login_input = document.getElementById('login_input');
const loginErrBox = document.getElementById('loginErrBox');

const pswd_input = document.getElementById('pswd_input');
const pswBox = document.getElementById('pswBox');

function redirect() {

    let isErr = false;
    const emailValue = login_input.value;
    const pswdValue = pswd_input.value;
    
    login_input.style.border = "1px solid green";
    pswd_input.style.border = "1px solid green";
    
    loginErrBox.style.display = "none";
    pswBox.style.display = "none";
    
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
        login_input.style.border = "1px solid red";
        loginErrBox.style.display = "block";
        isErr = true;
    }

    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}/.test(pswdValue)) {
        pswd_input.style.border = "1px solid red";
        pswBox.style.display = "block";
        isErr = true;
    }

    if (!isErr) {
        window.location.href = 'thankYou.html'
    }

}

