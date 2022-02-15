// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the name of the project?',
      },
      {
        type: 'input',
        name: 'desc',        
        message: 'Describe the project.',
      },
      {
        type: 'input',
        name: 'install',                                                   
        message: 'How do users install your project?',
      },
      {
        type: 'input',
        name: 'use',                                                        
        message: 'How can users use your project?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'Unlicense'],
      },
      {
        type: 'input',
        name: 'contribute',                                                     
        message: 'How can others contribute to your project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'How do others run tests using your project??',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your Github account name?',
      },
      {
        type: 'input',
        name: 'email',                                              
        message: 'What is your email?',
      },
    ]);
};

// TODO: Create a function to write README file
    const generateREADME = 
    ({title, desc, install, use, license, contribute, tests, github, email,}) => `# ${title}
## Description 
*What is this project for:* 
  ${desc}
## Table of Contents
* [install](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#Tests)  
* [Questions](#Questions)
* [Github](#github)
* [Email](#email)
## Installation
*How to install and run:*
    ${install}
## Usage 
*How to use ${title}:*
  ${use}
## Contributing
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  ${contribute}
## Tests
  *Tests for application and how to run them:*
  ${tests}
 [Demo Video!](https://www.youtube.com/watch?v=NzONWTrZRrQ)
## License
    ${license}
## Questions
*If you have any questions or recommendations please reach out to me at:
<br>
Github: https://github.com/${github} 
<br>
Email: ${email}
    `;


// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((answers) => fs.writeFileSync('./README.md', generateREADME(answers)))
    .then(() => console.log('Successfully Generatored README.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
