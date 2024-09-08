/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * **Get all users**.
         *
         * @example cy.getAllUsers()
         */
        getAllUsers(): Cypress.Chainable<null>

        /**
         * **Get a specific user**.
         * 
         * @param id string - The user ID
         * 
         * @example cy.getUserById('0agUnNz8n3eZO901')
         */
        getUserById(id: string): Cypress.Chainable<null>

        /**
         * **Create a user.**
         * 
         * @param payload object - The payload of request body with user infos
         *
         * @example cy.postUser({
                        nome: 'Scott Henderson',
                        email: 'scott@email.com',
                        password: 'pwd123',
                        administrador: true
                    })
         */
        postUser(payload: object): Cypress.Chainable<null>

        /**
         * **Delete a user**.
         *
         * @param id string - The user ID
         *
         * @example cy.deleteUser('0agUnNz8n3eZO901')
         */
        deleteUser(id: string): Cypress.Chainable<undefined>

        /**
         * **Edit a user**.
         *
         * @param id string - The user ID
         * @param payload object - The payload of request body with new user infos
         *
         * @example cy.putUser('0agUnNz8n3eZO901', {
                        nome: 'Mike Stern',
                        email: 'mike@email.com',
                        password: 'pwd123',
                        administrador: false
                    })
         */
        putUser(id: string, payload: object): Cypress.Chainable<undefined>

        /**
         * **Get all products**.
         *
         * @example cy.getAllProducts()
         */
    }
}