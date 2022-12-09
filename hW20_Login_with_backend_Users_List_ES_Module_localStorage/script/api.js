import { URL } from './getVariable.js';
import {successfulLogin, unSuccessfulLogin} from './loginCallback.js'
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
            return response.json();
        })
        .then((response) => {
            if (!response.token) {
                unSuccessfulLogin(response);
                
            } else {
                successfulLogin();
            };
        })
};

export {
    getRequestLogin
};