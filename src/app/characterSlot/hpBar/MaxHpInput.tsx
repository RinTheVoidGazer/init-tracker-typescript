// React
import { Dispatch, SetStateAction } from "react"

// MUI
import { TextField } from "@mui/material"
import { CharacterData } from "../../data/characterData"

// Functions
import updateNonNestedCharacterValue from "../../utils/functions/updateNonNestedCharacterValue"

interface MaxHpInputProps {
  charIndex : number
  charCurHp : number
  charMaxHp : number
  setCombatants : Dispatch<SetStateAction<CharacterData[]>>
}

const MaxHpInput = ({ charIndex, charCurHp, charMaxHp, setCombatants } : MaxHpInputProps) => {
  return (
    <TextField
      variant="standard"
      type="number"
      size="small"
      tabIndex={4}
      style={{ width: "50px" }}
      inputProps={{
        min: charCurHp,
      }}
      value={charMaxHp}
      onChange={(e) =>
        updateNonNestedCharacterValue(
          "maxHp",
          parseInt(e.target.value),
          setCombatants,
          charIndex
        )
      }
    />
  )
}

export default MaxHpInput
