const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");



// array of questions for user
const questions = [
    {
        type: "input",
        message: "What's the name of your project'?",
        name: "title"
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
        // writeToFile('readme.md', generateMarkdown({...answers}))
        console.log(answers);
    })

}

// function call to initialize program
init();
