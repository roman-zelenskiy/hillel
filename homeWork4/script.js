let a, b, fin;
let arrHistory = [];
do {
let inputOperation = prompt(`Hello!\nEnter operation\n+          -\n*          /\nsin    cos    pow\nhistory`);
switch(inputOperation) {
    case 'sin':
        do {
            a = +prompt('enter number');
            if (isNaN(a)) {
                alert('is not number');
            }
        } while (isNaN(a) || a == false);
        let resultSin = `Operation sin(${a}) finished with result ${Math.sin(a)}\n`;
        arrHistory.push(resultSin);
        alert(resultSin);
        fin = confirm('Сontinue calculations? Yes - OK or No - Cancel');
        break;
    case 'cos':
        do {
            a = +prompt('enter number');
            if (isNaN(a)) {
                alert('is not number');
            };
        } while (isNaN(a) || a == false);
        let resultCos = `Operation cos(${a}) finished with result ${Math.cos(a)}\n`;
        arrHistory.push(resultCos);
        alert(resultCos);
        fin = confirm('Сontinue calculations? Yes - OK or No - Cancel');
        break;
    case '+':
        do {
            a = +prompt('enter number a');
            b = +prompt('enter number b');
            if (isNaN(a) || isNaN(b)) {
                alert('is not number');
            };
        } while (isNaN(a) || isNaN(b) || a == false || b == false);
        let resultSum = `Operation ${a} + ${b} finished with result ${a + b}\n`;
        arrHistory.push(resultSum);
        alert(resultSum);
        fin = confirm('Сontinue calculations? Yes - OK or No - Cancel');
        break;
    case '-':
        do {
            a = +prompt('enter number a');
            b = +prompt('enter number b');
            if (isNaN(a) || isNaN(b)) {
                alert('is not number');
            };
        } while (isNaN(a) || isNaN(b) || a == false || b == false);
        let resultDiff = `Operation ${a} - ${b} finished with result ${a - b}\n`;
        arrHistory.push(resultDiff);
        alert(resultDiff);
        fin = confirm('Сontinue calculations? Yes - OK or No - Cancel');
        break;
    case '*':
        do {
            a = +prompt('enter number a');
            b = +prompt('enter number b');
            if (isNaN(a) || isNaN(b)) {
                alert('is not number');
                };
        } while (isNaN(a) || isNaN(b) || a == false || b == false);
        let resultMult = `Operation ${a} * ${b} finished with result ${a * b}\n`;
        arrHistory.push(resultMult);
        alert(resultMult);
        fin = confirm('Сontinue calculations? Yes - OK or No - Cancel');
        break;
    case '/':
        do {
            a = +prompt('enter number a');
            b = +prompt('enter number b');
            if (isNaN(a) || isNaN(b)) {
                alert('is not number');
                };
        } while (isNaN(a) || isNaN(b) || a == false || b == false);
        let resultDiv = `Operation ${a} / ${b} finished with result ${a / b}\n`;
        arrHistory.push(resultDiv);
        alert(resultDiv);
        fin = confirm('Сontinue calculations? Yes - OK or No - Cancel');
        break;         
    case 'pow':
        do {
            a = +prompt('enter number a');
            b = +prompt('enter number b');
            if (isNaN(a) || isNaN(b)) {
                alert('is not number');
                };
        } while (isNaN(a) || isNaN(b) || a == false || b == false);
        let resultPow = `Operation ${a}^${b} finished with result ${Math.pow(a, b)}\n`;
        arrHistory.push(resultPow);
        alert(resultPow);
        fin = confirm('Сontinue calculations? Yes - OK or No - Cancel');
        break;
    case 'history':
        alert(arrHistory);
        fin = confirm('Сontinue calculations? Yes - OK or No - Cancel');    
        break;
}
} while (fin == true);

