// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// inquirer.prompt([
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Describe your project. What was your motivation? Why did you build this project? What problem does it solve? What did you learn?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Input instructions for installing',
        name: 'intall',
    },
    {
        type: 'input',
        message: 'Input instructions for use',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contributors',
    },
    {
        type: 'list',
        message: 'Choose your license:',
        choices: ['Option 1', 'Option 2', 'Option 3'],
        name: 'license'
    },
    {
        type: 'input',
        mnessage: 'Are there any tests for this project?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Enter your Github Username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email',
    },
]
// .then((answers)

// console.log(questions)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', JSON.stringify(data,null,4));
}

// // TODO: Create a function to initialize app
function init() {}

// // Function call to initialize app
init();
