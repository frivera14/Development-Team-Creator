const inquirer = require('inquirer')
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');


const startTeam = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'teamName',
            message: "What will be your team's name?"

        }
    ])
}

startTeam()
.then( () => {
    return  new Employee().getName();
})
.then(askRole)


const getEmployee = () => {
    return new Employee().getName()
    .then(chooseRole)
}


async function askRole()  {
    try {
       new Employee
    } catch (error) {
        console.log(error)
        
    }
    finally {
         chooseRole();
    }
}

const chooseRole = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is this employee's role?",
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])
    .then(({role}) => {
        switch (role) {
            case 'Manager':
                return new Manager().getNumber()
            case 'Engineer':
                return new Engineer().getGithub()
            case 'Intern':
                return new Intern().getSchool()
            default:
                break;
        }
    })
    .then(askAnother)
}


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
            return getEmployee()
        } else {
            return console.log()
        }
    })
}





