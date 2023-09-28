// React
import { Dispatch, SetStateAction } from "react"

// MUI
import { TextField } from "@mui/material"

// Data
import { CharacterData, CharacterDataKey } from '../data/characterData'

// Functions
import updateNonNestedCharacterValue from "../utils/functions/updateNonNestedCharacterValue"

interface ACInputProps {
  objKey : CharacterDataKey
  charIndex : number
  charAC : number
  setCombatants : Dispatch<SetStateAction<CharacterData[]>>
}

const ACInput = ({ objKey, charIndex, charAC, setCombatants } : ACInputProps) => {
  // const [inputValue, setInputValue] = useState(characterValue)

  return (
    <TextField
      label="AC"
      variant="standard"
      tabIndex={1}
      type="number"
      size="small"
      value={charAC}
      onChange={(e) =>
        updateNonNestedCharacterValue(
          objKey,
          parseInt(e.target.value),
          setCombatants,
          charIndex
        )
      }
    />
  )
}

export default ACInput
