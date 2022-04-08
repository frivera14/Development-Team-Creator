const inquirer = require('inquirer')
const fs = require('fs')
let engineers = [];
let interns = [];
let manager = [];

const askManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name.')
                } return false;
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your id number?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter a valid id.')
                } return false;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email.')
                } return false;
            }
        },
        {
            type: 'input',
            name: 'number',
            message: "What is your office phone number?",
            validate: numberInput => {
                if (numberInput) {
                    return true;
                } else {
                    console.log('Please enter a phone number.')
                } return false;
            }
        },
        {
            type: 'confirm',
            name: 'team',
            message: "Would you like to start adding teammates?",
            default: false
        },
    ])
    .then( (managerData) => {
        manager.push(managerData)
        if (managerData.team) {
            console.log(managerData)
            return askTeamType();
        } else {
            return console.log(manager)
        }
    })
};

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
            return askTeamType();
        } else {
            return console.log(manager, engineers, interns)
        }
    })
}

const askTeamType = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Select a team member's role to add:",
            choices: ['Engineer', 'Intern']
        }
    ])
        .then(({ role }) => {
            if (role === 'Engineer') {
                return addEngineer()
            }
            if (role === 'Intern') {
                return addIntern()
            } else {
                console.log('Error')
            }
        })
}

const addEngineer = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'engName',
            message: "Please add the engineer's name:",
            validate: engNameInput => {
                if (engNameInput) {
                    return true;
                } else {
                    console.log('Please enter a name.')
                } return false;
            }
        },
        {
            type: 'input',
            name: 'engId',
            message: 'Please add an id number:',
            validate: engIdInput => {
                if (engIdInput) {
                    return true;
                } else {
                    console.log('Please enter an id.')
                } return false;
            }
        },
        {
            type: 'input',
            name: 'engEmail',
            message: 'Please add an email address:',
            validate: engEmailInput => {
                if (engEmailInput) {
                    return true;
                } else {
                    console.log('Please enter an email.')
                } return false;
            }
        },
        {
            type: 'input',
            name: 'engGit',
            message: 'Please add a github link',
            validate: engGitInput => {
                if (engGitInput) {
                    return true;
                } else {
                    console.log('Please enter a valid link.')
                } return false;
            }
        },
    ])
        .then((newEng) => {
            engineers.push(newEng)
            return askAnother();
        });
};

const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "Please add the intern's name:",
            validate: internNameInput => {
                if (internNameInput) {
                    return true;
                } else {
                    console.log('Please enter a name.')
                } return false;
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: 'Please add an id number',
            validate: internIdInput => {
                if (internIdInput) {
                    return true;
                } else {
                    console.log('Please enter an id.')
                } return false;
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Please add an email address:',
            validate: internEmailInput => {
                if (internEmailInput) {
                    return true;
                } else {
                    console.log('Please enter an email.')
                } return false;
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'School which the intern attends:',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter a valid school.')
                } return false;
            }
        }
    ])
        .then(internInfo => {
            interns.push(internInfo)
            return askAnother();
        });
};

askManager()

module.exports = {manager, interns, engineers}
