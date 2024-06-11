// React
import { useCallback } from "react"

// Custom Hooks
import { useCombatants } from "../../combatants/CombatantsContext"
import { useCombatantInfo } from "../../combatants/hooks/useCombatantInfo"

// Data
import { CharacterData } from "../../data/characterData"

const useUpdateCombatant = <Key extends keyof CharacterData>() => {
  const { setCombatants } = useCombatants()
  const {getCharacterById } = useCombatantInfo()

  const updateCombatant = useCallback(
    (charId: string, objKey: Key, newValue: CharacterData[Key]) => {
      setCombatants((prevState: CharacterData[]) => {
        let updatedCombatants = [...prevState]
        // const charIndex = updatedCombatants.findIndex(x => x.id === charId);
        // updatedCombatants[charIndex][objKey] = newValue

        if (getCharacterById(charId)) {
          // Object.assign(updatedCombatants.find((obj) => obj.id === id)!,getCharacterById(id)![objKey] = newValue)
          updatedCombatants.find((character) => character.id === charId)![
            objKey
          ] = newValue
        }

        return updatedCombatants
      })
    },
    [getCharacterById, setCombatants]
  )

  return { updateCombatant }
}

export { useUpdateCombatant }
