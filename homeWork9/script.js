let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function enterBetween(min, max) {
    if (min == undefined || max == undefined) {
        do {
            min = prompt('enter min');
            max = prompt('enter max');
        } while ((isNaN(+min) || isNaN(+max)) || (min == '' || max == '') || (min > max));
    }    
        return (num) => {
            if (num >= (+min) && num <= (+max)) {
                return num;
            };
        }
 
};




function calculate(inputOperation) {
    if (inputOperation == undefined) {
        do {
            inputOperation = prompt(`Hello!\nEnter operation\n+          -\n*          /\n pow`);
            if (inputOperation == '+') {
                break;
            }
            if (inputOperation == '-') {
                break;
            }
            if (inputOperation == '*') {
                break;
            }
            if (inputOperation == '/') {
                break;
            }
            if (inputOperation == 'pow') {
                break;
            }
        } while (true);
    }
    function sum(a, b) {
        let resultSum = `Operation ${a} + ${b} finished with result ${a + b}\n`;
        return resultSum;
    }
    function diff(a, b) {
        let resultDiff = `Operation ${a} - ${b} finished with result ${a - b}\n`;
        return resultDiff;
    }
    function mult(a, b) {
        let resultMult = `Operation ${a} * ${b} finished with result ${a * b}\n`;
        return resultMult;
    }
    function div(a, b) {
        let resultDiv = `Operation ${a} / ${b} finished with result ${a / b}\n`;
        return resultDiv;
    }
    function pow(a, b) {
        let resultPow = `Operation ${a}^${b} finished with result ${Math.pow(a, b)}\n`;
        return resultPow;
    }
    return function (a) {
        if (a == undefined) {
            do {
                a = prompt('enter a').trim();
            } while (isNaN((+a)) || a == '');
            a = +a;
        }
        return function (b) {
            if (b == undefined) {
                do {
                    b = prompt('enter b').trim();
                } while (isNaN(+b) || b == '');
                b = +b;
                if (inputOperation == '+') {
                    alert(sum(a, b));
                } else if (inputOperation == '-') {
                    alert(diff(a, b));
                } else if (inputOperation == '*') {
                    alert(mult(a, b));
                } else if (inputOperation == '/') {
                    alert(div(a, b));
                } else if (inputOperation == 'pow') {
                    alert(pow(a, b));
                }
            } else {
                if (inputOperation == '+') {
                    alert(sum(a, b));
                } else if (inputOperation == '-') {
                    alert(diff(a, b));
                } else if (inputOperation == '*') {
                    alert(mult(a, b));
                } else if (inputOperation == '/') {
                    alert(div(a, b));
                } else if (inputOperation == 'pow') {
                    alert(pow(a, b));
                }
            } 
        } 
    }
}
let numA = 3;
let numB = 7;
console.log(calculate()()())






const products = [
  {name: 'Product 1', quantity: 10, price: 25},
  {name: 'Product 2', quantity: 3, price: 55},
  {name: 'Product 3', quantity: 22, price: 35},
]


function sortByField(field, sort) {
    if (field == 'quantity') {
        if (sort == 'asc') {
            return (a, b) => {
                if (a.quantity > b.quantity) {
                    return 1;
                }
                if (a.quantity < b.quantity) {
                    return -1;
                }
            };
        } else if (sort == 'desc') {
            return (a, b) => {
                if (a.quantity > b.quantity) {
                    return -1;
                }
                if (a.quantity < b.quantity) {
                    return 1;
                }
            };
        }
    }
    if (field == 'price') {
        if (sort == 'asc') {
            return (a, b) => {
                if (a.price > b.price) {
                    return 1;
                }
                if (a.price < b.price) {
                    return -1;
                }
            };
        } else if (sort == 'desc') {
            return (a, b) => {
                if (a.price > b.price) {
                    return -1;
                }
                if (a.price < b.price) {
                    return 1;
                }
            };
        }
    }
    };

