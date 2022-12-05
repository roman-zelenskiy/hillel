let userTemolate = document.getElementById('user_templ');
const URL = 'https://reqres.in/api';
let messageToUeser = document.createElement('p');
let email = document.getElementById('email');
let password = document.getElementById('password');
let deleteBtn = document.getElementsByClassName('delete');
let changeBtn = document.getElementsByClassName('change');
let form = document.getElementById('form');
let users = document.createElement('div');
let user;
let emailValue;
let firstNameValue;
let lastNameValue;
let avatarValue;
let saveBtn;
let emailinp;
let firstName;
let lastName;
let avatar;
users.classList.add('users');
let nextBtn = document.createElement('button');
nextBtn.innerText = 'next';
nextBtn.style.flexBasis = '90%';
let backBtn = document.createElement('button');
backBtn.innerText = 'back';
backBtn.style.flexBasis = '90%';
let page = 1;
form.addEventListener('submit', getRequestLogin);
nextBtn.addEventListener('click', onClickNext);
backBtn.addEventListener('click', onClickBack);
function getRequestLogin(e) {
    e.preventDefault();
    fetch(`${URL}/login`, {
        method: 'POST',
        body: JSON.stringify({
            email: email.value,
            password: password.value
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            if (Object.keys(response)[0] !== 'token') {
                unSuccessfulLogin(response);
            } else {
                successfulLogin(response);
            };
        })
};
function successfulLogin(page) {
    fetch(`${URL}/users?page=${page}`)
        .then(response => response.json())
        .then((response) => {
            getUsers(response.data, userTemolate.innerHTML);
        });
}
function unSuccessfulLogin(error) {
    messageToUeser.innerText = Object.values(error)[0];
    document.body.append(messageToUeser);
}
function getUsers(response, template) {
    form.hidden = true;
    let result = '';
    response.forEach(user => {
        result += template;
        Object.keys(user).forEach(key => {
            result = result.replaceAll(`{{${key}}}`, user[key]);
        });
    });
    users.innerHTML = result;
    users.append(backBtn, nextBtn);
    document.body.append(users)
    for (btn of deleteBtn) {
        btn.addEventListener('click', onRemoveUser);
    };
    for (btn of changeBtn) {
        btn.addEventListener('click', onUpdateUser);
    };
}
function onClickNext() {
    ++page;
    if (page > 2) {
        page = 2;
    }   
    successfulLogin(page);
}
function onClickBack() {
    --page;
    if (page < 1) {
        page = 1;
    } 
    successfulLogin(page);
}
function onRemoveUser(e) {
    let id = e.target.parentElement.parentElement.children[0].innerText;
    user = e.target.parentElement.parentElement;
    fetch(`${URL}/users/${id}`, {
        method: 'DELETE'
    })
        .then((response) => {
            if (response.status === 204) {
                user.remove()
        }
    }) 
}
function onUpdateUser(e) {
    user = e.target.parentElement.parentElement;
    for (el of user.children) {
        if (el.className.includes('save_btn') === true) {
            saveBtn = el;
        }
        if (el.classList.contains('d_none') === true) {
            el.classList.remove('d_none');
            el.classList.add('d_block');
        } else {
            el.classList.add('d_none');
        }
    }
    saveBtn.addEventListener('click', onSaveFunc);
}
function onSaveFunc(e) {
    searchEl(e);
    let id = e.target.parentElement.children[0].innerText;
    fetch(`${URL}/users/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            id: id,
            email: emailValue,
            first_name: firstNameValue,
            last_name: lastNameValue,
            avatar: avatarValue
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
      .then((response) => {
          if (response.status === 200) {
              changeUser(); 
            }
        })
}
function changeUser() {
    firstName.innerText = firstNameValue;
    lastName.innerText = lastNameValue; 
    emailinp.innerText = emailValue; 
    avatar.src = avatarValue; 
    for (el of user.children) {
         if (el.classList.contains('d_none') === true) {
            el.classList.remove('d_none');
            el.classList.add('d_block');
         } else {
             el.classList.remove('d_block');
            el.classList.add('d_none');
        }
    }
} 
function searchEl(event) {
    user = event.target.parentElement;
    for (el of user.children) {
        if (el.className.includes('firstname_value') === true) {
            firstNameValue = el.value;
        }
        if (el.className.includes('lastname_value') === true) {
            lastNameValue = el.value;
        }
        if (el.className.includes('emailvalue') === true) {
            emailValue = el.value;
        }
        if (el.className.includes('avatarvalue') === true) {
            avatarValue = el.value;
        }
         if (el.className.includes('first_name') === true) {
            firstName = el;
        }
        if (el.className.includes('last_name') === true) {
            lastName = el;
        }
        if (el.className.includes('email_inp') === true) {
            emailinp = el;
        }
        if (el.className.includes('avatar') === true) {
            avatar = el;
        }
    }
}