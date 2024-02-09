class Shapes {
    _text = "";
    _textColor = "";
    _color = "";
};

class Triangle {
    constructor(text, textColor, color) {
        this._text = text
        this._textColor = textColor
        this._color = color
    }

    settText(value) {
        this._text = value
    }

    setTextColor(value) {
        this._textColor = value
    }

    setColor(value) {
        this._color = value
    }

    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this._color }" />`
    }
};

class Square {
    constructor(text, textColor, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = color
    }

    render(){
        return null
    }
};

class Circle {
    constructor(text, textColor, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = color
    }

    render(){
        return null
    }
};

module.exports = {
    Triangle,
    Square, 
    Circle
};