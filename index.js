const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");



// array of questions for user
const questions = [
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
        name: "table of contents",
        message: "List each section in your readme in a comma-separated list.",
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
        choices: ["MIT","CIA","None"]
    },
    {
        name: "contributing",
        message: "Who contributed to this project?",
        type: "input"
    },
    {
        name: "tests",
        message: "Who contributed to this project?",
        type: "input"
    },    
    {
        name: "questions",
        message: "Any outstanding questions?",
        type: "input"
    },
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

}

// function call to initialize program
init();
