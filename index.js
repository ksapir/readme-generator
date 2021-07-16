//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Template of README and generating README file
const generateReadme = (answers) =>
`# ${answers.title}

## Description:
- ${answers.description}

## Table of Contents:
- [Installation](#installation)
- [Usage](#usage)
- [Visual Sample](#visual)
- [License](#license)
- [Test](#test)
- [Contributors](#contributors)
- [Github](#github)
- [Email](#email)

## Installation:
- ${answers.install}

## Usage:
- ${answers.usage}
- ${answers.link}

## Visual Sample:
![${answers.picdescription}](${answers.filepath})

## License:
- ${answers.license}

## Test:
- ${answers.test}

## Contributors:
- ${answers.contributors}

## Contact:
- Github: ${answers.github}
- Email: ${answers.email}
`


// Array of questions using inquirer pronpt
inquirer.prompt([
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
        message: 'There is an area to display an image of your project. What is the image of?',
        name: 'picdescription',
    },
    {
        type: 'input',
        message: 'Input the file path to the image',
        name: 'filepath',
    },
    {
        type: 'input',
        message: 'Input instructions for installing',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Input instructions for use',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Input the link to the walkthrough video',
        name: 'link',
    },
    {
        type: 'list',
        message: 'Choose your license:',
        choices: ['MIT License', 'BSD License', 'Apache License', 'None'],
        name: 'license'
    },
    {
        type: 'input',
        mnessage: 'Are there any tests for this project?',
        name: 'test',
    },
    {
        type: 'input', 
        message: 'Who contributed to this project?',
        name: 'contributors',
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
]).then((answers) => {
    // Create a function to write README file
    const content = generateReadme(answers);

    fs.writeFile('README.md', content, (err) =>
    err ? console.log('Error!') : console.log('File Created!'))
})

