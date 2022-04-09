const inquirer = require('inquirer')
const Employee = require("./Employee");
const interns = [];

class Intern extends Employee {
    constructor(name, id, email) {
        super({ name, id, email })
        this.school;
    }

    getSchool() {
        return inquirer
                .prompt([ {
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
                }])
                .then(({school}) => {
                    return this.school = school
                })
    }
}

module.exports = Intern