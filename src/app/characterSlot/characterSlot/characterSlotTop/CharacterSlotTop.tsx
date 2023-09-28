// React
import { ComponentProps } from 'react'

// Components
import ParentBox from '../../../globalComponents/layout/ParentBox'
import CharacterSlotLeft from './CharacterSlotLeft'
import CharacterSlotRight from './CharacterSlotRight'

interface CharacterSlotTopProps extends ComponentProps<typeof CharacterSlotLeft> {}

const CharacterSlotTop = ({ ...props } : CharacterSlotTopProps) => {
  return (
    <ParentBox
      // name="characterSlotTop"
      justifyContent="space-between"
      padding="8px 8px 0px 8px"
    >
      <CharacterSlotLeft
        charIndex={props.charIndex}
        charInfo={props.charInfo}
        setCombatants={props.setCombatants}
      />

      <CharacterSlotRight
        charIndex={props.charIndex}
        charInfo={props.charInfo}
        setCombatants={props.setCombatants}
      />
    </ParentBox>
  )
}

export default CharacterSlotTop
