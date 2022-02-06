const inquirer = require('inquirer');
// const Engineer = require('./Engineer');
// const Intern = require('./Intern');

class App {
    startApp() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the Manager's Name (Required)?",
                // validate: nameInput => {
                //     if (nameInput) {
                //         return true;
                //     }
                //     else {
                //         console.log("Please enter the Manager's name");
                //         return false;
                //     }
                // }
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
        ])}
    addEmployee(managerData){
        if (!managerData.employees){
            managerData.employees = [];
        }
        return inquirer.prompt([
            {
                type: 'confirm',
                name: 'addEmployee',
                message: 'Would you like to add an additional employee?',
                default: false
            },
            {
                type: 'list',
                name: 'roles',
                message: 'What type of employee would you like to add?',
                choices: ['Engineer', 'Intern', 'Finish Building Team'],
                when: ({addEmployee})=>{
                    if (addEmployee){
                        return true;
                    } 
                    else {
                        return false;
                    }
                }
            }
        ])
    .then(employeeData => {
        if (employeeData.roles === 'Engineer'){
            createEngineer ();
        }
        else if (employeeData.roles === 'Intern'){
            createIntern ();
        }
        else{
            return employeeDataData;
        }
    });
};

    createEngineer (){
        console.log ("engineer");
    }
    createIntern (){
        console.log ("intern");
    }
}
module.exports = App;