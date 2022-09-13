const utils = {
    reverse: function (source) {
        if ((typeof source) === 'string') {
            let newString = '';
            for (let i = source.length - 1; i >= 0; i--) {
                newString = newString + source[i]
            }
            return newString;
        } else {
            let newArray = [];
            for (let i = source.length - 1; i >= 0; i--) {
                newArray.push(source[i]);
            }
            return newArray;
        }
        
    },
    verifyNumbers: function (source) {
        let arrNumbers = [];
        for (let i = 0; i < source.length; i++) {
            if ((typeof source[i]) === 'number' && source[i] == source[i]) {
                arrNumbers.push(source[i]);
            }
        }
        return arrNumbers;
    },
    getMin: function (source) {
        let min = source[0];
        for (let i = source[0]; i < source.length; i++) {
            if (source[i] < min) {
                min = source[i]
            }
        }
        return min;
    },
    getAverage: function (source) {
        let sumArr = 0;
        let averageValue;
        for (let i = 0; i < source.length; i++) {
            sumArr = sumArr + source[i];    
        }
        averageValue = sumArr / source.length;
        return averageValue;
    },
    getMaxString: function (source) {
        let maxLength = 0;
        for (let i = 0; i < source.length; i++) {
            if (source[i].length > maxLength) {
                maxLength = source[i].length;
                maxString = source[i];
            }
        }
        return maxString;
    }
}
