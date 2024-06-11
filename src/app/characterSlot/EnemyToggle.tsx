// MUI
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

// Hooks
import { useUpdateCombatant } from './hooks/useUpdateCombatant'
import { useCombatantInfo } from '../combatants/hooks/useCombatantInfo'

interface EnemyToggleProps {
  charId: string
}

const EnemyToggle = ({ charId }: EnemyToggleProps) => {
  const { updateCombatant } = useUpdateCombatant()
  const { getCharacterProp } = useCombatantInfo()

  return (
    <FormGroup>
      <FormControlLabel
        label="Enemy"
        control={
          <Checkbox
            // checked={getCharacterProp(charId, 'isEnemy')}
            onChange={(e) =>
              updateCombatant(charId, 'isEnemy', e.target.checked)
            }
          />
        }
      />
    </FormGroup>
  )
}

export default EnemyToggle
