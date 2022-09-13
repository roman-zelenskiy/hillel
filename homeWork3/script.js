let inputOperation = prompt(`Hello!\nEnter operation\n+          -\n*          /\nsin    sin   cos    cos    pow`);
if (inputOperation == 'sin') {
    let a = prompt('Enter number');
    let aToNumber = Number(a);
    alert('sin= ' + Math.sin(aToNumber));
} else if (inputOperation == 'cos') {
    let a = prompt('Enter number');
    let aToNumber = Number(a);
    alert('cos= ' + Math.cos(aToNumber));
} else {
    let a = prompt('Enter number a');
    let b = prompt('Enter number b');
    let aToNumber = Number(a);
    let bToNumber = Number(b);
    if (inputOperation == '+') {
        alert('sum= ' + (aToNumber + bToNumber));
    } 
    if (inputOperation == '-') {
        alert('diff= ' + (aToNumber - bToNumber));
    }
    if (inputOperation == '*') {
        alert('mult= ' + (aToNumber * bToNumber));
    }
    if (inputOperation == '/') {
        alert('div= ' + (aToNumber / bToNumber));
    }
    if (inputOperation == 'pow') {
        alert('pow(a^b)= ' + Math.pow(aToNumber, bToNumber));
}
}

