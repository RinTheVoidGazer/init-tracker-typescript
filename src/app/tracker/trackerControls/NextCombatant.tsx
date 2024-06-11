// MUI
import { Fab, Tooltip } from '@mui/material'

// Component
import NextCombatantIcon from '@mui/icons-material/NavigateNext'

// Hooks
import { usePartyManagement } from './hooks/usePartyManagement'

const NextCombatant = () => {
  const { handleNextCombatant } = usePartyManagement()

  return (
    <Tooltip title="Next Combatant">
      <Fab
        size="small"
        color="primary"
        aria-label="next combatant"
        onClick={() => handleNextCombatant()}
      >
        <NextCombatantIcon />
      </Fab>
    </Tooltip>
  )
}

export default NextCombatant
