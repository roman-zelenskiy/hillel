const SIZE_SMALL = {
    SIZE: 'small', 
    PRICE: 50,
    CALLORIES: 20
};
const SIZE_MEDIUM = {
    SIZE: 'medium', 
    PRICE: 75,
    CALLORIES: 30
};
const SIZE_LARGE = {
    SIZE: 'large', 
    PRICE: 100,
    CALLORIES: 40
};
const THIN = {
    DOUGH: 'thin',
    PRICE: 0,
    CALLORIES: 0
};
const THICK = {
    DOUGH: 'thick',
    PRICE: 0,
    CALLORIES: 10
};
const SAUSAGE = {
    TOPPING: 'sausage',
    PRICE: 20,
    CALLORIES: 5
}
const CHEESE = {
    TOPPING: 'cheese',
    PRICE: 10,
    CALLORIES: 20
}
const PINEAPPLE = {
    TOPPING: 'pineapple',
    PRICE: 15,
    CALLORIES: 5
};
const SEASONING = {
    TOPPING: 'seasoning',
    PRICE: 15,
    CALLORIES: 0
};
const SAUCE = {
    TOPPING: 'sauce',
    PRICE: 20,
    CALLORIES: 5
};

function Pizza(size) {
    this.size = size;
    this.dough = {
        DOUGH: 'thin',
        PRICE: 0,
        CALLORIES: 0
    };
};
Pizza.prototype.changeDough = function (dough) {
    this.dough = dough;
};
Pizza.prototype.addTopping = function (topping) {
    if (!this.topping) {
        this.topping = [];
    }
    this.topping.push(topping);
}
Pizza.prototype.getPrice = function () {
    if (!this.topping) {
        return this.size.PRICE + this.dough.PRICE;
    } else {
        return this.topping.reduce((acc, el) => {
            acc += el.PRICE;
            return acc;
        }, this.size.PRICE + this.dough.PRICE);
    }
}
Pizza.prototype.getCallories = function () {
    if (!this.topping) {
        return this.size.CALLORIES + this.dough.CALLORIES;
    } else {
        return this.topping.reduce((acc, el) => {
            acc += el.CALLORIES;
            return acc;
        }, this.size.CALLORIES + this.dough.CALLORIES);
    }
}
const pizza = new Pizza(SIZE_SMALL);
pizza.addTopping(SAUSAGE);
pizza.addTopping(SAUSAGE);
pizza.addTopping(PINEAPPLE);
pizza.addTopping(SAUSAGE);
pizza.addTopping(SEASONING);

console.log('Total price: ' + pizza.getPrice());
console.log('Total callories: ' + pizza.getCallories());

