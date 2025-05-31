/**
 * Represents a support or contact ticket containing user information and a message.
 * @class
 * @classdesc Encapsulates the details of a ticket including name, email, and message.
 * 
 * @param {string} name - The name of the person submitting the ticket.
 * @param {string} email - The email address of the person submitting the ticket.
 * @param {string} message - The message or content of the ticket.
 */
export class Ticket{
    #name;
    #email;
    #message;
    constructor(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }

    /**
     * Returns the name associated with this instance.
     * @returns {string} The name of the instance.
     */
    getName() {
        return this.#name;
    }

    /**
     * Returns the email address associated with this instance.
     * @returns {string} The email address.
     */
    getEmail() {
        return this.#email;
    }

    /**
     * Retrieves the current message.
     * @returns {string} The message associated with this instance.
     */
    getMessage() {
        return this.#message;
    }
}