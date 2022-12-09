import { messageToUeser, userTemolate, URL, changeableVar } from './getVariable.js'
import { hideFormLogin, addEventClickToBtn, addBtnBackAndNext } from './components.js';
import { getUsers } from './getUsers.js';
function successfulLogin() {
    fetch(`${URL}/users?page=${changeableVar.page}`)
        .then(response => response.json())
        .then((response) => {
            getUsers(response.data, userTemolate.innerHTML);
            hideFormLogin();
            addEventClickToBtn();
            addBtnBackAndNext();
        });
};
function unSuccessfulLogin(error) {
    messageToUeser.innerText = Object.values(error)[0];
    document.body.append(messageToUeser);
};

export {
    successfulLogin,
    unSuccessfulLogin
}

