const inquirer = require('inquirer');
const fs = require('fs');
const Triangle = require('./Triangle');
const Circle = require('./Circle');
const Square = require('./Square');

function createLogo() {
  const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: (input) => {
        if (input.length > 3) {
          return 'Please enter up to three characters only.';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (color keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape for the logo:',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (color keyword or hexadecimal number):',
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;

    let shapeObj;
    switch (shape) {
      case 'Triangle':
        shapeObj = new Triangle();
        break;
      case 'Circle':
        shapeObj = new Circle();
        break;
      case 'Square':
        shapeObj = new Square();
        break;
    }

    shapeObj.setColor(shapeColor);

    const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      ${shapeObj.render()}

      <text x="50%" y="50%" fill="${textColor}" font-size="48" text-anchor="middle" dominant-baseline="middle">${text}</text>
    </svg>`;

    fs.writeFile('logo.svg', svg, (err) => {
      if (err) throw err;
      console.log('Generated logo.svg');
    });
  });
}

module.exports = createLogo;