const inquirer = require('inquirer')
const Employee = require("./Employee");


class Manager extends Employee {
    constructor({name, id, email}) { 
        super(name, id, email)
        this.number
        this.role = "Manager"
    


    }

     getNumber() {
        return inquirer
                .prompt([
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
                    }
                ])
                .then(({number}) => {
                    this.number = number
                    return this
                })
    }
}

module.exports = Manager
