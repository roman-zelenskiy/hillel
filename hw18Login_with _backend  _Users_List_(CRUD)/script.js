let email = document.getElementById('email');
let password = document.getElementById('password');
let logInBtn = document.getElementById('login_btn');
let form = document.getElementById('form');
let body = document.getElementsByTagName('body')[0];
let messageToUeser = document.createElement('p');
let users = document.createElement('div');
users.classList.add('users');
let user;
let spanValue;
let editBtn;
let deleteBtn;
const URL = 'https://reqres.in/api';

function onSendForm(e) {
    e.preventDefault();
    let sendLogIn = new XMLHttpRequest();
    sendLogIn.open('POST', `${URL}/login`);
    sendLogIn.setRequestHeader('content-type', 'application/json');
    sendLogIn.onload = function (e) {
        if (e.currentTarget.status === 400) {
            messageToUeser.innerText = Object.values(JSON.parse(sendLogIn.response));
            form.append(messageToUeser);
            return false;
        }
        if (e.currentTarget.status >= 200 && e.currentTarget.status <= 299) {
            form.classList.add('d-none');
            let requestUsers = new XMLHttpRequest;
            requestUsers.open('GET', `${URL}/users?page=1`, false);
            requestUsers.send();
            let responseUsers = JSON.parse(requestUsers.response);
            body.append(users);
            responseUsers.data.forEach(element => {
                user = document.createElement('p');
                editBtn = document.createElement('button');
                editBtn.classList.add('edit_btn');
                editBtn.innerText = 'edit';
                deleteBtn = document.createElement('button');
                deleteBtn.classList.add('delete_btn');
                deleteBtn.innerText = 'delete';
                Object.values(element).forEach((el, index, arr) => {
                    spanValue = document.createElement('p');
                    if (index === arr.length - 1) {
                        spanValue = document.createElement('img');
                        spanValue.classList.add('photo');
                        spanValue.src = `${el}`;
                        user.append(spanValue);
                        return false;
                    }
                    if (index === 0) {
                        spanValue.classList.add('id');
                    };
                    if (index === 1) {
                        spanValue.classList.add('email');
                    };
                    if (index === 2) {
                        spanValue.classList.add('first_name');
                    };
                    if (index === 3) {
                        spanValue.classList.add('last_name');
                    };
                    spanValue.innerText = el;
                    user.append(spanValue);
                })
                user.style.border = '2px solid black';
                user.append(editBtn, deleteBtn);
                users.append(user);
                editBtn.addEventListener('click', onEditUser);
                deleteBtn.addEventListener('click', onDeleteUser);
            }); 
        };
    };
    sendLogIn.send(JSON.stringify({
        email: email.value,
        password: password.value
    }));
}
function onEditUser(e) {
    let userChildren = e.target.parentElement.children;
    let saveBtn = document.createElement('button');
    saveBtn.classList.add('save_btn');
    e.target.hidden = true;
    saveBtn.innerText = 'save';
    let editInput;
    for (let j = 0; j < userChildren.length; j++) {
        if (userChildren[j].className === 'email' || userChildren[j].className === 'first_name' || userChildren[j].className === 'last_name' || userChildren[j].className === 'photo') {
            editInput = document.createElement('input');
            editInput.value = userChildren[j].innerText;
            userChildren[j].after(editInput);
        }
        if (userChildren[j].className === 'email' || userChildren[j].className === 'first_name' || userChildren[j].className === 'last_name') {
            userChildren[j].style.display = 'none';
        }
        if (userChildren[j].className === 'photo') {
            editInput.value = userChildren[j].src;
            editInput.classList.add('edit_photo');
        }
        if (userChildren[j].className === 'email') {
            editInput.classList.add('edit_email');
        }
        if (userChildren[j].className === 'first_name') {
            editInput.classList.add('edit_first_name');
        }
        if (userChildren[j].className === 'last_name') {
            editInput.classList.add('edit_last_name');
        }
        if (userChildren[j].className === 'delete_btn') {
            userChildren[j].hidden = true;
        }
    }
    e.target.parentElement.append(saveBtn);
    saveBtn.addEventListener('click', onSeveСhangesUser); 
}
function onSeveСhangesUser(e) {
    let userChildren = e.target.parentElement.children;
    let id = (() => {
        for (el of userChildren) {
            if (el.className === 'id') {
                return el.innerText;
            };
        };
    })();
      let emailEdit = (() => {
        for (el of userChildren) {
            if (el.className === 'edit_email') {
                return el;
            };
        };
    })();
      let firstNameEdit = (() => {
        for (el of userChildren) {
            if (el.className === 'edit_first_name') {
                return el;
            };
        };
    })();
      let lastNameEdit = (() => {
        for (el of userChildren) {
            if (el.className === 'edit_last_name') {
                return el;
            };
        };
    })();
      let photoEdit = (() => {
        for (el of userChildren) {
            if (el.className === 'edit_photo') {
                return el;
            };
        };
    })();
    let requestToUpdate = new XMLHttpRequest();
    requestToUpdate.open('PATCH', `${URL}/users/${id}`);
    requestToUpdate.setRequestHeader('content-type', 'application/json');
    requestToUpdate.onload = function (e) {
        if (e.currentTarget.status === 200) {
            for (el of userChildren) {
                if (el.className === 'email') {
                    el.innerText = emailEdit.value;
                    el.style.display = 'block';
                };
                if (el.className === 'first_name') {
                    el.innerText = firstNameEdit.value;
                    el.style.display = 'block';
                };
                if (el.className === 'last_name') {
                    el.innerText = lastNameEdit.value;
                    el.style.display = 'block';
                };
                if (el.className === 'photo') {
                    el.src = photoEdit.value;
                    el.style.display = 'block';
                };
                if (el.localName === 'input' || el.className === 'save_btn') {
                    el.hidden = true;
                }
                if (el.className === 'edit_btn' || el.className === 'delete_btn') {
                    el.hidden = false;
                }
            };
        } 
    }
    requestToUpdate.send(JSON.stringify({
        email: emailEdit.value,
        first_name: firstNameEdit.value,
        last_name: lastNameEdit.value,
        avatar: photoEdit.value
    })); 
}
function onDeleteUser(ev) {
    let userChildren = ev.target.parentElement.children;
    let user = ev.target.parentElement;
    let id = (() => {
        for (el of userChildren) {
            if (el.className === 'id') {
                return el.innerText;
            };
        };
    })();
    let deleteRequest = new XMLHttpRequest();
    deleteRequest.open('DELETE', `${URL}/users/${id}`);
    deleteRequest.onload = (e) => {
        if (e.currentTarget.status === 204) {
            user.remove();
        }
    }
    deleteRequest.send();
}
form.addEventListener('submit', onSendForm);
