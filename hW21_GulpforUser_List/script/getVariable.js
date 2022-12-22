let userTemolate = document.getElementById('user_templ');
const URL = 'https://reqres.in/api';
let messageToUeser = document.createElement('p');
let email = document.getElementById('email');
let password = document.getElementById('password');
let deleteBtn = document.getElementsByClassName('delete');
let changeBtn = document.getElementsByClassName('change');
let form = document.getElementById('form');
let users = document.createElement('div');
users.classList.add('users');
let nextBtn = document.createElement('button');
nextBtn.innerText = 'next';
nextBtn.style.flexBasis = '90%';
let backBtn = document.createElement('button');
backBtn.innerText = 'back';
backBtn.style.flexBasis = '90%';
let changeableVar = {
    page: 1,
    saveBtn: '',
    avatar: '',
    lastName: '',
    firstName: '',
    emailinp: '',
    avatarValue: '',
    lastNameValue: '',
    firstNameValue: '',
    emailValue: ''
}