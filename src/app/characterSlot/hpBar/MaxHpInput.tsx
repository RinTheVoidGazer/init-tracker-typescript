// MUI
import { TextField } from '@mui/material'

// Hooks
import { useUpdateCombatant } from '../hooks/useUpdateCombatant'
import { useCombatantInfo } from '../../combatants/hooks/useCombatantInfo'

interface MaxHpInputProps {
  charId: string
}

const MaxHpInput = ({ charId }: MaxHpInputProps) => {
  const { updateCombatant } = useUpdateCombatant()
  const { getCharacterById } = useCombatantInfo()

  const { curHp, maxHp } = getCharacterById(charId)

  return (
    <TextField
      type="number"
      variant="standard"
      size="small"
      tabIndex={4}
      style={{ width: '50px' }}
      inputProps={{
        min: curHp,
        "aria-label": 'Max HP'
      }}
      value={maxHp}
      onChange={(e) => updateCombatant(charId, 'maxHp', e.target.value)}
    />
  )
}

export default MaxHpInput
