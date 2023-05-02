const Shape = require('./Shape');
const Triangle = require('./Triangle');
const Circle = require('./Circle');
const Square = require('./Square');

describe('Shape', () => {
  test('should set color', () => {
    const shape = new Shape();
    shape.setColor('red');
    expect(shape.color).toBe('red');
  });
});

describe('Triangle', () => {
  test('should render SVG', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

describe('Circle', () => {
  test('should render SVG', () => {
    const circle = new Circle();
    circle.setColor('green');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="green" />');
  });
});

describe('Square', () => {
  test('should render SVG', () => {
    const square = new Square();
    square.setColor('yellow');
    expect(square.render()).toBe('<rect x="30" y="30" width="240" height="140" fill="yellow" />');
  });
});