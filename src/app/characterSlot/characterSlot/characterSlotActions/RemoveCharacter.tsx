// React
import { Dispatch, SetStateAction } from "react"

// MUI
import { Fab, Tooltip } from "@mui/material"
import RemoveIcon from "@mui/icons-material/Remove"

// Data
import { CharacterData } from "../../../data/characterData"

interface RemoveCharacterProps {
  charIndex : number
  setCombatants : Dispatch<SetStateAction<CharacterData[]>>
}

const RemoveCharacter = ({ charIndex, setCombatants } : RemoveCharacterProps) => {
  const handleRemoveCharacter = () => {
    setCombatants((prevState : CharacterData[]) => {
      let newCombatantsArray = [...prevState]
      newCombatantsArray.splice(charIndex, 1)

      return newCombatantsArray
    })
  }

  return (
    <Tooltip title="Remove Character">
      <Fab
        size="small"
        color="primary"
        aria-label="remove character"
        onClick={handleRemoveCharacter}
      >
        <RemoveIcon />
      </Fab>
    </Tooltip>
  )
}

export default RemoveCharacter
