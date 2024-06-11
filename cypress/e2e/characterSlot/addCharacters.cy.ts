// Add player char
// Add enemy
// 


describe('Tests adding characters', () => {
  // QUESTION: how to type this? I couldn't figure out how to enforce they be one of the values from the CharacterData obj
  const makeCharacter = (
    name: string,
    ac: string,
    init: string,
    curHp: string,
    maxHp: string,
    isEnemy = false
  ) => {
    // cy.findByRole('button', { name: /add character/i }).as('addCharButton') // QUESTION: addCharacterButton did not work but that's the name assigned in the Fab
    // cy.get('@addCharButton').click()

    // Get empty textbox and input character name
    cy.findAllByDisplayValue('').first().as('emptyCharNameInput')
    cy.get('@emptyCharNameInput').type(name)

    // Check that a textbox has the character name
    cy.findByDisplayValue(name).as('charNameInput')
    cy.get('@charNameInput').should('have.value', name)

    // Find the correct Character Slot
    cy.findByDisplayValue(name)
      .parents('.characterSlot')
      .within(() => {
        // AC Input
        cy.findByRole('spinbutton', { name: /armor class/i }).as('charACInput')
        cy.get('@charACInput').clear()
        cy.get('@charACInput').type(ac)
        cy.get('@charACInput').should('have.value', ac)

        // Init Input
        cy.findByRole('spinbutton', { name: /initiative/i }).as('charInitInput')
        cy.get('@charInitInput').clear()
        cy.get('@charInitInput').type(init)
        cy.get('@charInitInput').should('have.value', init)

        // Cur HP Input
        cy.findByRole('spinbutton', { name: /current hp/i }).as(
          'charCurHpInput'
        )
        cy.get('@charCurHpInput').clear()
        cy.get('@charCurHpInput').type(curHp)
        cy.get('@charCurHpInput').should('have.value', curHp)

        // Max HP
        cy.findByRole('spinbutton', { name: /max hp/i }).as('charMaxHpInput')
        cy.get('@charMaxHpInput').clear()
        cy.get('@charMaxHpInput').type(maxHp)
        cy.get('@charMaxHpInput').should('have.value', maxHp)

        // Enemy Checkbox
        if (isEnemy) {
          cy.findByRole('checkbox').as('isEnemyCheckbox')

          cy.get('@isEnemyCheckbox').click()
          cy.get('@isEnemyCheckbox').should('be.checked')

          // Check color of characterBanner
        }
      })
  }

  it('should add two players and two enemies', () => {
    cy.visit('http://localhost:3000')

    makeCharacter('Meep', '4', '19', '10', '10')

    cy.findByRole('button', { name: /add character/i }).as('addCharButton') // QUESTION: addCharacterButton did not work but that's the name assigned in the Fab
    cy.get('@addCharButton').click()

    makeCharacter('Moop', '13', '8', '12', '12')

    cy.get('@addCharButton').click()
    makeCharacter('Phase Beast', '13', '12', '23', '23', true)

    cy.get('@addCharButton').click()
    makeCharacter('Sprite', '6', '15', '8', '14', true)

    // Check that init sorted properly
    cy.findAllByRole('textbox').as('charactersSorted')
    cy.get('@charactersSorted').eq(0).should('have.value', 'Meep')
    cy.get('@charactersSorted').eq(1).should('have.value', 'Sprite')
    cy.get('@charactersSorted').eq(2).should('have.value', 'Phase Beast')
    cy.get('@charactersSorted').eq(3).should('have.value', 'Moop')
  })
})
