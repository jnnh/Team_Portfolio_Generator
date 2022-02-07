const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template.js');
const writeFile = require('./utils/generate-site');

const createEngineer = employeeList => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Employee's Name (Required)?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter the Employee's name");
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "What is the Employee's Id Number"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Employee's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the Employee's github name?"
        }
    ])
        .then(({ name, id, email, github }) => {
            const engineer = new Engineer(name, id, email, github);
            employeeList.push(engineer)
            console.log(employeeList);
            return employeeList;
        })
}
const createIntern = employeeList => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Employee's Name (Required)?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter the Employee's name");
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "What is the Employee's Id Number"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Employee's email?"
        },
        {
            type: 'input',
            name: 'school',
            message: "Where does the intern go to school?"
        }
    ])
        .then(({ name, id, email, school }) => {
            const intern = new Intern(name, id, email, school);
            employeeList.push(intern)
            console.log(employeeList);
            return employeeList;
        })
}

const startApp = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Manager's Name (Required)?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter the Manager's name");
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "What is the Manager's Id Number"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Manager's email?"
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the Manager's office number?"
        }
    ])
        .then(({ name, id, email, office }) => {
            const employeeList = []
            const manager = new Manager(name, id, email, office);
            employeeList.push(manager)
            console.log(employeeList);
            return employeeList;
        });
}
const addEmployee = employeeList => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add an additional employee?',
            default: true
        },
        {
            type: 'list',
            name: 'roles',
            message: 'What type of employee would you like to add?',
            choices: ['Engineer', 'Intern', 'Finish Building Team'],
            when: ({ addEmployee }) => {
                if (addEmployee) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    ])
        .then(employeeData => {
            if (employeeData.roles === 'Engineer') {
                return createEngineer(employeeList);
            }
            else if (employeeData.roles === 'Intern') {
                return createIntern(employeeList);
            }
            else {
                return employeeList;
            }
        })
        .then(updatedList => {
            if (!updatedList.length === employeeList.length) {
                addEmployee(updatedList);
            }
            else {
                return updatedList;
            }
        });
};

startApp()
    .then(addEmployee)
    .then(allEmployees => {
        console.log(allEmployees);
    });
    //     return generatePage(employeeList);
    // })
    // .then(pageHTML=> {
    //     console.log(pageHTML);
    //     return writeFile(pageHTML);
    // })

