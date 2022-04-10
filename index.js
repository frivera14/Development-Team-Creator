const inquirer = require('inquirer')
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee.js');
const { createHTML } = require('./src/generate-page');
const bosses = []
const engineers = []
const interns = []


const startTeam = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'teamName',
            message: "What will be your team's name?"

        }
    ])
        .then(({ teamName }) => {
            console.log('Welcome Team ' + teamName)
        })
}

startTeam()
    .then(() => {
        return new Employee().getName();
    })
    .then((empleado) => {
        return chooseRole(empleado)
    })


const getEmployee = () => {
    return new Employee().getName()
        .then(chooseRole)
}




const chooseRole = (empleado) => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is this employee's role?",
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])
        .then(({ role }) => {
            switch (role) {
                case 'Manager':
                    return new Manager(empleado).getNumber()
                case 'Engineer':
                    return new Engineer(empleado).getGithub()
                case 'Intern':
                    return new Intern(empleado).getSchool()
                default:
                    break;
            }
        })
        .then(payroll => {
            switch (payroll.role) {
                case 'Manager':
                    return bosses.push(payroll)
                case 'Engineer':
                    return engineers.push(payroll)
                case 'Intern':
                    return interns.push(payroll)
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
                createSite(bosses, engineers, interns);
                return
            }
        })
}

const createSite = (bosses, engineers, interns) => {
    fs.writeFile('./dist/team.html', createHTML(bosses, engineers, interns), err => {
        if (err) throw err
    })
}

