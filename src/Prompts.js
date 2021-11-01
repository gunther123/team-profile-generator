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
        validate: nameInput => {
          if (nameInput && nameInput >= 0) {
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

const engineerPrompts = [];

const internPrompts = [];
