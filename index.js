// TODO: Include packages needed for this application
//import libraries 
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
//function that loops through licenseObject to grab the respective badge


const questions = [
    {
        type: "input",
        message: "Enter the project title",
        name: "projectTitle"
    },
    {
        type: "input",
        message: "Enter a description for the project",
        name: "description"
    },
    {
        type: "input",
        message: "Enter installation instructions",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter usage instructions",
        name: "usage"
    },
    {
        type: "list",
        message: "Choose applicable License",
        choices: ["MIT", "APACHE 2.0", "BSD 3", "NONE"],
        name: "license"
    },
    {
        type: "input",
        message: "Enter how people can contribute",
        name: "contribute"
    },
    {
        type: "input",
        message: "Enter tests",
        name: "tests"
    },
    {
        type: "input",
        message: "Enter your github username",
        name: "github"
    },
    {
        type: "input",
        message: "Enter your email",
        name: "email"
    }]


// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
//function init() {}

//array holding inquirer question data 



// Function call to initialize app
//function that creates text to be entered into the readme 
//because this function takes in the response object, it is deconstructed in the parameter for use individually
// function readmeContent({ projectTitle, description, installation, usage, license, contribute, tests, github, email }, badge) {
//     return `#<${projectTitle}>
// ## Description
// ${description}
// ## Table of Contents
// - [Installation](#installation)
// - [Usage](#usage)
// - [License](#license)
// - [Contributing](#contributing)
// - [Tests](#tests)
// - [Questions](#questions)
// ## Installation
// ${installation}
// ## Usage
// ${usage}
// ## License
// ${badge}\b
// ${license}
// ## Contributing
// ${contribute}
// ## Tests
// ${tests}
// ## Questions
// You can contact me at:
// GitHub: https://github.com/${github}
// Email: ${email}
// \t`
// }



//initialize function
function init() {
    //inquirer package
    inquirer.prompt(questions).then(response => {
        //fs.writeFilesync creates the file directory, with the specific content 
        fs.writeFileSync("README.md", generateMarkdown({...response}))
    })
}
//call init 
init();
