// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = dataArr => {
  
}

module.exports = projectData => {

  const { title, description, installation, usage, contributing, tests, github, email, ...header } = projectData;
  
  return `
  # ${header.title}
  #### License 
  ## Table of Contents
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)
  ### Description
      ${header.description}
  ### Installation
      ${header.installation}
  ### Usage
      ${header.usage}
  ### Contributing
      ${header.contributing}
  ### Tests
      ${header.tests}
  ## Questions
      GitHub Profile: ${header.github}
      Please feel free to contact me at ${header.email} for additional questions.
  `;
};
