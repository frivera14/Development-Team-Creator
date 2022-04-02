const inquirer = require('inquirer')
const fs = require('fs')

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
        }
    ])
};

const askTeamType = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Select a team member's role to add.",
            choices: ['Engineer', 'Intern']
        }
    ])
    .then( () => {
        if (this.choice === 'Engineer') {
            return addEngineer();
        } else {
            return addIntern();
        }
    })
}

const addEngineer = (engData) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engName',
            message: "Please add the engineer's name.",
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
            message: 'Please add an id number',
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
            message: 'Please add an email address',
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
        {
            type: 'confirm',
            name: 'another',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
    .then(engData => {
        if (another) {
            return askTeamType();
        } else {
            return engData;
        }
    });
};

const addIntern = (internData) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "Please add the intern's name.",
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
            name: 'engEmail',
            message: 'Please add an email address',
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
            name: 'school',
            message: 'Please add the school whic the intern attends',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter a valid school.')
                } return false;
            }
        },
        {
            type: 'confirm',
            name: 'anotherIntern',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
    .then(internData => {
        if (anotherIntern) {
            return askTeamType();
        } else {
            return internData;
        }
    });
};

askManager()
    .then(askTeamType)