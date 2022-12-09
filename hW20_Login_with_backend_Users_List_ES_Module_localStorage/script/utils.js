import { changeableVar, URL} from './getVariable.js';
import { successfulLogin } from './loginCallback.js';
import { searchEl } from './components.js';
function onClickNext() {
    ++changeableVar.page;
    if (changeableVar.page > 2) {
        changeableVar.page = 2;
    } 
    successfulLogin(changeableVar.page);
}
function onClickBack() {
    --changeableVar.page;
    if (changeableVar.page < 1) {
        changeableVar.page = 1;
    } 
    successfulLogin(changeableVar.page);
}
function onRemoveUser(e) {
    let id = e.target.parentElement.parentElement.children[0].innerText;
    let user = e.target.parentElement.parentElement;
    fetch(`${URL}/users/${id}`, {
        method: 'DELETE'
    })
        .then((response) => {
            if (response.status === 204) {
                user.remove();
            }
    }) 
}
function onUpdateUser(e) {
    let user = e.target.parentElement.parentElement;
    for (let el of user.children) {
        if (el.className.includes('save_btn') === true) {
            changeableVar.saveBtn = el;
        }
        if (el.classList.contains('d_none') === true) {
            el.classList.remove('d_none');
            el.classList.add('d_block');
        } else {
            el.classList.add('d_none');
        }
    }
    changeableVar.saveBtn.addEventListener('click', onSaveFunc);
}
function onSaveFunc(e) {
    searchEl(e);
    let id = e.target.parentElement.children[0].innerText;
    fetch(`${URL}/users/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            id: id,
            email: changeableVar.emailValue,
            first_name: changeableVar.firstNameValue,
            last_name: changeableVar.lastNameValue,
            avatar: changeableVar.avatarValue
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
      .then((response) => {
          if (response.status === 200) {
              changeUser(e); 
            }
        })
}
function changeUser(event) {
    let user = event.target.parentElement;
    changeableVar.firstName.innerText = changeableVar.firstNameValue;
    changeableVar.lastName.innerText = changeableVar.lastNameValue; 
    changeableVar.emailinp.innerText = changeableVar.emailValue; 
    changeableVar.avatar.src = changeableVar.avatarValue; 
    for (let el of user.children) {
         if (el.classList.contains('d_none') === true) {
            el.classList.remove('d_none');
            el.classList.add('d_block');
         } else {
             el.classList.remove('d_block');
            el.classList.add('d_none');
        }
    }
} 
export {
    onClickNext,
    onClickBack,
    onRemoveUser,
    onUpdateUser
}