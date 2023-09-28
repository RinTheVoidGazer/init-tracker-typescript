// React
import { Dispatch, SetStateAction } from "react"

// MUI
import { TextField } from "@mui/material"
import { CharacterData } from "../../data/characterData"

// Functions
import updateNonNestedCharacterValue from "../../utils/functions/updateNonNestedCharacterValue"

interface CurrentHpInputProps {
  charIndex : number
  charCurHp : number
  charMaxHp : number
  setCombatants : Dispatch<SetStateAction<CharacterData[]>>
}

const CurrentHpInput = ({ charIndex, charMaxHp, charCurHp, setCombatants } : CurrentHpInputProps) => {
  return (
    <TextField
      variant="standard"
      type="number"
      tabIndex={3}
      size="small"
      style={{ width: "50px" }}
      inputProps={{
        max: charMaxHp,
      }}
      value={charCurHp}
      onChange={(e) =>
        updateNonNestedCharacterValue(
          "curHp",
          parseInt(e.target.value) > charMaxHp ? charMaxHp : parseInt(e.target.value),
          setCombatants,
          charIndex
        )
      }
    />
  )
}

export default CurrentHpInput
