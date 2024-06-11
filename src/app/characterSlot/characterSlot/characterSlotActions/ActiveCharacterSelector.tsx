// MUI
import { Fab, Tooltip } from '@mui/material'
import MakeActiveCombatantIcon from '@mui/icons-material/EmojiPeople'

// Hooks
import { usePartyManagement } from '../../../tracker/trackerControls/hooks/usePartyManagement'
import { useCombatants } from '../../../combatants/CombatantsContext'

interface ActiveCharacterSelectorProps {
  charId: string
}

const ActiveCharacterSelector = ({ charId }: ActiveCharacterSelectorProps) => {
  const { makeActiveCombatant } = usePartyManagement()
  const { combatants, activeCombatant } = useCombatants()

  return (
    <Tooltip title="Make Active Character">
      <span>
        <Fab
          size="small"
          color="primary"
          disabled={combatants.length === 1 || charId === activeCombatant}
          aria-label="make active character"
          onClick={() => {
            makeActiveCombatant(charId)
          }}
        >
          <MakeActiveCombatantIcon />
        </Fab>
      </span>
    </Tooltip>
  )
}

export default ActiveCharacterSelector
