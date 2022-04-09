const inquirer = require('inquirer')
const Employee = require("./Employee");
const engineers = [];

class Engineer extends Employee{
    constructor(name, id, email) {
        super({ name, id, email })
        this.engGit 

    }

    getGithub() {
        return inquirer 
                .prompt([ {
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
                }])
                .then(({engGit}) => {
                    return this.engGit = engGit
                })
    }
}

module.exports = Engineer