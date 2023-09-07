import { CharacterData } from '../../../data/characterData'
import ParentBox from '../../../globalComponents/layout/ParentBox'
import CharacterSlotLeft from './CharacterSlotLeft'
// import CharacterSlotRight from './CharacterSlotRight'


interface CharacterSlotTopProps {
  charIndex: number
  charInfo: CharacterData
  setCombatants: (value: CharacterData[]) => void
}

const CharacterSlotTop = ({ charIndex, charInfo, setCombatants }: CharacterSlotTopProps) => {
  return (
    <ParentBox
      // name="characterSlotTop"
      justifyContent="space-between"
      padding="8px 8px 0px 8px"
    >
      <CharacterSlotLeft
        charIndex={charIndex}
        charName={charInfo.name}
        charStatuses={charInfo.statuses}
        setCombatants={setCombatants}
      />

      {/* <CharacterSlotRight
        index={index}
        charInfo={charInfo}
        setCombatants={setCombatants}
      /> */}
    </ParentBox>
  )
}

export default CharacterSlotTop
