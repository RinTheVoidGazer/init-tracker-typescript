// MUI
import { TextField } from '@mui/material'

// Hooks
import { useCombatantInfo } from '../combatants/hooks/useCombatantInfo'
import { useUpdateCombatant } from './hooks/useUpdateCombatant'
import { usePartyManagement } from '../tracker/trackerControls/hooks/usePartyManagement'

interface InitInputProps {
  charId: string
}

const InitInput = ({ charId }: InitInputProps) => {
  const { getCharacterById } = useCombatantInfo()
  const { updateCombatant } = useUpdateCombatant()
  const { sortCombatants } = usePartyManagement()

  const { init } = getCharacterById(charId)
  return (
    <TextField
      label="Initiative"
      variant="standard"
      tabIndex={2}
      type="number"
      size="small"
      value={init}
      onChange={(e) => updateCombatant(charId, 'init', e.target.value)}
      onBlur={() => {
        sortCombatants()
      }}
    />
  )
}

export default InitInput
