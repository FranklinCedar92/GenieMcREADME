// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let text;
  switch(license) {
    default:
      text = '';
      break;
    case 'BSD':
      text = '[BSD](https://choosealicense.com/licenses/bsd-2-clause/)';
      break;
    case 'MIT':
      text = '[MIT](https://choosealicense.com/licenses/mit/)';
      break;
    case 'GNU':
      text = '[GNU](https://choosealicense.com/licenses/gpl-2.0/)';
      break;
  };
  return text;
}

// exports data to index.js  to create README
module.exports = projectData => {

  // destructuring data from user input
  const { title, license, description, installation, 
    usage, contributing, tests, github, 
    email} = projectData;
  // template for README
  return `
  # ${title}
  ### Licensing 
    License used: ${renderLicenseLink(license[0])}
  ## Table of Contents
  #### [Description](#description)
  #### [Installation](#installation)
  #### [Usage](#usage)
  #### [Contributing](#contributing)
  #### [Tests](#tests)
  #### [Questions](#questions)
  ### Description
      ${description}
  ### Installation
      ${installation}
  ### Usage
      ${usage}
  ### Contributing
      ${contributing}
  ### Tests
      ${tests}
  ## Questions
      GitHub Profile: ${github}
      Please feel free to contact me at ${email} for additional questions.
  `;
};
