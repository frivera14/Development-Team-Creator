class Manager {
    constructor(name ='') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.number = number;

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
            number: this.number
        }
    }

    getRole() {
        return {
           role: Manager
        }
    }
}

module.exports = Manager