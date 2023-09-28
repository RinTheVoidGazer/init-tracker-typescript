import { Dispatch, SetStateAction } from "react"
import { CharacterData } from "../../data/characterData"

// Status Delete Function
const handleStatusDeletion = (
  indexToRemove : number,
  setCombatants : Dispatch<SetStateAction<CharacterData[]>>,
  charIndex : number
) => {
  setCombatants((prevState : CharacterData[]) => {
    let newCharStatusArray = [...prevState]

    newCharStatusArray[charIndex].statuses.splice(indexToRemove, 1)

    return newCharStatusArray
  })
}

export default handleStatusDeletion