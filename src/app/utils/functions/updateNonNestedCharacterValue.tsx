// React
import { Dispatch, SetStateAction } from "react"

// Data
import { CharacterData } from '../../data/characterData'


const updateNonNestedCharacterValue = <Key extends keyof CharacterData>(
  objKey : Key,
  newValue : CharacterData[Key],
  setCombatants : Dispatch<SetStateAction<CharacterData[]>>,
  charIndex : number
): void => {
  setCombatants((prevState : CharacterData[]) => {
    let updatedCombatants = [...prevState]

    updatedCombatants[charIndex][objKey] = newValue
    
    return updatedCombatants
  })
}

export default updateNonNestedCharacterValue
