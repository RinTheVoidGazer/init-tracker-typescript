import { Dispatch, SetStateAction } from "react"
import { CharacterData } from "../../data/characterData"

// Function for adding a new status
const handleAddNewStatus = (
  setCombatants : Dispatch<SetStateAction<CharacterData[]>>,
  charIndex : number,
  newStatusName : string,
  newStatusDuration : string,
  setNewStatusName : (value : string) => void,
  setNewStatusDuration : Dispatch<SetStateAction<string>>
) => {
  // Add the new status
  setCombatants((prevState: CharacterData[]) => {
    let updatedCombatants = [...prevState]

    updatedCombatants[charIndex].statuses.push({name: newStatusName, duration: parseInt(newStatusDuration) })

    return updatedCombatants
  })

  // Clear new status input
  setNewStatusName('')
  setNewStatusDuration('')
}

export default handleAddNewStatus
