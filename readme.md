# Logo Generator

Logo Generator is a Node.js command-line application that generates a logo and saves it as an SVG file. It prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.

## Video WalkThrough
[Video Walthough Link](https://drive.google.com/file/d/1SvSiMfkA4GV88jBC1l2aQk8HSXNIIfuY/view?usp=drive_link)

## Application Screenshot
![Screenshot of the Application](/project%20SS.png)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [License](#license)

## Installation

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/dustinii/logo-generator.git
cd logo-generator
```
Install the dependencies using npm:
```bash
npm install
```
## Usage
To generate a logo, run the following command:
```bash
node index.js
```
You will be prompted to enter the logo text, text color, shape, and shape color. Once you provide the input, the application will generate the SVG file named logo.svg in the project directory and log a message to the console indicating that the logo has been generated.

## Tests
To run the tests, use the following command:
```bash
npm test
```
## License
This project is licensed under the MIT License - see the LICENSE file for details.
