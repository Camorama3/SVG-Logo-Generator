const fs = require('fs');
const inquirer = require('inquirer');

const [, , text, textColor, shape, color] = process.argv;

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        default: text || '',
        when: !text
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hex):',
        default: textColor || '',
        when: !textColor
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
        default: shape || 'circle',
        when: !shape
    },
    {
        type: 'input',
        name: 'color',
        message: 'Enter shape color (keyword or hex):',
        default: color || '',
        when: !color
    }
];

inquirer.prompt(questions)
    .then(answers => {
        const { text, textColor, shape, color } = answers;
        generateSVG(text, textColor, shape, color);
    });

function generateSVG(text, textColor, shape, color) {
    let shapeSVG;

    switch (shape) {
        case 'circle':
            shapeSVG = 'circle cx="300" cy="200" r="50" ';
            break;
        case 'triangle':
            shapeSVG = 'polygon points="150,50 100,150 200,150" ';
            break;
        case 'square':
            shapeSVG = 'rect x="50" y="50" width="200" height="200" ';
            break;
        default:
            console.error('Invalid shape:', shape);
            return;
    }

    const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <${shapeSVG} fill="${color}"/>
      <text x="50%" y="50%" fill="${textColor}" text-anchor="middle">${text}</text>
    </svg>
  `;

    fs.writeFile('./examples/logo.svg', svgContent, (err) => {
        if (err) throw err;
        console.log('Generated logo.svg');
    });
}
