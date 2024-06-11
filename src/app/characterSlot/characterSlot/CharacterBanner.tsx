// React
import { PropsWithChildren } from 'react'

// MUI
import { Paper } from '@mui/material'

// Hooks
import { useCombatantInfo } from '../../combatants/hooks/useCombatantInfo'

interface CharacterBannerProps {
  charId: string
}

const CharacterBanner = ({
  charId,
  children,
}: PropsWithChildren<CharacterBannerProps>) => {
  const { getCharacterProp } = useCombatantInfo()

  return (
    <Paper
      data-testid={`charSlot${charId}`}
      elevation={3}
      sx={{
        bgcolor: getCharacterProp(charId, 'isEnemy')
          ? '#57000cff'
          : '#7c7cd2ff',
      }}
      style={{
        height: '16vh',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        display: 'flex',
      }}
    >
      {children}
    </Paper>
  )
}

export default CharacterBanner
