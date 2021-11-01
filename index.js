const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
const renderHTML = require('./src/htmlTemplate');

const outputFilePath = './dist/index.html'
const outputStylePath = './dist/style.css'
const styleSheetPath = './src/assets/style.css'
const testImagePath = './src/assets/employee-image.png'
const outputTestImagePath = './dist/employee-image.png'

const isEngineerOrInternPrompt = [
    {
        type: 'list',
        name: 'select',
        message: "Do you want to add a new Engineer, Intern or complete your team? (Required)",
        choices: ['Add Engineer', 'Add Intern', 'Complete Team']
      }
]

//Inquirer prompts to get all data for manager obj
const managerPrompts = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name? (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a name for the manager!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the manager's employee ID? (Required)",
        validate: employeeIDInput => {
          if (employeeIDInput && employeeIDInput >= 0) {
            return true;
          } else {
            console.log('You need to enter an employee id!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address? (Required)",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('You need to enter a valid email address!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number? (Required)",
        validate: officeNumberInput => {
          if (officeNumberInput && officeNumberInput >= 0) {
            return true;
          } else {
            console.log('You need to enter a valid office number!');
            return false;
          }
        }
      }
];

//Inquirer prompts to get all data for engineer obj
const engineerPrompts = [
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name? (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a name for the engineer!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the engineer's employee ID? (Required)",
        validate: employeeIDInput => {
          if (employeeIDInput && employeeIDInput >= 0) {
            return true;
          } else {
            console.log('You need to enter an employee id!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email address? (Required)",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('You need to enter a valid email address!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: "What is the engineer's github username? (Required)",
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('You need to enter a valid github username!');
            return false;
          }
        }
      }
];

// Inquirer prompts to get all data for Intern Object
const internPrompts = [
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name? (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a name for the intern!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the intern's employee ID? (Required)",
        validate: employeeIDInput => {
          if (employeeIDInput && employeeIDInput >= 0) {
            return true;
          } else {
            console.log('You need to enter an employee id!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the intern's email address? (Required)",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('You need to enter a valid email address!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'school',
        message: "What school is the intern attending? (Required)",
        validate: schoolInput => {
          if (schoolInput) {
            return true;
          } else {
            console.log(`You need to enter a valid school!`);
            return false;
          }
        }
      }
];
let teamArr = [];

function addTeamMember(){
return inquirer.prompt(isEngineerOrInternPrompt)
.then(promptInput =>{
    switch(promptInput.select){
        case 'Add Engineer':
            addEngineer();
            break;
        case 'Add Intern':
            addIntern();
            break;
        default:
            generateTeamPage();
    }
});
}
function addEngineer(){
    return inquirer.prompt(engineerPrompts)
    .then(promptInput =>{
        const engineer = new Engineer(promptInput.name, promptInput.id, promptInput.email, promptInput.github);
        teamArr.push(engineer);
        addTeamMember();
    })

}
function addIntern(){
    return inquirer.prompt(internPrompts)
    .then(promptInput =>{
        const intern = new Intern(promptInput.name, promptInput.id, promptInput.email, promptInput.school);
        teamArr.push(intern);
        addTeamMember();
    })
}

function createTeam (){
    return inquirer.prompt(managerPrompts)
    .then(promptInput =>{
        const manager = new Manager(promptInput.name, promptInput.id, promptInput.email, promptInput.officeNumber);
        teamArr.push(manager);
        addTeamMember();
    })
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);
        console.log('Page created! Check out the index.html in the dist directory to see it!');
      });
}
function copyStyleSheet(){
    fs.copyFile(styleSheetPath, outputStylePath, function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed!')
});
}
function copyTestImage(){
    fs.copyFile(testImagePath, outputTestImagePath, function (err) {
        if (err){
            console.log('An error occured while copying the folder.')
            return console.error(err)
        }
        console.log('Copy completed!')
    });
}

function generateTeamPage(){
    writeToFile(outputFilePath, renderHTML(teamArr));
    copyStyleSheet();
    copyTestImage();
}

function init(){
    createTeam();
}

init();
