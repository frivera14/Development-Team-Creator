class Manager {
    constructor(name ='') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
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

    getNumber() {
        return {
            officeNumber: this.officeNumber
        }
    }

    getRole() {
        return {
           role: Manager
        }
    }
}