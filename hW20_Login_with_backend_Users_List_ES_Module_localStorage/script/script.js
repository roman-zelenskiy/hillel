import { getRequestLogin } from './api.js';
import { testForLogin } from './components.js';
document.addEventListener("DOMContentLoaded", testForLogin);
form.addEventListener('submit', getRequestLogin);
