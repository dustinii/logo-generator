const Shape = require('./Shape');

class Square extends Shape {
  render() {
    return `<rect x="30" y="30" width="240" height="140" fill="${this.color}" />`;
  }
}

module.exports = Square;