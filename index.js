const inquirer = require('inquirer')
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');

let engineers = [];
let interns = [];
let manager = [];

const startTeam = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'teamName',
            message: "What will be your team's name?"

        }
    ])
    .then( () => {
        return  Employee.getName();
    }  )
}

startTeam();

const askAnother = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'otro',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(otroData => {
        if (otroData.otro) {
            return new Employee().getName();
        } else {
            return console.log(manager, engineers, interns)
        }
    })
}




module.exports = {manager, interns, engineers, askAnother}
