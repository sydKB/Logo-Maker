// Packages used 
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("./examples/generateMarkdown");

// Array of questions about logo details
const questions = [
    {
        type: 'input',
        name: 'logoText',
        message: 'Enter up to three characters for your logo: '
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for the text of your logo: '
    },
    {
        type: 'checkbox',
        name: 'logoShape',
        choices: ["Circle", "Triangle", "Square"],
        message: 'Select a shape for your logo background: '
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for your background shape: '
    },
];

// This function writes user data to the chosen file and throws errors
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=> {
        err ? console.log(err) : console.log(data);
    }); 
}

// This function collects the user-prompted data and uses it to write to a file
function init() {
    inquirer.prompt(questions).then(function(answers) {
        const markdownText = generateMarkdown(answers);
        writeToFile(`./examples/logo.txt`, markdownText);
        
    });
}

// Function call for the above
init();