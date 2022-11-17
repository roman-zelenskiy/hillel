let back = document.getElementById('back');
let next = document.getElementById('next');
let page = 1;

let xhr = new XMLHttpRequest();
xhr.open('GET', `https://reqres.in/api/users?page=${page}`, false);
xhr.send();
let responseUsers = JSON.parse(xhr.response);

let users = document.getElementsByClassName('users')[0];
let user;
responseUsers.data.forEach(element => {
    user = document.createElement('p');
    user.innerText = `${JSON.stringify(element).slice(2, JSON.stringify(element).length - 1)}`
    users.append(user);
});

function onNextPage() {
    if (page >= 2) {
        return false;
    };
    xhr.open('GET', `https://reqres.in/api/users?page=${++page}`, false);
    xhr.send();
    responseUsers = JSON.parse(xhr.response);
    let i = 0
    for (el of users.children) {
        responseUsers.data.forEach((element, index) => {
            if (i === index) {
                el.innerText = `${JSON.stringify(element).slice(2, JSON.stringify(element).length - 1)}`;
            };
        });
        i++;
    };
    console.log(page);
}
function onBackPage() {
    if (page <= 1) {
        return false;
    };
    xhr.open('GET', `https://reqres.in/api/users?page=${--page}`, false);
    xhr.send();
    responseUsers = JSON.parse(xhr.response);
    let i = 0
    for (el of users.children) {
        responseUsers.data.forEach((element, index) => {
            if (i === index) {
                el.innerText = `${JSON.stringify(element).slice(2, JSON.stringify(element).length - 1)}`;
            };
        });
        i++;
    };
    
    console.log(page);
};
back.addEventListener('click', onBackPage);
next.addEventListener('click', onNextPage);



let sendBtn = document.getElementById('send');
let firstName = document.getElementById('first_name');
let lastName = document.getElementById('last_name');
let email = document.getElementById('email');
let job = document.getElementById('job');
let newUsers = document.getElementsByClassName('new_users')[0];
function onSendForm(e) {
    e.preventDefault();
    let sendForm = new XMLHttpRequest();
    sendForm.open('POST', 'https://reqres.in/api/users', false);
    sendForm.setRequestHeader('content-type', 'application/json');
    sendForm.send(JSON.stringify({
        "Name": `${firstName.value}`,
        "Last Name": `${lastName.value}`,
        "Email": `${email.value}`,
        "Job": `${job.value}`
    }));
    let user;
    user = document.createElement('p');
    user.innerText = `${sendForm.response.slice(2, sendForm.response.length - 1)}`
    newUsers.append(user);
}
sendBtn.addEventListener('click', onSendForm);
  