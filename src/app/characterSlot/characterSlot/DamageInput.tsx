// React
import { Dispatch, SetStateAction, useState } from "react"

// MUI
import { TextField } from "@mui/material"

// Data
import { CharacterData, CharacterDataKey } from '../../data/characterData'

// Functions
import updateNonNestedCharacterValue from "../../utils/functions/updateNonNestedCharacterValue"

interface DamageInputProps {
  objKey : CharacterDataKey
  charIndex : number
  charCurHp : number
  charMaxHp : number
  setCombatants : Dispatch<SetStateAction<CharacterData[]>>
}

const DamageInput = ({
  objKey,
  charIndex,
  charCurHp,
  charMaxHp,
  setCombatants,
} : DamageInputProps) => {
  const [inputValue, setInputValue] = useState(0)

  return (
    <TextField
      label="Damage"
      variant="filled"
      type="number"
      size="small"
      style={{ width: "80px" }}
      value={inputValue}
      onChange={(e : any) => setInputValue(e.target.value)}
      onBlur={(e : any) =>
        updateNonNestedCharacterValue(
          objKey,
          charCurHp - e.target.value > charMaxHp
            ? charMaxHp
            : charCurHp - e.target.value,
          setCombatants,
          charIndex
        )
      }
    />
  )
}

export default DamageInput
