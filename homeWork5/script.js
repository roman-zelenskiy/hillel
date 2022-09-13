let a, b, fin;
let arrHistory = [];
function inputNumbers () {
    do {
        a = +prompt('enter number a');
        b = +prompt('enter number b');
        if (isNaN(a) || isNaN(b) || a == false || b == false) {
            alert('NOT CORRECT INPUT')
        }
    } while (isNaN(a) || isNaN(b) || a == false || b == false);
}
function inputNumber () {
    do {
        a = +prompt('enter number');
        if (isNaN(a) || a == false) {
            alert('NOT CORRECT INPUT')
        }
    } while (isNaN(a) || a == false);
} 
function sin (a) {
    let resultSin = `Operation sin(${a}) finished with result ${Math.sin(a)}\n`;
    alert(resultSin);
    arrHistory.push(resultSin);
    return resultSin;
}
function cos (a) {
    let resultCos = `Operation cos(${a}) finished with result ${Math.cos(a)}\n`;
    alert(resultCos);
    arrHistory.push(resultCos);
    return resultCos;
}
function sum (a, b) {
    let resultSum = `Operation ${a} + ${b} finished with result ${a + b}\n`;
    arrHistory.push(resultSum);
    alert(resultSum);
    return resultSum;
}
function diff (a, b) {
    let resultDiff = `Operation ${a} - ${b} finished with result ${a - b}\n`;
    arrHistory.push(resultDiff);
    alert(resultDiff);
    return resultDiff;
}
function mult (a, b) {
    let resultMult = `Operation ${a} * ${b} finished with result ${a * b}\n`;
    arrHistory.push(resultMult);
    alert(resultMult);
    return resultMult;
}function div (a, b) {
    let resultDiv = `Operation ${a} / ${b} finished with result ${a / b}\n`;
    arrHistory.push(resultDiv);
    alert(resultDiv);
    return resultDiv;
}
function pow (a, b) {
    let resultPow = `Operation ${a}^${b} finished with result ${Math.pow(a, b)}\n`;
    arrHistory.push(resultPow);
    alert(resultPow);
    return resultPow;
}
do {
    let inputOperation = prompt(`Hello!\nEnter operation\n+          -\n*          /\nsin    cos    pow\nhistory`);
    switch(inputOperation) {
        case 'sin':
            inputNumber();
            sin(a);
            fin = confirm('Сontinue calculations? Yes - OK or No - Cancel');
            break;
        case 'cos':
            inputNumber();
            cos(a);
            fin = confirm('Сontinue calculations? Yes - OK or No - Cancel');
            break;
        case '+':
            inputNumbers();
            sum(a, b);
            fin = confirm('Сontinue calculations? Yes - OK or No - Cancel');
            break;
        case '-':
            inputNumbers();
            diff(a, b);
            fin = confirm('Сontinue calculations? Yes - OK or No - Cancel');
            break;
        case '*':
            inputNumbers();
            mult(a, b);
            fin = confirm('Сontinue calculations? Yes - OK or No - Cancel');
            break;
        case '/':
            inputNumbers();
            div(a, b);
            fin = confirm('Сontinue calculations? Yes - OK or No - Cancel');
            break;        
        case 'pow':
            inputNumbers();
            pow(a, b)
            fin = confirm('Сontinue calculations? Yes - OK or No - Cancel');
            break;
        case 'history':
            alert(arrHistory);
            fin = confirm('Сontinue calculations? Yes - OK or No - Cancel');    
            break;
    }
} while (fin == true);