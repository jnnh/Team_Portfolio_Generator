const inquirer = require('inquirer');
const Employee = require('./Employee');

class App {
    promptUser(){
      return inquirer.prompt({
           type: 'input',
           name: 'managerName',
           message: "What is the Manager's Name (Required)?",
       }) 
    }
}