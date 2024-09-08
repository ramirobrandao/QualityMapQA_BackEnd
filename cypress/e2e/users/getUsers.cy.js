/// <reference types="cypress" />

describe('GET method', () => {

  it('get all users', () => {

    cy.getAllUsers().should(response => {
      expect(response.status).to.be.equal(200)
      expect(response.body.quantidade).to.be.greaterThan(0)
    })
  })

  it('get a user id', () => {
    cy.getAllUsers().then(responseAllUsers => {
      cy.getUserById(responseAllUsers.body.usuarios[0]._id).as('responseById')

      cy.get('@responseById').should(response => {
        expect(response.status).to.be.equal(200)
        expect(response.body.nome).to.be.equal(responseAllUsers.body.usuarios[0].nome)
        expect(response.body.email).to.be.equal(responseAllUsers.body.usuarios[0].email)
        expect(response.body.password).to.be.equal(responseAllUsers.body.usuarios[0].password)
        expect(response.body.administrador).to.be.equal(responseAllUsers.body.usuarios[0].administrador)
      })
    })
  })

  it('get a user not found', () => {
    cy.request({
      method: 'GET',
      url: `https://serverest.dev/usuarios/11111111111`,
      failOnStatusCode: false 
    }).as('responseById');
  
    cy.get('@responseById').should(response => {
      expect(response.status).to.be.equal(400);
      expect(response.body.message).to.be.equal('Usuário não encontrado');
    });
  });    

})