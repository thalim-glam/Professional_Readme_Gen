//Challenge 9 - Coding Bootcamp

const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

//The prompts for generating README

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
        type: "input",
        message: "Please mention the credits: ",
        name: "credits"
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

// The init function

function init() {

    inquirer.prompt(questions).then(response => {

        fs.writeFileSync("README.md", generateMarkdown({ ...response }))
    })
}
init();
