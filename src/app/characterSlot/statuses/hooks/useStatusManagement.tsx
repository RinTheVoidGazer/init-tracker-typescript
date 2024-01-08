// React
import { useState, useCallback } from 'react'

// Hooks
import { useCombatantInfo } from '../../../combatants/hooks/useCombatantInfo'
import { useCombatants } from '../../../combatants/CombatantsContext'

// Data
import { CharacterData } from '../../../data/characterData'

const useStatusManagement = () => {
  const [name, setName] = useState('')
  const [duration, setDuration] = useState('')

  const {getCharacterById, getCharacterIndexById} = useCombatantInfo()
  const {setCombatants} = useCombatants()

  const manageStatusDecay = useCallback(
    (charId: string) => {
      if (getCharacterById(charId).statuses.length !== 0) {
        setCombatants((prevState: CharacterData[]) => {
          // Get statuses array
          let nextCombatantStatuses = [...getCharacterById(charId)!.statuses]

          // Update statuses array
          nextCombatantStatuses.map((charStatuses) => {
            // Filters out statuses that will end on this turn and then decrements the remaining conditions
            let newStatusArray = nextCombatantStatuses
              .filter((status) => {
                return status.duration !== 0

                // LOOK INTO HOW TO HANDLE STATUS DECREMENTS/REMOVAL https://www.reddit.com/r/Pathfinder2e/comments/e7crv0/duration_1_round/
              })
              .map((status) => {
                return {
                  name: status.name,
                  duration: status.duration - 1,
                }
              })

            return newStatusArray
          })

          // Merge updated statuses array with the un-updated combatants array
          let updatedCombatants = [...prevState]

          updatedCombatants.find(
            (character) => character.id === charId
          )!.statuses = nextCombatantStatuses

          return updatedCombatants
        })
      }
    },
    [getCharacterById, setCombatants]
  )

  // Adds status onClick
  const handleAddNewStatus = useCallback(
    (charId: string) => {
      setCombatants((prevState: CharacterData[]) => {
        let updatedCombatants = [...prevState]
        let updatedCharStatusses = [...getCharacterById(charId).statuses]

        // Add new status to char's status
        updatedCharStatusses.push({
          name: name,
          duration: parseInt(duration),
        })
        
        // Add updated status array to the char in combatants array
        updatedCombatants[getCharacterIndexById(charId)].statuses =
          updatedCharStatusses

        return updatedCombatants
      })

      // Clear new status input
      setName('')
      setDuration('')
    },
    [name, duration, setDuration, setCombatants, getCharacterById, getCharacterIndexById]
  )

  // Deletes status onClick
  const handleStatusDeletion = useCallback((charId : string, statusToRemove : number) => {
    setCombatants((prevState : CharacterData[]) => {
      let updatedCombatants = [...prevState]
  
      updatedCombatants[getCharacterIndexById(charId)].statuses.splice(statusToRemove, 1)
  
      return updatedCombatants
    })
  }, [getCharacterIndexById, setCombatants])

  return {
    name,
    setName,
    duration,
    setDuration,
    manageStatusDecay,
    handleAddNewStatus,
    handleStatusDeletion
  }
}
export { useStatusManagement }
