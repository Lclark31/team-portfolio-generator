const inquirer = require('inquirer');
const Employee = require(`./lib/Employee`);
const Manager = require(`./lib/Manager`);
const Intern = require(`./lib/Intern`);
const Engineer = require(`./lib/Engineer`);

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

const ManagerData = [];

const EngineerData = [];

const internData = [];

function collectManagerData() {}

function collectEngineerData() {}

function collectInternData() {}
//prettier-ignore
return inquirer
    .prompt(employeeData)
    .then(data => {
        const newEmployee = new Employee(data.name, data.id, data.email, data.role)
        
        if (data.role === `Manager`) {
            collectManagerData();
        } else if (data.role === `Engineer`) {
            collectEngineerData();
        } else {
            collectInternData();
        }

         if (data.confirmAddEmployee) {
             CollectEmployeeData();
         }
    })

collectEmployeeData();

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
