// React
import { useCallback } from "react"

// Hooks
import { useCombatants } from "../CombatantsContext"
import { CharacterData } from "../../data/characterData"

const useCombatantInfo = () => {
const {combatants} = useCombatants()

  // Gets the character using their id
  const getCharacterById = useCallback(
    (charId: string) => {
      return combatants.find((obj) => obj.id === charId)!
    },
    [combatants]
  )

  // Gets the index of the character by their id
  const getCharacterIndexById = useCallback(
    (charId: string) => {
      return combatants.findIndex((x) => x.id === charId)
    },
    [combatants]
  )

   // Gets the id of the character by their index
   const getCharacterIdByIndex = useCallback(
    (charIndex: number) => {
      return combatants[charIndex].id
    },
    [combatants]
  )


  // Example of how to very strictly type a prop's value that is passed in
  const getCharacterProp = 
    useCallback(<Key extends keyof CharacterData>(charId: string, prop: Key): CharacterData[Key]  => {
      return getCharacterById(charId)[prop]
      // if(character){
      //   return character[prop]
      // }
      // if (getCharacterById(charId)) {
      //   return getCharacterById(charId)![prop]// as CharacterData[Key]
      // }
    }, [getCharacterById])

  return { getCharacterById, getCharacterIndexById, getCharacterIdByIndex, getCharacterProp}
}

export {useCombatantInfo}