// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (required)',
            validate: titleInput => {
                if (titleInput) {
                    return true
                } else {
                    console.log('Please enter a title!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project',
            validate: descInput => {
                if (descInput) {
                    return true
                } else {
                    console.log('Please enter a description!');
                    return false
                }
            }
        },  
        {
            type: 'input',
            name: 'installation',
            message: 'Provide instuctions for the installation of your project.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage information.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide test instructions.'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license is this project protected under? (required)',
            choices: ['A', 'B', 'C', 'D'],
            validate: licInput => {
                if (licInput) {
                    return true
                } else {
                    console.log('Please choose a license!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username? (required)',
            validate: gitInput => {
                if (gitInput) {
                    return true
                } else {
                    console.log('Please enter your username!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email? (required)',
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    console.log('Please enter your email!');
                    return false
                }
            }
        },
    ])
};

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}  // A

// TODO: Create a function to initialize app
questions() 
    .then(userData => {
        const pageXML = generatePage(userData);

        fs.writeFile('./README.md', pageXML, err => {
            if (err) throw new Error(err);

            console.log('Page created!');
        });
    }); 
    
// B I think this is my "questions" function at the top

// Function call to initialize app
// init(); Do I need this?

/*
promptUser()
  .then(promptProject)
  .then(portfolioData => {  // change this to userData
     const pageHTML = generatePage(portfolioData); // change to pageXML and userData

   A fs.writeFile('./index.html', pageHTML, err => {  // write to './README.md, pageXML, err => ... etc. 
       if (err) throw new Error(err);

       console.log('Page created! Check out index.html in this directory to see it!');
    });
  });
*/