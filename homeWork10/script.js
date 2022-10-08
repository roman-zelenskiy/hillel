function clickFunc() {
    hideText();
    let a = document.getElementsByTagName('button')[0].innerText;
    if (a == 'hide text') {
        document.getElementsByTagName('button')[0].innerText = 'show text';
    } else if (a == 'show text'){
        document.getElementsByTagName('button')[0].innerText = 'hide text';
    }
}
function hideText() {
    let b = document.getElementsByTagName('button')[0].innerText;
    if (b == 'hide text') {
        document.getElementsByTagName('p')[0].hidden = true;
    } else if (b == 'show text'){
        document.getElementsByTagName('p')[0].hidden = false;
    }
}
