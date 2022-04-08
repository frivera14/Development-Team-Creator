const inquirer = require('inquirer')

class Employee {
    constructor() {
        this.getName()
        this.getId()
        this.getEmail()
        this.getRole();

    }

     getName() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the employee's name?",
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter a name.')
                        } return false;
                    }
                }
            ])
            .then(answer => {
                return this.name = answer.name
            })
    }

     getId() {
        return inquirer
            .prompt([{
                type: 'input',
                name: 'id',
                message: "What is the id number?",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter a valid id.')
                    } return false;
                }
            }])
    }

     getEmail() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'email',
                    message: "What is your email address?",
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log('Please enter a valid email.')
                        } return false;
                    }
                }
            ])
    }

     getRole() {
        return inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'role',
                    message: "Select a team member's role to add:",
                    choices: ['Manager', 'Engineer', 'Intern']
                }
            ])
            .then(answer => {
                switch (answer) {
                    case 'Manager':
                        return console.log('Yaay')
                    case 'Engineer':
                        return console.log('Yaay')
                    case 'Intern':
                        return console.log('Yaay')
                    default:
                        break;
                }
            })
    }
}




module.exports = Employee