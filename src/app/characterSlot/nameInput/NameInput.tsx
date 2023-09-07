// MUI
import { TextField } from '@mui/material'

// Components
// import updateNonNestedCharacterValue from '../../functions/updateNonNestedCharacterValue'

// Data
import { CharacterData } from '../../data/characterData'
import updateNonNestedCharacterValue from '../../utilFunctions/updateNonNestedCharacterValue'


interface NameInputProps {
  objKey: string
  charEditIndex: number
  nameInputValue: string
  setCombatants:  (value: CharacterData[]) => void
}

const NameInput = ({
  objKey,
  charEditIndex,
  nameInputValue,
  setCombatants,
} : NameInputProps) => {
  return (
    <TextField
      label="Character Name"
      size="small"
      autoFocus
      tabIndex={0}
      value={nameInputValue}
      color="secondary"
      onChange={(e) =>
        updateNonNestedCharacterValue(
          objKey,
          e.target.value,
          setCombatants,
          charEditIndex
        )
      }
    />
  )
}

export default NameInput
