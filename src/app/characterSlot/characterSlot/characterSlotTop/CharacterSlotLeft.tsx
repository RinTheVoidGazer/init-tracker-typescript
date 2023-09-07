import ParentBox from '../../../globalComponents/layout/ParentBox'
import NameInput from '../../nameInput/NameInput'
// import Statuses from '../../statuses/Statuses'
import { CharacterData } from '../../../data/characterData'


interface CharacterSlotLeftProps {
  charIndex: number
  charName: string
  charStatuses: string[]
  setCombatants: (value: CharacterData[]) => void
}


const CharacterSlotLeft = ({ charIndex, charName, charStatuses, setCombatants } : CharacterSlotLeftProps ) => {
  return (
    <ParentBox
      // name="characterNameStatuses"
      flexDirection="column"
      padding="3px"
    >
      <span className="name">
        <NameInput
          objKey="name"
          charEditIndex={charIndex}
          nameInputValue={charName}
          setCombatants={setCombatants}
        />
      </span>

      {/* <span className="statuses">
        <Statuses
          objKey="statuses"
          characterValue={charInfo.statuses}
          charEditIndex={charIndex}
          setCombatants={setCombatants}
        />
      </span> */}
    </ParentBox>
  )
}

export default CharacterSlotLeft
