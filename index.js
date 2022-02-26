// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown.js');

// Questions for user input
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
            name: 'contributing',
            message: 'What are the contribution guidelines for this project?'
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
            choices: ['BSD', 'MIT', 'GNU']
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

// pulls information from user input to create README content
questions() 
    .then(userData => {
        console.log(userData);
        const pageXML = generatePage(userData);

        fs.writeFile('./README.md', pageXML, err => {
            if (err) throw new Error(err);

            console.log('Page created!');
        });
    }); 
    