class Shape {
    constructor(logoText, textColor, logoShape, shapeColor) {
        this.logoText = logoText;
        this.textColor = textColor;
        this.logoShape = logoShape;
        this.shapeColor = shapeColor;
    }
    setText(logoText) {
        this.logoText = logoText;
    }
    setTextColor(textColor) {
        this.textColor = textColor;
    }
    setShape(logoShape) {
        this.logoShape = logoShape;
    }
    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="180" cy="180" r="80" fill="${this.shapeColor}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="180,50 274,214 86,214" fill="${this.shapeColor}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="100" y="100" width="160" height="160" fill="${this.shapeColor}" />`;
    }
}

module.exports = { 
    Shape,
    Circle,
    Triangle,
    Square,
};