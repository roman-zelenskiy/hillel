function getUsers(response, template) {
    let result = '';
    response.forEach(user => {
        result += template;
        Object.keys(user).forEach(key => {
            result = result.replaceAll(`{{${key}}}`, user[key]);
        });
    });
    users.innerHTML = result;
    document.body.append(users)
}