// React
import { Dispatch, SetStateAction } from "react"

// MUI
import { TextField } from '@mui/material'

// Components
// import updateNonNestedCharacterValue from '../../functions/updateNonNestedCharacterValue'

// Data
import { CharacterData } from '../../data/characterData'
import updateNonNestedCharacterValue from '../../utils/functions/updateNonNestedCharacterValue'


interface NameInputProps <Key extends keyof CharacterData> {
  objKey: Key
  charIndex: number
  charName: string
  setCombatants : Dispatch<SetStateAction<CharacterData[]>>
}

const NameInput = <Key extends keyof CharacterData>({
  objKey,
  charIndex,
  charName,
  setCombatants,
} : NameInputProps<Key>) => {
  return (
    <TextField
      label="Character Name"
      size="small"
      autoFocus
      tabIndex={0}
      value={charName}
      color="secondary"
      onChange={(e) =>
        updateNonNestedCharacterValue(
          'name',
          e.target.value,
          setCombatants,
          charIndex
        )
      }
    />
  )
}

export default NameInput
