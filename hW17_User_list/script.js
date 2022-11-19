let back = document.getElementById('back');
let next = document.getElementById('next');
let page = 1;

let xhr = new XMLHttpRequest();
xhr.open('GET', `https://reqres.in/api/users?page=${page}`, false);
xhr.send();
let responseUsers = JSON.parse(xhr.response);

let users = document.getElementsByClassName('users')[0];
let user;
let spanValue;
responseUsers.data.forEach(element => {
    user = document.createElement('p');
    user.style.display = 'flex';
    Object.values(element).forEach((el, index, arr) => {
        spanValue = document.createElement('p');
        if (index === arr.length - 1) {
            spanValue = document.createElement('img');
            spanValue.src = `${el}`;
            user.append(spanValue);
            return false;
        }
        spanValue.innerText = el;
        user.append(spanValue);
    })
    user.style.border = '2px solid black';
    users.append(user);
});
function onNextPage(e) {
    if (page >= 2) {
        return false;
    };
    xhr.open('GET', `https://reqres.in/api/users?page=${++page}`, false);
    xhr.send();
    responseUsers = JSON.parse(xhr.response);
    for (let k = 0; k < users.children.length; k++){
        for (let j = 0; j < users.children[k].children.length; j++) {
            responseUsers.data.forEach((el, index) => {
                Object.values(el).forEach((elem, ind, arr) => {
                    if (k === index && j === ind) {
                        if (j === users.children[k].children.length - 1) {
                            users.children[k].children[j].src = elem;
                        }
                        users.children[k].children[j].innerText = elem;
                    }   
                })
            });
        };
   }
};
function onBackPage() {
   if (page <= 1) {
        return false;
    };
    xhr.open('GET', `https://reqres.in/api/users?page=${--page}`, false);
    xhr.send();
    responseUsers = JSON.parse(xhr.response);
    for (let k = 0; k < users.children.length; k++){
        for (let j = 0; j < users.children[k].children.length; j++) {
            responseUsers.data.forEach((el, index) => {
                Object.values(el).forEach((elem, ind, arr) => {
                    if (k === index && j === ind) {
                        if (j === users.children[k].children.length - 1) {
                            users.children[k].children[j].src = elem;
                        }
                        users.children[k].children[j].innerText = elem;
                    }   
                })
            });
        };
    }
};
back.addEventListener('click', onBackPage);
next.addEventListener('click', onNextPage);



let sendBtn = document.getElementById('send');
let firstName = document.getElementById('first_name');
let lastName = document.getElementById('last_name');
let email = document.getElementById('email');
let job = document.getElementById('job');
let newUsers = document.getElementsByClassName('new_users')[0];
let responseNewUsers;
function onSendForm(e) {
    e.preventDefault();
    let sendForm = new XMLHttpRequest();
    sendForm.open('POST', 'https://reqres.in/api/users', false);
    sendForm.setRequestHeader('content-type', 'application/json');
    sendForm.send(JSON.stringify({
        name: firstName.value,
        last_name: lastName.value,
        email: email.value,
        job: job.value
    }));
    let user;
    let spanValue;
    responseNewUsers = JSON.parse(sendForm.response);
    user = document.createElement('p');
    Object.values(responseNewUsers).forEach((el, index, arr) => {
        spanValue = document.createElement('p');
        spanValue.innerText = el;
        user.append(spanValue);
    })
    user.style.display = 'flex';
    user.style.border = '2px solid black';
    newUsers.append(user);
}
sendBtn.addEventListener('click', onSendForm);
  