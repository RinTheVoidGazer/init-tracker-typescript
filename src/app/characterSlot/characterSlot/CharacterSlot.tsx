// React
import { ComponentProps } from 'react'

// Components
import CharacterBanner from './CharacterBanner'
import ParentBox from '../../globalComponents/layout/ParentBox'
import ActiveCombatantIndicator from './ActiveCombatantIndicator'
import CharacterSlotTop from './characterSlotTop/CharacterSlotTop'
import CharacterSlotBottom from "./characterSlotBottom/CharacterSlotBottom"
import CharacterSlotActions from "./characterSlotActions/CharacterSlotActions"

// meep https://mui.com/material-ui/customization/how-to-customize/

interface CharacterSlotProps extends ComponentProps<typeof CharacterSlotTop> {
  activeCombatant: number
}

const CharacterSlot = ({ activeCombatant, ...props }: CharacterSlotProps) => {
  return (
    <ParentBox padding="8px" testId={`characterSlot${props.charIndex}`}>
        <ActiveCombatantIndicator
          activeCombatant={activeCombatant}
          index={props.charIndex}
        >
          <CharacterBanner charName={props.charInfo.name} charIsEnemy={props.charInfo.isEnemy} index={props.charIndex}>
            <CharacterSlotTop {...props} />

            <CharacterSlotBottom
              charIndex={props.charIndex}
              charInfo={props.charInfo}
              setCombatants={props.setCombatants}
            />
          </CharacterBanner>
        </ActiveCombatantIndicator>

        <CharacterSlotActions
          charIndex={props.charIndex}
          charInfo={props.charInfo}
          setCombatants={props.setCombatants}
        />
    </ParentBox>
  )
}

export default CharacterSlot
