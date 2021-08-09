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
];

const managerData = [
  {
    type: `input`,
    name: `officeNumber`,
    message: `What is the manager's office number?`,
  },
];

const engineerData = [
  {
    type: `input`,
    name: `github`,
    message: `What is the engineer's github username?`,
  },
];

const internData = [
  {
    text: `input`,
    name: `school`,
    message: `What school does the intern attend?`,
  },
];

function addEmployee() {
  return inquirer.prompt([
    {
      type: `confirm`,
      name: `confirmAddEmployee`,
      message: `Would you like to add another employee?`,
      default: true,
    },
  ]);
}

function collectManagerData() {
  //prettier-ignore
  return inquirer
    .prompt(managerData)
    .then(data => {
        const newManager = new Manager(data)
        addEmployee();
    })
}

function collectEngineerData() {
  //prettier-ignore
  return inquirer
    .prompt(engineerData)
    .then(data => {
        console.log(data);
        const newEngineer = new Engineer(data)
        addEmployee();
    })
}

function collectInternData() {
  //prettier-ignore
  return inquirer
      .prompt(internData)
      .then(data => {
          const newIntern = Intern(data)
          addEmployee();
      })
}

function collectEmployeeData() {
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
  
      })
}

collectEmployeeData();
