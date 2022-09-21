function getAverage (source) {
    let sumArr = 0;
    let averageValue;
    for (let i = 0; i < source.length; i++) {
        sumArr = sumArr + source[i];    
    }
    averageValue = sumArr / source.length;
    return averageValue;
}
function averageFunc (source) {
    source.forEach(element => {
        element.averageMarks = getAverage(element.marks);
    });
    return source;
};
function studentOut(source) {
    averageFunc(source);
    let arrStudentOut = source.filter(elem => elem.averageMarks < 60);
    return arrStudentOut;
}
function medianValue(source) {
    let value;
    source.forEach(element => {
        element.marks.sort((a, b) => {
            if( a === Infinity ) 
            return 1; 
            else if( isNaN(a)) 
            return -1;
            else 
            return a - b;
        });
        if (element.marks.length % 2 === 0) {
            element.medianMarks = element.marks[element.marks.length / 2]
        } else {
            element.medianMarks = ((element.marks[Math.floor(element.marks.length / 2)]) + (element.marks[Math.ceil(element.marks.length / 2)])) / 2;
        }
    });
    return source
}
function newStudent(source, nam, spec, mark) {
    let student = {
    name: nam,
    specialty: spec,
    marks: mark
    }
    source.push(student);
    return source
}
function topStudent(source) {
    averageFunc(source);
    let newArr = source.map(element => {
        delete element.specialty;
        delete element.marks;
        return element;
    });
    newArr.sort(function (a, b) {
        if (a.averageMarks > b.averageMarks) {
          return -1;
        }
        if (a.averageMarks < b.averageMarks) {
          return 1;
        }
        return 0;
      });
      return newArr;
};
function topFive (source) {
    source = topStudent(test);
    newArray = source.slice(0, 5);
    return newArray;
}

console.log(studentOut(test));
