class Engineer {
    constructor(name ='') {
        this.engName = name;
        this.engId = id;
        this.engEmail = email;
        this.engGit = github;

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