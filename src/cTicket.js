class Ticket{
    #name;
    #email;
    #message;
    constructor(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }

    getName() {
        return this.#name;
    }

    getEmail() {
        return this.#email;
    }

    getMessage() {
        return this.#message;
    }
}