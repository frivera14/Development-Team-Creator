const inquirer = require('inquirer')
const Employee = require("./Employee");


class Engineer extends Employee{
    constructor({name, id, email}) {
        super( name, id, email )
        this.engGit 
        this.role = "Engineer"

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
                    this.engGit = engGit
                    return this
                })
    }
}

module.exports = Engineer