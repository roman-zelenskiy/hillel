let obj = {
  a: 'f',
  b: 78,
  c: 'R',
  d: {
    a: {
      a: null,
      b: 'E',
      c: {
        a: true,
        b: 'C',
        c: 'test'
      },
      d: 'U'
    },
    b: {
     a: 'R',
     b: ['S', 4, 6, 'I'],
     c: 0,
    },
    c: ['O'],
    d: null,
    e: 'N'
  }
}


function unknownWord(source) {
    let word = '';
    if (Array.isArray(source)) {
        word = source.reduce((accum, el, i) => {
            if (typeof el == 'string') {
                el == el.toUpperCase() ? accum += el : accum;
                return accum;
            } else {
                return accum += '';
            }
        }, '')
    } else if (typeof source === 'string') {
        for (let i = 0; i < source.length; i++) {
            if (source[i] === source[i].toUpperCase()) {
                word += source[i];
            }
        }
    } else if (source == null) {
        word += '';
    } else {
        for (let el of Object.values(source)) {
            word += unknownWord(el);
        }
    }
    return word;
}
console.log(unknownWord(obj));