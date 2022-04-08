class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = ['Manager', 'Engineer', 'Intern'];

    }

    getName() {
        return {
            name: this.name
        }
    }

    getId() {
        return {
            id: this.id
        }
    }

    getEmail() {
        return {
            email: this.email
        }
    }

    // getRole() {
    //     return {
    //         role: Employee
    //     }
    // }
}




module.exports = Employee