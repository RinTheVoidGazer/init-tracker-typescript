// React
import { ComponentProps } from 'react'

// Components
import CharacterBanner from './CharacterBanner'
import ActiveCombatantIndicator from './ActiveCombatantIndicator'
import CharacterSlotTop from './characterSlotTop/CharacterSlotTop'
import CharacterSlotBottom from './characterSlotBottom/CharacterSlotBottom'
import CharacterSlotActions from './characterSlotActions/CharacterSlotActions'

// Styles
import './styles/characterSlot.css'

// meep https://mui.com/material-ui/customization/how-to-customize/

interface CharacterSlotProps extends ComponentProps<typeof CharacterSlotTop> {}

const CharacterSlot = ({ ...props }: CharacterSlotProps) => {
  return (
    <div className='characterSlot'>
      <ActiveCombatantIndicator charId={props.charId}>
        <CharacterBanner charId={props.charId}>
          <CharacterSlotTop {...props} />

          <CharacterSlotBottom charId={props.charId} />
        </CharacterBanner>
      </ActiveCombatantIndicator>

      <CharacterSlotActions charId={props.charId} />
    </div>
  )
}

export default CharacterSlot
