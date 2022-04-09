const inquirer = require('inquirer')
const Employee = require("./Employee");
const elJefe =[]


class Manager extends Employee {
    constructor(name, id, email) {
        super({name , id, email})
        this.number;

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
                    return this.number = number
                })
                .then(() => {
                    elJefe.push([this.name, this.id, this.email, this.number])
                    return console.log(elJefe)
                })
    }
}

module.exports = Manager
