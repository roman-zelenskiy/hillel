function Student(name, faculty, marks) {
    this.name = name;
    this.faculty = faculty;
    this.marks = marks;
    this.getAvgMarks = getAverage;
    this.getMedianMark = medianValue;
    this.getMaxMark = getMaxMark;
    this.getMinMark = getMinMark;
    this.getTotal = getTotal;
    this.getInfo = getInfo;
}
function getAverage() {
    let sumArr = 0;
    let averageValue;
    for (let i = 0; i < this.marks.length; i++) {
        sumArr = sumArr + this.marks[i];
    }
    averageValue = sumArr / this.marks.length;
    return averageValue;
}
function medianValue() {
    let medianMarks;
        medianMarks = this.marks.sort((a, b) => {
            if( a === Infinity ) 
            return 1; 
            else if( isNaN(a)) 
            return -1;
            else 
            return a - b;
        });
         if (this.marks.length % 2 === 0) {
            medianMarks = this.marks[this.marks.length / 2]
        } else {
            medianMarks = ((this.marks[Math.floor(this.marks.length / 2)]) + (this.marks[Math.ceil(this.marks.length / 2)])) / 2;
        }
    return medianMarks;
}
function getMaxMark() {
    return this.marks.reduce((acc, el) => {
        return acc <= el ? acc = el : acc;
    });
}
function getMinMark() {
    return this.marks.reduce((acc, el) => {
        return acc >= el ? acc = el : acc;
    });
}
function getTotal() {
    return this.marks.reduce((acc, el) => {
        return acc += el; 
    });
}
function getInfo() {
    return {
        name: this.name,
        faculty: this.faculty,
        total: this.getTotal()
    };
}

let student = new Student('John', 'Engineer', [0,200,0,33, 33 , 100,55, 22, 88]);

console.log(student);

