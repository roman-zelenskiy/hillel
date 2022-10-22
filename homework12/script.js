let array = [
  {login: 'name1@gamil.com', password: 'password1'},
  {login: 'name2@gamil.com', password: 'password2'},
  {login: 'name3@gamil.com', password: 'password3'}
]
let butLogin = document.getElementsByClassName('submit')[0];
let emailLogin = document.getElementsByClassName('email')[0];
let passwordLogin = document.getElementsByClassName('password')[0];
let formLogin = document.getElementsByClassName('form_login')[0];



butLogin.disabled = true;
let messageValidation = document.createElement('p');
formLogin.append(messageValidation);
formLogin.addEventListener('keyup', () => {
    passwordLogin.value = passwordLogin.value.trim();
    emailLogin.value = emailLogin.value.trim();
    if (passwordLogin.value == '' || emailLogin.value == '') {
        butLogin.disabled = true;
    } else {
        butLogin.disabled = false;
    }
});
emailLogin.addEventListener('focus', () => {
    messageValidation.innerText = '';
}) 
passwordLogin.addEventListener('focus', () => {
    messageValidation.innerText = '';
}) 
emailLogin.addEventListener('blur', onValidationEmail);
passwordLogin.addEventListener('blur', onValidationPassword);
function onValidationEmail() {
    if (!emailLogin.value) {
        messageValidation.innerText = 'отсутствует email';
        return false;
    }
    if (emailLogin.value.includes('@') == false) {
        messageValidation.innerText = 'отсутствует @';
        return false;
    }
    if (emailLogin.value.slice((emailLogin.value.indexOf('@')) + 1, emailLogin.value.length).includes('.') == false) {
        messageValidation.innerText = 'имя домена без точки';
        return false;
    }
    if (emailLogin.value.slice((emailLogin.value.indexOf('@')) + 1, emailLogin.value.length).indexOf('.') == 0 || emailLogin.value.slice((emailLogin.value.indexOf('@')) + 1, emailLogin.value.length).indexOf('.') == (emailLogin.value.slice((emailLogin.value.indexOf('@')) + 1, emailLogin.value.length).length) - 1) {
        messageValidation.innerText = 'точка не должна быть в конце или в начале домена';
        return false;
    }
    if (emailLogin.value.slice(0, (emailLogin.value.indexOf('@'))).length == 0) {
        messageValidation.innerText = 'отсутствует имя email';
        return false;
    }
    if (emailLogin.value.slice(0, (emailLogin.value.indexOf('@'))).indexOf('.') == 0 || emailLogin.value.slice(0, (emailLogin.value.indexOf('@'))).indexOf('.') == ((emailLogin.value.slice(0, (emailLogin.value.indexOf('@'))).indexOf('.').length) - 1)) {
        messageValidation.innerText = 'точка не должна быть в конце или в начале';
        return false;
    } else {
        formLogin.addEventListener('submit', onSubmitValid);
    }
}
function onValidationPassword() {
    if (!passwordLogin.value) {
        messageValidation.innerText = 'отсутствует пароль';
        return false;
    }
    if (passwordLogin.value.length < 6) {
        messageValidation.innerText = 'пароль должен быть не менее 6 символов'
        return false;
    } else {
        formLogin.addEventListener('submit', onSubmitValid);
    };
};

function onSubmitValid(e) {
    e.preventDefault();
    array.forEach((el, index, array) => {
        if (el.login == emailLogin.value && el.password == passwordLogin.value) {
            messageValidation.innerText = 'пользователь существует';
        }
        if (messageValidation.innerText == '') {
            messageValidation.innerText = 'пользователь не существует';
        }
    });
};

