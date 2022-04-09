const inquirer = require('inquirer')

class Employee {
    constructor() {
        this.name
        this.id
        this.email 

    }

     getName() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'teamName',
                    message: "What is the employee's name?",
                    validate: teamNameInput => {
                        if (teamNameInput) {
                            return true;
                        } else {
                            console.log('Please enter a name.')
                        } return false;
                    }
                }
            ])
            .then(({teamName}) => {
                this.name = teamName
                return this.getId()
            })
    }

      getId() {
        return inquirer
            .prompt([{
                type: 'input',
                name: 'id',
                message: "What is the id number?",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter a valid id.')
                    } return false;
                }
            }])
            .then(({id}) => {
                this.id = id
                return this.getEmail()
            })
    }

     getEmail() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'email',
                    message: "What is your email address?",
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log('Please enter a valid email.')
                        } return false;
                    }
                }
            ])
            .then(({email}) => {
                return this.email = email
            })
    }
}




module.exports = Employee