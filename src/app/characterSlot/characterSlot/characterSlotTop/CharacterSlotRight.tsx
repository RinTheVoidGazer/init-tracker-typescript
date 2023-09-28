// React
import { Dispatch, SetStateAction } from 'react'

// Components
import ParentBox from '../../../globalComponents/layout/ParentBox'
import ACInput from '../../ACInput'
import InitInput from '../../InitInput'

// Data
import { CharacterData } from '../../../data/characterData'

interface CharacterSlotRightProps {
  charIndex : number
  charInfo : CharacterData
  setCombatants : Dispatch<SetStateAction<CharacterData[]>>
}

const CharacterSlotRight = ({ charIndex, charInfo, setCombatants } : CharacterSlotRightProps) => {
  return (
    <ParentBox
    // name="characterInitAC" padding="3px"
    >

    <ACInput
      objKey="ac"
      charIndex={charIndex}
      charAC={charInfo.ac}
      setCombatants={setCombatants}
    />

    <InitInput
      objKey="init"
      charIndex={charIndex}
      charInit={charInfo.init}
      setCombatants={setCombatants}
    />
  </ParentBox>
  )
}

export default CharacterSlotRight
