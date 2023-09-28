// MUI
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"

// Data
import { CharacterData, CharacterDataKey } from '../data/characterData'
import { Dispatch, SetStateAction } from "react"

// Functions
import updateNonNestedCharacterValue from "../utils/functions/updateNonNestedCharacterValue"

interface EnemyToggleProps {
  objKey : CharacterDataKey
  charIndex : number
  charIsEnemy : boolean
  setCombatants : Dispatch<SetStateAction<CharacterData[]>>
}

const EnemyToggle = ({
  objKey,
  charIndex,
  charIsEnemy,
  setCombatants,
} : EnemyToggleProps) => {
  return (
    <FormGroup>
      <FormControlLabel
        label="Enemy"
        control={
          <Checkbox
            checked={charIsEnemy}
            onChange={(e) =>
              updateNonNestedCharacterValue(
                objKey,
                e.target.checked,
                setCombatants,
                charIndex
              )
            }
          />
        }
      />
    </FormGroup>
  )
}

export default EnemyToggle
