import { form, backBtn, nextBtn, deleteBtn, changeBtn, users, changeableVar} from './getVariable.js';
import { onClickBack, onClickNext, onRemoveUser, onUpdateUser} from './utils.js';
function hideFormLogin() {
    form.hidden = true;
}
function addEventClickToBtn() {;
    for (let btn of deleteBtn) {
        btn.addEventListener('click', onRemoveUser);
    };
    for (let btn of changeBtn) {
        btn.addEventListener('click', onUpdateUser);
    };
    nextBtn.addEventListener('click', onClickNext);
    backBtn.addEventListener('click', onClickBack);
}
function addBtnBackAndNext () {
    users.append(backBtn, nextBtn);
}   
function searchEl(event) {
    let user = event.target.parentElement;
    for (let el of user.children) {
        if (el.className.includes('firstname_value') === true) {
            changeableVar.firstNameValue = el.value;
        }
        if (el.className.includes('lastname_value') === true) {
            changeableVar.lastNameValue = el.value;
        }
        if (el.className.includes('emailvalue') === true) {
            changeableVar.emailValue = el.value;
        }
        if (el.className.includes('avatarvalue') === true) {
            changeableVar.avatarValue = el.value;
        }
         if (el.className.includes('first_name') === true) {
            changeableVar.firstName = el;
        }
        if (el.className.includes('last_name') === true) {
            changeableVar.lastName = el;
        }
        if (el.className.includes('email_inp') === true) {
            changeableVar.emailinp = el;
        }
        if (el.className.includes('avatar') === true) {
            changeableVar.avatar = el;
        }
    }
}
export {
    hideFormLogin,
    addBtnBackAndNext,
    addEventClickToBtn,
    searchEl
} 