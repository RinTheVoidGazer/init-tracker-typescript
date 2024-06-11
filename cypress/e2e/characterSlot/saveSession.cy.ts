import { validate } from 'uuid';


describe('Tests saving a session', () => {
  it('should intercept session post api call ', () => {
    cy.visit('http://localhost:3000')

    cy.findByLabelText('Session Menu').as('sessionMenu')
    cy.get('@sessionMenu').trigger('mouseover')

    cy.findByLabelText('Save Session').as('saveSessionButton')
    cy.get('@saveSessionButton').click()

    cy.findByRole('textbox', {name: /session name/i}).as('sessionNameInput')
    cy.get('@sessionNameInput').type('test session')
    cy.get('@sessionNameInput').should('have.value', 'test session')


    cy.intercept('POST', '**/api/session').as('saveSession')

    cy.wait(500)
    cy.findByRole('button', {name: /save session/i}).click()

    // cy.wait('@saveSession').its('response.statusCode').should('be.oneOf', [200, 304])

    cy.wait('@saveSession').should(({ request, response }) => {
      console.log('request', request)
      console.log('response', response)
      // expect(request.body).to.include('activeCombatant')

      // cy.wait('@getSearch').its('request.url').should('include', '/search?query=Book')
      
      
      // cy.get('[data-testid="results"]')
      // .should('contain', 'Book 1')
      // .and('contain', 'Book 2')
      
      
      expect(request.url).to.include('/session')
      expect(request.body).to.have.property('activeCombatant')
      expect(request.body).to.have.property('characterInfo')
      expect(request.body).to.have.property('sessionName')
      expect(request.body).to.have.property('turnCount')

      expect(response.body).to.have.property('activeCombatant')
      expect(response.body).to.have.property('characterInfo')
      expect(response.body).to.have.property('sessionName')
      expect(response.body).to.have.property('turnCount')

      
      expect(validate(request.body.characterInfo[0].id)).to.equal(true, 'character id should be a uuid')




      // expect(request.headers).to.have.property('content-type')
      // expect(response && response.body).to.have.property('name', 'Using POST in cy.intercept()')
    })
  })
})