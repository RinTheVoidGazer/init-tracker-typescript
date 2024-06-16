import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Tracker from '../Tracker'

// const handleCombatantSetup = async () => {
//   // Grab and test the first character's Name input
//   const characterNameInput0 = screen.getAllByLabelText(/character name/i)
//   expect(characterNameInput0.length).toBe(1)
//   await userEvent.type(characterNameInput0[0], 'Goblin')

//   const charACInput0 = screen.getAllByLabelText(/^ac$/i, { selector: 'input' })
//   expect(charACInput0.length).toBe(1)
//   await userEvent.type(charACInput0[0], '7')

//   const charInitInput0 = screen.getAllByLabelText(/initiative/i)
//   expect(charInitInput0.length).toBe(1)
//   await userEvent.type(charInitInput0[0], '9')

//   const charCurHPInput0 = screen.getAllByLabelText(/current hp/i)
//   expect(charCurHPInput0.length).toBe(1)
//   await userEvent.type(charCurHPInput0[0], '10')

//   const charMaxHPInput0 = screen.getAllByLabelText(/max hp/i)
//   expect(charMaxHPInput0.length).toBe(1)
//   await userEvent.type(charMaxHPInput0[0], '10')

//   const charIsEnemyCheckbox0 = screen.getAllByLabelText(/enemy/i)
//   expect(charIsEnemyCheckbox0.length).toBe(1)
//   await userEvent.click(charIsEnemyCheckbox0[0])

//   const addCombatantButton = screen.getByLabelText(/add character/i)
//   expect(addCombatantButton).toBeInTheDocument()
//   await userEvent.click(addCombatantButton)

//   // -------------- Combatant 2
//   const characterNameInput1 = screen.getAllByLabelText(/character name/i)
//   expect(characterNameInput1.length).toBe(2)
//   await userEvent.type(characterNameInput1[1], 'Wizard')

//   const charACInput1 = screen.getAllByLabelText(/^ac$/i, { selector: 'input' })
//   expect(charACInput1.length).toBe(2)
//   await userEvent.type(charACInput1[1], '5')

//   const charInitInput1 = screen.getAllByLabelText(/initiative/i)
//   expect(charInitInput1.length).toBe(2)
//   await userEvent.type(charInitInput1[1], '9')

//   const charCurHPInput1 = screen.getAllByLabelText(/current hp/i)
//   expect(charCurHPInput1.length).toBe(2)
//   await userEvent.type(charCurHPInput1[1], '7')

//   const charMaxHPInput1 = screen.getAllByLabelText(/max hp/i)
//   expect(charMaxHPInput1.length).toBe(2)
//   await userEvent.type(charMaxHPInput1[1], '7')

//   const charIsEnemyCheckbox1 = screen.getAllByLabelText(/enemy/i)
//   expect(charIsEnemyCheckbox1.length).toBe(2)
//   await userEvent.click(charIsEnemyCheckbox1[1])

//   // -------------- Combatant 3

//   // -------------- Combatant 4
// }

const handleCreateCharacter = async (
  index: number,
  name: string,
  ac: string,
  init: string,
  curHp: string,
  maxHp: string,
  isEnemy: boolean
) => {
  const charName = screen.getAllByLabelText(/character name/i)
  await userEvent.type(charName[index], name)

  const charAC = screen.getAllByLabelText(/^ac$/i, { selector: 'input' })
  await userEvent.type(charAC[index], ac)

  const charInit = screen.getAllByLabelText(/initiative/i)
  await userEvent.type(charInit[index], init)

  const charCurHp = screen.getAllByLabelText(/current hp/i)
  await userEvent.type(charCurHp[index], curHp)

  const charMaxHp = screen.getAllByLabelText(/max hp/i)
  await userEvent.type(charMaxHp[index], maxHp)

  if (isEnemy) {
    const charIsEnemyCheckbox = screen.getAllByLabelText(/enemy/i)
    await userEvent.click(charIsEnemyCheckbox[index])
  }
}

// describe('Testing Combatant Info Input', () => {
//   it('Tests name, AC, init, hp, and enemy toggle input', async () => {
//     render(<Tracker />)

//     await handleCombatantSetup()

//     const charName0 = screen.getAllByLabelText(/character name/i)
//     // expect(charName0.length).toBe(1)
//     expect(charName0[0].value).toBe('Goblin')

//     const charAC0 = screen.getAllByLabelText(/^ac$/i, {
//       selector: 'input',
//     })
//     // expect(charAC0.length).toBe(1)
//     expect(charAC0[0].value).toBe('7')

//     const charInit0 = screen.getAllByLabelText(/initiative/i)
//     // expect(charInit0.length).toBe(1)
//     expect(charInit0[0].value).toBe('9')

//     const charCurHp0 = screen.getAllByLabelText(/current hp/i)
//     // expect(charCurHp0.length).toBe(1)
//     expect(charCurHp0[0].value).toBe('10')

//     const charMaxHp0 = screen.getAllByLabelText(/max hp/i)
//     // expect(charMaxHp0.length).toBe(1)
//     expect(charMaxHp0[0].value).toBe('10')

//     const charIsEnemy0 = screen.getAllByLabelText(/enemy/i)
//     // expect(charIsEnemy0.length).toBe(1)
//     expect(charIsEnemy0[0]).toBeChecked()

//     // enter name
//     // enter ac
//     // enter init
//     // enter hp
//     // enemy toggle
//   })
// })

describe('Testing Combatant Info Input 2', () => {
  it('Tests entering four new characters', async () => {
    render(<Tracker />)

    await handleCreateCharacter(0, 'Goblin', '7', '9', '10', '10', true)

    const charName0 = screen.getAllByLabelText(/character name/i) as HTMLInputElement[]
    expect(charName0.length).toBe(1)
    expect(charName0[0].value).toBe('Goblin')

    const charAC0 = screen.getAllByLabelText(/^ac$/i, {
      selector: 'input',
    }) as HTMLInputElement[]
    expect(charAC0.length).toBe(1)
    expect(charAC0[0].value).toBe('7')

    const charInit0 = screen.getAllByLabelText(/initiative/i) as HTMLInputElement[]
    expect(charInit0.length).toBe(1)
    expect(charInit0[0].value).toBe('9')

    const charCurHp0 = screen.getAllByLabelText(/current hp/i) as HTMLInputElement[]
    expect(charCurHp0.length).toBe(1)
    expect(charCurHp0[0].value).toBe('10')

    const charMaxHp0 = screen.getAllByLabelText(/max hp/i) as HTMLInputElement[]
    expect(charMaxHp0.length).toBe(1)
    expect(charMaxHp0[0].value).toBe('10')

    const charIsEnemy0 = screen.getAllByLabelText(/enemy/i)
    expect(charIsEnemy0.length).toBe(1)
    expect(charIsEnemy0[0]).toBeChecked()

    // Click add character button
    const addCharacterButton = screen.getByLabelText(/add character/i)
    await userEvent.click(addCharacterButton)

    const combatantCount = screen.getAllByLabelText(/character name/i)
    expect(combatantCount.length).toBe(2)

    // -------------- Combatant 2
    await handleCreateCharacter(1, 'Wizard', '5', '10', '7', '7', false)

    const charName1 = screen.getAllByLabelText(/character name/i) as HTMLInputElement[]
    expect(charName1.length).toBe(2)
    expect(charName1[0].value).toBe('Wizard')
    expect(charName1[1].value).toBe('Goblin')

    const charAC1 = screen.getAllByLabelText(/^ac$/i, {
      selector: 'input',
    }) as HTMLInputElement[]
    expect(charAC1.length).toBe(2)
    expect(charAC1[1].value).toBe('5')

    const charInit1 = screen.getAllByLabelText(/initiative/i) as HTMLInputElement[]
    expect(charInit1.length).toBe(2)
    expect(charInit1[1].value).toBe('10')

    const charCurHp1 = screen.getAllByLabelText(/current hp/i) as HTMLInputElement[]
    expect(charCurHp1.length).toBe(2)
    expect(charCurHp1[1].value).toBe('7')

    const charMaxHp1 = screen.getAllByLabelText(/max hp/i) as HTMLInputElement[]
    expect(charMaxHp1.length).toBe(2)
    expect(charMaxHp1[1].value).toBe('7')

    const charIsEnemy1 = screen.getAllByLabelText(/enemy/i)
    expect(charIsEnemy1.length).toBe(2)
    expect(charIsEnemy1[1]).not.toBeChecked()

    // -------------- Combatant 3
    // -------------- Combatant 4
  })
})
