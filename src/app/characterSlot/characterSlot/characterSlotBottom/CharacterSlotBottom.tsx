// React
import { Dispatch, SetStateAction } from 'react'

// Components
import ParentBox from '../../../globalComponents/layout/ParentBox'
import HpBar from '../../hpBar/HpBar'

// Data
import { CharacterData } from '../../../data/characterData'

interface CharacterSlotBottomProps {
  charIndex : number
  charInfo : CharacterData
  setCombatants : Dispatch<SetStateAction<CharacterData[]>>
}

const CharacterSlotBottom = ({ charIndex, charInfo, setCombatants } : CharacterSlotBottomProps) => {
  return (
    <ParentBox
      // name="characterSlotBottom"
      alignItems="center"
      justifyContent="center"
    >
      <HpBar
        charIndex={charIndex}
        charCurHp={charInfo.curHp}
        charMaxHp={charInfo.maxHp}
        setCombatants={setCombatants}
      />
    </ParentBox>
  )
}

export default CharacterSlotBottom
