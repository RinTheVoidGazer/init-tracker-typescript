// React
import { Dispatch, SetStateAction } from 'react'

// Components
import ParentBox from '../../../globalComponents/layout/ParentBox'
import NameInput from '../../nameInput/NameInput'
import Statuses from '../../statuses/Statuses'

// Data
import { CharacterData } from '../../../data/characterData'



interface CharacterSlotLeftProps {
  charIndex : number
  charInfo : CharacterData
  setCombatants : Dispatch<SetStateAction<CharacterData[]>>
}


const CharacterSlotLeft = ({ charIndex, charInfo, setCombatants } : CharacterSlotLeftProps ) => {
  return (
    <ParentBox
      // name="characterNameStatuses"
      flexDirection="column"
      padding="3px"
    >
      <span className="name">
        <NameInput
          objKey="name"
          charIndex={charIndex}
          charName={charInfo.name}
          setCombatants={setCombatants}
        />
      </span>

      <span className="statuses">
        <Statuses
          charStatuses={charInfo.statuses}
          charEditIndex={charIndex}
          setCombatants={setCombatants}
        />
      </span>
    </ParentBox>
  )
}

export default CharacterSlotLeft
