// Components
import ParentBox from '../../../globalComponents/layout/ParentBox'
import NameInput from '../../nameInput/NameInput'
import Statuses from '../../statuses/Statuses'

interface CharacterSlotLeftProps {
  charId: string
}

const CharacterSlotLeft = ({ charId }: CharacterSlotLeftProps) => {
  return (
    <ParentBox
      // name="characterNameStatuses"
      flexDirection="column"
      padding="3px"
    >
      <span className="name">
        <NameInput charId={charId} />
      </span>

      <span className="statuses">
        <Statuses charId={charId} />
      </span>
    </ParentBox>
  )
}

export default CharacterSlotLeft
