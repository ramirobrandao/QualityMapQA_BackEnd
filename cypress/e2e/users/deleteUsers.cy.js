/// <reference types="cypress" />

const faker = require('faker')

describe('DELETE method', () => {
  beforeEach(() => {
    const payload = {
      nome: `${faker.name.findName()}`,
      email: `${faker.internet.email()}`,
      password: `${faker.internet.password()}`,
      administrador: `${faker.datatype.boolean()}`
    }
    cy.postUser(payload).as('responsePost')
  })

  it('delete a user', () => {

    cy.get('@responsePost').then(response => {
      cy.deleteUser(response.body._id).should(response => {
        expect(response.status).to.be.equal(200)
        expect(response.body.message).to.be.equal('Registro excluído com sucesso')

        expect(response.body).to.have.property('message');
        expect(response.body.message).to.be.a('string');
      })
    })
  })
})
