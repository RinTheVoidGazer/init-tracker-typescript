// MUI
import { TextField } from '@mui/material'

// Hooks
import { useCombatantInfo } from '../combatants/hooks/useCombatantInfo'
import { useUpdateCombatant } from './hooks/useUpdateCombatant'

interface ACInputProps {
  charId: string
}

const ACInput = ({ charId }: ACInputProps) => {
  const { getCharacterById } = useCombatantInfo()
  const { updateCombatant } = useUpdateCombatant()

  const { ac } = getCharacterById(charId)

  return (
    <TextField
      label="Armor Class"
      variant="standard"
      tabIndex={1}
      type="number"
      size="small"
      value={ac}
      onChange={(e) =>
        updateCombatant(charId, 'ac' , e.target.value)
      }
    />
  )
}

export default ACInput
