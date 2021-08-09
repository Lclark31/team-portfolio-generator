const inquirer = require('inquirer');
const Employee = require(`./Employee`);
const Manager = require(`./Manager`);
const Intern = require(`./Intern`);
const Engineer = require(`./Engineer`);

const employeeData = [
  {
    type: `input`,
    name: `name`,
    message: `What is your employee's name?`,
  },
  {
    type: `input`,
    name: `id`,
    message: `What is the employee's id number?`,
  },
  {
    type: `input`,
    name: `email`,
    message: `What is the employee's email address?`,
  },
  {
    type: `list`,
    message: `What is the emplyee's role in the company?`,
    name: `role`,
    choices: [`Engineer`, `Intern`, `Manager`],
  },
  {
    type: `confirm`,
    name: `confirmAddEmployee`,
    message: `Would you like to add another employee?`,
    default: true,
  },
];

function CollectEmployeeData() {
  //prettier-ignore
  return inquirer
    .prompt(employeeData)
    .then(newEmployee => {
         newEmployee = new Employee(newEmployee.name, newEmployee.id, newEmployee.email, newEmployee.role)
    })
}

// )
//     .then((newEmployee) => {
//       return new Employee(newEmployee.name, newEmployee.id, newEmployee.email, newEmployee.role);
//     })
//     .then(({ confirmAddEmployee }) => {
//       if (confirmAddEmployee === true) {
//         return new EmployeeEntry().newEmployee();
//       } else {
//         return console.log(`nope`);
//       }
//     });
// ]
