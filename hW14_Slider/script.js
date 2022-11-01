class Slider {
    constructor(classItemBox, classArrLeft, classArrRight, classFirstSlide, classLastSlide, classCurrentItem, classAddSlideNumber, classAddSlide) {
        this.classItemBox = document.getElementsByClassName(`${classItemBox}`)[0];
        this.classArrLeft = document.getElementsByClassName(`${classArrLeft}`)[0];
        this.classArrRight = document.getElementsByClassName(`${classArrRight}`)[0];
        this.classFirstSlide = document.getElementsByClassName(`${classFirstSlide}`)[0];
        this.classLastSlide = document.getElementsByClassName(`${classLastSlide}`)[0];
        this.classCurrentItem = document.getElementsByClassName(`${classCurrentItem}`)[0];
        this.classAddSlideNumber = document.getElementsByClassName(`${classAddSlideNumber}`)[0];
        this.classAddSlide = document.getElementsByClassName(`${classAddSlide}`)[0];
        this.translate = 0;
    };
    currentItemBorRad() {
        for (let i = 0; i < this.classCurrentItem.children.length; i++) {
            if (700 * i === this.translate) {
                this.classCurrentItem.children[i].style.borderRadius = '100%';
            } else {
                this.classCurrentItem.children[i].style.borderRadius = '0%';
            };
        }
    }
    nextSlide() {
        this.currentItemBorRad();
        let onClickRightArr = () => {
            if (this.translate === this.classItemBox.scrollWidth - 700) {
                this.translate = 0;
                this.classItemBox.style.transform = `translateX(-${this.translate * 0}px)`;
                this.currentItemBorRad();
            } else {
                this.translate = this.translate + 700;
                this.classItemBox.style.transform = `translateX(-${this.translate}px)`;
                this.currentItemBorRad();
            }
        }
        this.classArrRight.addEventListener('click', onClickRightArr);
    }
    prevSlide() {
        this.currentItemBorRad();
        let onClickLefttArr = () => {
            if (this.translate === 0) {
                this.translate = this.classItemBox.scrollWidth - 700;
                this.classItemBox.style.transform = `translateX(-${this.translate}px)`;
                this.currentItemBorRad();
            } else {
                this.translate = this.translate - 700;
                this.classItemBox.style.transform = `translateX(-${this.translate}px)`;
                this.currentItemBorRad();
            }
        }
        this.classArrLeft.addEventListener('click', onClickLefttArr);
    }
    firstSlide() {
        this.currentItemBorRad();
        let onClickFirstSlide = () => {
            this.translate = this.translate * 0;
            this.classItemBox.style.transform = `translateX(-${this.translate}px)`;
            this.currentItemBorRad();
        }
        this.classFirstSlide.addEventListener('click', onClickFirstSlide);
    }
    lastSlide() {
        this.currentItemBorRad();
        let onClickLastSlide = () => {
            this.translate = this.classItemBox.scrollWidth - 700;
            this.classItemBox.style.transform = `translateX(-${this.translate}px)`;
            this.currentItemBorRad();
        }
        this.classLastSlide.addEventListener('click', onClickLastSlide);
    }
    openSlideByIndex() {
        this.currentItemBorRad();
        let onClickCurrentBut = (e) => {
            for (let i = 0; i < this.classCurrentItem.children.length; i++) {
                if (e.target === this.classCurrentItem.children[i]) {
                    this.translate = 700 * i;
                    this.classItemBox.style.transform = `translateX(-${this.translate}px)`;
                    this.currentItemBorRad();
                }
            }
        }
        this.classCurrentItem.addEventListener('click', onClickCurrentBut);
    };
    addSlide() {
        this.currentItemBorRad();
        let onClickAddSlide = (e) => {
            let getItem = document.createElement('div');
            let getCurrentItem = document.createElement('button');
            let getButAddItem = document.createElement('button');
            getButAddItem.innerHTML = '+';
            this.currentItemBorRad();
            getItem.style.background = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
            this.classItemBox.append(getItem);
            this.classAddSlideNumber.append(getButAddItem);
            this.classCurrentItem.append(getCurrentItem);
        }
        this.classAddSlide.addEventListener('click', onClickAddSlide);
    };
    insertSlide() {
        this.currentItemBorRad();
        let onAddSlideNumber = (e) => {
            let getItem;
            let getButAddItem;
            let getCurrentItem;
          for (let i = 0; i < this.classAddSlideNumber.children.length; i++) {
              if (e.target === this.classAddSlideNumber.children[i]) {
                    getItem = document.createElement('div');
                    getButAddItem = document.createElement('button');
                    getCurrentItem = document.createElement('button');
                    getButAddItem.innerHTML = '+';
                    getItem.style.background = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
                    this.classItemBox.children[i].before(getItem);
                    this.classAddSlideNumber.append(getButAddItem);
                    this.classCurrentItem.append(getCurrentItem);
                }
            }
        }
        this.classAddSlideNumber.addEventListener('click', onAddSlideNumber)
    };
};


const slider = new Slider('item_box', 'arr_left' ,'arr_right', 'first_slide', 'last_slide', 'current_item', 'add_slide_number', 'add_slide');
slider.nextSlide();
slider.prevSlide();
slider.firstSlide();
slider.lastSlide();
slider.openSlideByIndex();
slider.addSlide();
slider.insertSlide();