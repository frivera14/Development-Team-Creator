const Employee = require("./Employee");

class Engineer extends Employee{
    constructor() {
        super({ name, id, email })
        this.engGit = github;

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
    }
}

module.exports = Engineer