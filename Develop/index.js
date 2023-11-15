// TODO: Include packages needed for this application
//import libraries 
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
//const questions = [];

const licenseObject = {
  licenseOne:{
  license:"Apache License 2.0",
  badge:"![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)"
  },
  licenseTwo:{
  license:"GNU General Public License v3.0",
  badge:"![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)(https://www.gnu.org/licenses/gpl-3.0)"
  },
  licenseThree:{
  license:"MIT License", 
  badge:"![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)"
  },
  licenseFour:{
  license:"BSD 2-Clause \"Simplified\" License", 
  badge:"![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)(https://opensource.org/licenses/BSD-2-Clause)"
  },
  licenseFive:{
  license:"BSD 3-Clause \"New\" or \"Revised\" License",
  badge:"![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)(https://opensource.org/licenses/BSD-3-Clause)"
  },
  licenseSix:{
  license:"Boost Software License 1.0", 
  badge:"![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)(https://www.boost.org/LICENSE_1_0.txt)"
  },
  licenseSeven:{
  license:"Creative Commons Zero v1.0 Universal", 
  badge:"![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)(http://creativecommons.org/publicdomain/zero/1.0/)"
  },
  licenseEight:{
  license:"Eclipse Public License 2.0", 
  badge:"![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)(https://opensource.org/licenses/EPL-1.0)"
  },
  licenseNine:{
  license:"GNU Affero General Public License v3.0", 
  badge:"![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)(https://www.gnu.org/licenses/agpl-3.0)"
  },
  licenseTen:{
  license:"GNU General Public License v2.0", 
  badge:"![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  },
  licenseEleven:{
  license:"GNU Lesser General Public License v3", 
  badge:"![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)(https://www.gnu.org/licenses/lgpl-3.0)"
  },
  licenseTwelve:{
  license:"Mozilla Public License 2.0", 
  badge:"![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)(https://opensource.org/licenses/MPL-2.0)"
  },
  licenseThirteen:{
  license:"The Unlicense", 
  badge:"![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)(http://unlicense.org/)"}
}

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

const licenses = [];
({licenseOne: {license: licenses[0]},
licenseTwo: {license: licenses[1]},
licenseThree: {license: licenses[2]},
licenseFour: {license: licenses[3]},
licenseFive: {license: licenses[4]},
licenseSix: {license: licenses[5]},
licenseSeven: {license: licenses[6]},
licenseEight: {license: licenses[7]},
licenseNine: {license: licenses[8]},
licenseTen: {license: licenses[9]},
licenseEleven: {license: licenses[10]},
licenseTwelve: {license: licenses[11]},
licenseThirteen: {license: licenses[12]}} = licenseObject)

// TODO: Create a function to initialize app
//function init() {}

//array holding inquirer question data 
const questions = [
  {
      type:"input",
      message: "Enter the project title",
      name: "projectTitle"
  },
  {
      type:"input",
      message: "Enter a description for the project",
      name: "description"
  },
  {
      type:"input",
      message: "Enter installation instructions",
      name: "installation"
  },
  {
      type:"input",
      message: "Enter usage instructions",
      name: "usage"
  },
  {
      type:"list",
      message: "Choose applicable License",
      choices: licenses,
      name: "license"
  },
  {
      type:"input",
      message: "Enter how people can contribute",
      name: "contribute"
  },
  {
      type:"input",
      message: "Enter tests",
      name: "tests"
  },
  {
      type:"input",
      message: "Enter your github username",
      name: "github"
  },
  {
      type:"input",
      message: "Enter your email",
      name: "email"
  }]


// Function call to initialize app
init();
