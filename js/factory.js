// Factory - similar to Builder
// Design Pattern for similar objects creation
// Example

// Factory class
class HtmlFactory {
    constructor() {}

    createElement(text, type) {
        switch(type) {
            case 'input':
                return new HtmlInput(text, type);
            case 'img':
                return new HtmlImg(text, type);
            case 'h1':
                return new HtmlHone(text, type);
            case 'p':
                return new HtmlP(text, type);
        }
    }
    
}

// Classes
class HtmlInput {
    constructor(text, type) {
        this.text = text;
        this.type = type;
    }

    showElement() {
        const element = document.createElement(this.type);

        element.setAttribute('placeholder', this.text);
        document.querySelector('#app').appendChild(element);
    }    

}

class HtmlImg {
    constructor(text, type) {
        this.text = text;
        this.type = type;
    }

    showElement() {
        const element = document.createElement(this.type);

        element.setAttribute('src', this.text);
        document.querySelector('#app').appendChild(element);
    }
}

class HtmlHone {
    constructor(text, type) {
        this.text = text;
        this.type = type;
    }

    showElement() {
        const element = document.createElement(this.type);

        element.appendChild(document.createTextNode(this.text));
        document.querySelector('#app').appendChild(element);
    }
}

class HtmlP {
    constructor(text, type) {
        this.text = text;
        this.type = type;
    }

    showElement() {
        const element = document.createElement(this.type);

        element.appendChild(document.createTextNode(this.text));
        document.querySelector('#app').appendChild(element);
    }
}

//Main
const htmlBuilder = new HtmlBuilder();
const htmlElements = [];

htmlElements.push(htmlBuilder.createElement('Welcome', 'h1'));
htmlElements.push(htmlBuilder.createElement('This is a test for the Factory Design Pattern', 'p'));
htmlElements.push(htmlBuilder.createElement('url.svg', 'img'));
htmlElements.push(htmlBuilder.createElement('About us', 'h1'));
htmlElements.push(htmlBuilder.createElement('Contact', 'input'));
htmlElements.push(htmlBuilder.createElement('End of the program', 'h1'));

htmlElements.forEach(ele => ele.showElement());