/// <reference types="cypress" />

describe('POST method', () => {
  const faker = require('faker')
  const payload = {
    nome: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: `${faker.datatype.boolean()}`
  }

  it('create a user and validade the response schema', () => {

    cy.postUser(payload).should(response => {
      expect(response.status).to.be.equal(201)
      expect(response.body.message).to.be.equal('Cadastro realizado com sucesso')

      expect(response.body).to.have.property('message');
      expect(response.body.message).to.be.a('string');
    })
  })
})
