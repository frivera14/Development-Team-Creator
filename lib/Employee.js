class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;

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

Employee.prototype = Object.create(Employee.prototype)

module.exports = Employee