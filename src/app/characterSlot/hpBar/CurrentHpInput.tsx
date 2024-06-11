// MUI
import { TextField } from '@mui/material'

// Hooks
import { useCombatantInfo } from '../../combatants/hooks/useCombatantInfo'
import { useUpdateCombatant } from '../hooks/useUpdateCombatant'

interface CurrentHpInputProps {
  charId: string
}

const CurrentHpInput = ({ charId }: CurrentHpInputProps) => {
  const { getCharacterById } = useCombatantInfo()
  const { updateCombatant } = useUpdateCombatant()

  const { curHp, maxHp } = getCharacterById(charId)

  return (
    <TextField
      type="number"
      name='curHp'
      // label="Current HP"
      aria-label='Current HP'
      variant="standard"
      tabIndex={3}
      size="small"
      style={{ width: '50px' }}
      inputProps={{
        max: maxHp,
        "aria-label": 'Current HP'
      }}
      value={curHp}
      onChange={(e) => updateCombatant(charId, 'curHp', e.target.value)}
    />
  )
}

export default CurrentHpInput
