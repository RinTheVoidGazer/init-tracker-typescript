// MUI
import { Paper } from '@mui/material'
import { PropsWithChildren } from 'react'

interface CharacterBannerProps {
  charName: string
  charIsEnemy: boolean
  index: number
}

const CharacterBanner = ({ charName, charIsEnemy, index, children } : PropsWithChildren<CharacterBannerProps>) => {
  return (
    <Paper
      data-testid={`charSlot${charName}${index}`}
      // name="characterBanner"
      elevation={3}
      sx={{
        bgcolor: charIsEnemy ? '#57000cff' : '#7c7cd2ff',
      }}
      className="characterSlot"
      style={{
        height: '15vh',
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
