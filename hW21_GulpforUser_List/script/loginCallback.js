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
