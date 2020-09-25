const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");



// array of questions for user
const questions = [
    {
        name: "author",
        message: "What's your name?",
        type: "input"
    },
    {
        name: "title",
        message: "What's the name of your project'?",
        type: "input"
    },
    {
        name: "description",
        message: "Provide a summary of your project",
        type: "input"
    },
    {
        name: "installation",
        message: "Describe any steps required for installation.",
        type: "input"
    },
    {
        name: "usage",
        message: "Describe any usage restrictions",
        type: "input"
    },
    {
        name: "license",
        message: "How will your work be licensed?",
        type: "list",
        choices: ["MIT","LGPL-3.0","MPL-2.0","AGPL-3.0","The Unlicense","Apache License 2.0","GPL-3.0", "None"]
    },
    {
        name: "contributing",
        message: "Describe the process for submissions or pull requests.",
        type: "input"
    },
    {
        name: "tests",
        message: "Explain how to run the automated tests for this system.",
        type: "input"
    },   
    {
        name: "github",
        message: "What's your github username?",
        type: "input"
    }, 
    {
        name: "email",
        message: "What email address should questions be directed to?",
        type: "input"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log("Generating readme");
        writeToFile('readme.md', generateMarkdown({...answers}));
        console.log(answers);
    })
    .catch((err) => {
        console.log(err)
    });

}

// function call to initialize program
init();
