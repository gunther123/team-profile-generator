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
        name: 'employeeID',
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
        name: 'employeeID',
        message: "What is the engineer's employee ID? (Required)",
        validate: nameInput => {
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
        name: 'employeeID',
        message: "What is the intern's employee ID? (Required)",
        validate: nameInput => {
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
            console.log(`You need to enter a valid github username!`);
            return false;
          }
        }
      }
];

export {isEngineerOrInternPrompt, managerPrompts, engineerPrompts, internPrompts}