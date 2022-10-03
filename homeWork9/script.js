// 1.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let min = () => {
    let a;
    do {
        a = min = prompt('enter min').trim();
    } while (isNaN(+a) || (a == ''));
    return a;
}
let max = () => {
    let b;
    do {
        b = prompt('enter max').trim();
    } while (isNaN(+b) || (b == ''));;
    return b;
}

function isBetween(min, max) {
    if (typeof min !== 'number' || typeof max !== "number") {
        alert('input not number');
    } else if (min > max) {
        alert('min greater than max')
    } else {
        return (num) => {
            if (num >= (+min) && num <= (+max)) {
                return num;
            };
        };
    }
};




// 2.
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
let inputOperation = () => {
    let valueOperation;
        do {
            valueOperation = prompt(`Hello!\nEnter operation\n+          -\n*          /\n pow`);
            if (valueOperation == '+') {
                break
            }
            if (valueOperation == '-') {
                break;
            }
            if (valueOperation == '*') {
                break;
            }
            if (valueOperation == '/') {
                break;
            }
            if (valueOperation == 'pow') {
                break;
            }
    } while (true);
    return valueOperation;
}
let numberA = () => {
    let a;
    do {
        a = prompt('enter number a').trim();
    } while (isNaN((+a)) || a == '');
    return a = +a;
}
let numberB = () => {
    let b;
    do {
        b = prompt('enter number b').trim();
    } while (isNaN((+b)) || b == '');
    return b = +b;
}
function calculate(operation) {
    return function (a) {
        return function (b) {
            if (operation == '+') {
                alert(sum(a, b));
            } else if (operation == '-') {
                alert(diff(a, b));
            } else if (operation == '*') {
                alert(mult(a, b));
            } else if (operation == '/') {
                alert(div(a, b));
            } else if (operation == 'pow') {
                alert(pow(a, b));
            }
        }
    }
}
console.log(calculate(inputOperation())(numberA())(numberB()))





// 3.
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

