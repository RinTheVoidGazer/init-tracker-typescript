// Components
import { CharacterData } from '../../data/characterData'
import ParentBox from '../../globalComponents/layout/ParentBox'
import CharacterSlotTop from './characterSlotTop/CharacterSlotTop'
// import CharacterSlotActions from "./characterSlotActions/CharacterSlotActions"
// import CharacterSlotBottom from "./characterSlotBottom/CharacterSlotBottom"
import ActiveCombatantIndicator from './ActiveCombatantIndicator'
import CharacterBanner from './CharacterBanner'
import { ComponentProps } from 'react'

// meep https://mui.com/material-ui/customization/how-to-customize/

interface CharacterSlotProps extends ComponentProps<typeof CharacterSlotTop> {
  activeCombatant: number
}

const CharacterSlot = ({ activeCombatant, ...props }: CharacterSlotProps) => {
  return (
    <ParentBox padding="8px" testId={`characterSlot${props.charIndex}`}>
      {
        <ActiveCombatantIndicator
          activeCombatant={activeCombatant}
          index={props.charIndex}
        >
          <CharacterBanner charName={props.charInfo.name} charIsEnemy={props.charInfo.isEnemy} index={props.charIndex}>
            <CharacterSlotTop {...props} />

            {/* <CharacterSlotBottom
              index={index}
              charInfo={charInfo}
              setCombatants={setCombatants}
            /> */}
          </CharacterBanner>
        </ActiveCombatantIndicator>

        // <CharacterSlotActions
        //   index={index}
        //   setCombatants={setCombatants}
        //   charInfo={charInfo}
        // />
      }
    </ParentBox>
  )
}

export default CharacterSlot
