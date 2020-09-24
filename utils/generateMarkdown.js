// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


          ## Description
                  
          ${data.description}
          ![${data.license}-license](https://img.shields.io/badge/license-${data.license}-blue)


          ## Table of Contents
          
          * [Description](#description)
          * [Installation](#installation)
          * [Usage](#usage)
          * [License](#license)
          * [Contributing](#contributing)
          * [Tests](#tests)
          * [Questions](#questions)
          
          
          ## Installation
          
          ${data.installation}
          
          
          ## Usage
          
          ${data.usage}
          
          
          ## License

          ${data.license}
          Copyright (c) 2020 ${data.author}
          
          
          ## Contributing
          
          ${data.contributing}
          
          
          ## Tests
          
          ${data.tests}
          
          
          ## Questions
          
          ${data.questions}
  
`

}

module.exports = generateMarkdown;
