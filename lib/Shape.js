class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        // abstract method to be implemented by child classes
    }
}

module.exports = Shape;