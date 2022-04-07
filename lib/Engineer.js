class Engineer {
    constructor(name ='') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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

    getGithub() {
        return {
            github: this.github
        }
    }

    getRole() {
        return {
            role: Engineer
        }
    }
}

module.exports = Engineer