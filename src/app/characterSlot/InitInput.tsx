// React
import { Dispatch, SetStateAction } from "react"

// MUI
import { TextField } from "@mui/material"

// Functions
import updateNonNestedCharacterValue from "../utils/functions/updateNonNestedCharacterValue"

// Data
import { CharacterData, CharacterDataKey } from '../data/characterData'

interface InitInputProps {
  objKey : CharacterDataKey
  charIndex : number
  charInit : number
  setCombatants : Dispatch<SetStateAction<CharacterData[]>>
}

const InitInput = ({
  objKey,
  charIndex,
  charInit,
  setCombatants,
} : InitInputProps) => {
  return (
    <TextField
      label="Initiative"
      variant="standard"
      tabIndex={2}
      type="number"
      size="small"
      value={charInit}
      onChange={(e) =>
        updateNonNestedCharacterValue(
          objKey,
          parseInt(e.target.value),
          setCombatants,
          charIndex
        )
      }
      onBlur={() => {
        setCombatants((prevState : CharacterData[]) => {
          let sortedCombatants = [...prevState]
          sortedCombatants.sort((a, b) => b.init - a.init)

          return sortedCombatants
        })
      }}
    />
  )
}

export default InitInput
