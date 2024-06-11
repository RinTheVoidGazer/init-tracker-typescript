// MUI
import { TextField } from '@mui/material'

// Hooks
import { useCombatantInfo } from '../../combatants/hooks/useCombatantInfo'
import { useUpdateCombatant } from '../hooks/useUpdateCombatant'

interface NameInputProps {
  charId: string
}

const NameInput = ({ charId }: NameInputProps) => {
  const { getCharacterById } = useCombatantInfo()
  const { updateCombatant } = useUpdateCombatant()

  return (
    <TextField
      label="Character Name"
      aria-label='Character Name'
      size="small"
      autoFocus
      tabIndex={0}
      value={getCharacterById(charId)?.name}
      color="secondary"
      onChange={(e) => updateCombatant(charId, 'name', e.target.value)}
    />
  )
}

export default NameInput
