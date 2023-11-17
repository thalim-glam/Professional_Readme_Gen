function renderLicenseBadge(license) {
  if (license !== "NONE") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license !== "NONE") {
    return `\n* - [License](#license)\n`;
  }
  return '';
}

function renderLicenseSection(license) {
  if (license !== "NONE") {
    return ` ## License 
    This application was licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.projectTitle}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - ${renderLicenseLink(data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseBadge(data.license)} \n
  ${data.license}
  ## Contributing
  ${data.contribute}
  ## Tests
  ${data.tests}
  ## Questions
  You can contact me at:
  GitHub: https://github.com/${data.github} \n
  Email: ${data.email}
  ${renderLicenseSection(data.license)}
  \t

`;
}

module.exports = generateMarkdown;
