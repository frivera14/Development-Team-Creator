const inquirer = require('inquirer')
const Employee = require("./Employee");

class Intern extends Employee {
    constructor() {
        super({ name, id, email })
        this.school = school;
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
    }
}

module.exports = Intern