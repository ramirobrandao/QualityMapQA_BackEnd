/// <reference types="cypress" />

describe('POST method', () => {
  const faker = require('faker')
  const payload = {
    nome: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: `${faker.datatype.boolean()}`
  }

  const payloadexistingemail = {
    nome: "Ramiro Brandão",
    email: "ramirobrandao@qa.com",
    password: "123456",
    administrador: "true"
  }

  it('create a user and validade the response schema', () => {

    cy.postUser(payload).should(response => {
      expect(response.status).to.be.equal(201)
      expect(response.body.message).to.be.equal('Cadastro realizado com sucesso')

      expect(response.body).to.have.property('message');
      expect(response.body.message).to.be.a('string');
    })
  })

  it('create user with existing email', () => {
      cy.postUser(payloadexistingemail).should(response => {
      expect(response.status).to.be.equal(400)
      expect(response.body.message).to.be.equal('Este email já está sendo usado')

      expect(response.body).to.have.property('message');
      expect(response.body.message).to.be.a('string');
    })
  })
})
