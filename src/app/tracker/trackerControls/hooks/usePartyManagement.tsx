// React
import { useCallback } from 'react'

// Hooks
import { useCombatants } from '../../../combatants/CombatantsContext'
import { useCombatantInfo } from '../../../combatants/hooks/useCombatantInfo'
import { useStatusManagement } from '../../../characterSlot/statuses/hooks/useStatusManagement'
import { useTurnCount } from './useTurnCount'

// Functions
import { createUniqueId } from '../../../utils/functions/createUniqueId'

// Data
import { CharacterData, CharacterStatuses } from '../../../data/characterData'

const usePartyManagement = () => {
  const { combatants, activeCombatant, setCombatants, setActiveCombatant } =
    useCombatants()
  const { getCharacterIndexById, getCharacterIdByIndex } = useCombatantInfo()
  const { incrementTurnCount } = useTurnCount()
  const { manageStatusDecay } = useStatusManagement()

  const handleAddNewCharacter = useCallback(() => {
    let newCharacter: CharacterData = {
      id: createUniqueId(),
      name: '',
      statuses: [] as CharacterStatuses[],
      curHp: 0,
      maxHp: 0,
      init: 0,
      ac: 0,
      isEnemy: false,
      isMainParty: false, // TODO Flag that always excludes character from the Clear Combatants button
      keepAfterClear: false, // TODO Flag to exclude character from the Clear Combatants button
    }

    setCombatants((prevState: CharacterData[]) => {
      return [...prevState, newCharacter]
    })
  }, [setCombatants])

  // Remove character
  const handleRemoveCharacter = (charId: string) => {
    setCombatants((prevState: CharacterData[]) => {
      let newCombatantsArray = [...prevState]

      newCombatantsArray.splice(getCharacterIndexById(charId), 1)

      return newCombatantsArray
    })
  }

  const handleNextCombatant = useCallback(() => {
    const combatantsArrayLength = combatants.length
    const combatantsIndexLength = combatants.length - 1

    // Figure out who the next combatant is
    let newActiveCombatant =
      getCharacterIndexById(activeCombatant) === combatantsIndexLength ||
      combatantsArrayLength === 0
        ? getCharacterIdByIndex(0) // Set the active combatant to the first character
        : getCharacterIdByIndex(getCharacterIndexById(activeCombatant) + 1) // Set the active combatant to the next character in the array

    // Set the activeCombatant state to the new active combatant
    setActiveCombatant(newActiveCombatant)

    console.log(
      'index',
      getCharacterIndexById(activeCombatant),
      combatantsIndexLength
    )

    // Turn Count Increment
    if (getCharacterIndexById(activeCombatant) === combatantsIndexLength) {
      console.log('meep')
      incrementTurnCount()
    }

    //--------------------- Status handling
    manageStatusDecay(newActiveCombatant)
  }, [
    activeCombatant,
    combatants,
    incrementTurnCount,
    getCharacterIdByIndex,
    getCharacterIndexById,
    manageStatusDecay,
    setActiveCombatant,
  ])

  const sortCombatants = () => {
    setCombatants((prevState: CharacterData[]) => {
      let sortedCombatants = [...prevState]

      sortedCombatants.sort((a, b) => b.init - a.init)

      return sortedCombatants
    })
  }

  const makeActiveCombatant = (charId : string) => {
    setActiveCombatant(charId)
  }

  return {
    sortCombatants,
    makeActiveCombatant,
    handleNextCombatant,
    handleAddNewCharacter,
    handleRemoveCharacter,
  }
}

export { usePartyManagement }
