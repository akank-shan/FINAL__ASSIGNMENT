const login_input = document.getElementById('login_input');
const loginErrBox = document.getElementById('loginErrBox');

const pswd_input = document.getElementById('pswd_input');
const pswBox = document.getElementById('pswBox');

const user_input = document.getElementById('user_input');
const userBox = document.getElementById('userBox');

const bio_input = document.getElementById('bio_input');
const bioBox = document.getElementById('bioBox');

const cpswd_input = document.getElementById('cpswd_input');
const cpswBox = document.getElementById('cpswBox');

function redirect(pass) {

    let isErr = false;
    const emailValue = login_input.value;
    const pswdValue = pswd_input.value;
    const cpswdValue = cpswd_input.value;
    const usernameValue = user_input.value;
    const bioValue = bio_input.value;
    console.log(emailValue.value);


    login_input.style.border = "1px solid green";
    pswd_input.style.border = "1px solid green";
    cpswd_input.style.border = "1px solid green";
    user_input.style.border = "1px solid green";
    bio_input.style.border = "1px solid green";


    loginErrBox.style.display = "none";
    pswBox.style.display = "none";
    cpswBox.style.display = "none";
    userBox.style.display = "none";
    bioBox.style.display = "none";

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

    if (cpswdValue != pswdValue || !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}/.test(cpswdValue)) {
        cpswd_input.style.border = "1px solid red";
        cpswBox.style.display = "block";
        isErr = true;
    }

    if (usernameValue.length < 3) {
        user_input.style.border = "1px solid red";
        userBox.style.display = "block";
        isErr = true;
    }

    if (bioValue.length < 20) {
        bio_input.style.border = "1px solid red";
        bioBox.style.display = "block";
        isErr = true;
    }

    if (!isErr) {
        window.location.href = 'thankYou.html'
    }

}