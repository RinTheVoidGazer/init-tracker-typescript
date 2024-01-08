// MUI
import { Fab, Tooltip } from '@mui/material'
import RemoveCharacterIcon from '@mui/icons-material/Close'

// Hooks
import { usePartyManagement } from '../../../tracker/trackerControls/hooks/usePartyManagement'
import { useCombatants } from '../../../combatants/CombatantsContext'

interface RemoveCharacterProps {
  charId: string
}

const RemoveCharacter = ({ charId }: RemoveCharacterProps) => {
  const { handleRemoveCharacter } = usePartyManagement()
  const { combatants } = useCombatants()

  return (
    <Tooltip title="Remove Character">
      <span>
        <Fab
          size="small"
          color="error"
          disabled={combatants.length === 1}
          aria-label="remove character"
          onClick={() => {
            handleRemoveCharacter(charId)
          }}
        >
          <RemoveCharacterIcon />
        </Fab>
      </span>
    </Tooltip>
  )
}

export default RemoveCharacter
