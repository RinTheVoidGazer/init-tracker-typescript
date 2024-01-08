// Components
import ParentBox from '../../../globalComponents/layout/ParentBox'
import ACInput from '../../ACInput'
import InitInput from '../../InitInput'

interface CharacterSlotRightProps {
  charId: string
}

const CharacterSlotRight = ({ charId }: CharacterSlotRightProps) => {
  return (
    <ParentBox
    // name="characterInitAC" padding="3px"
    >
      <ACInput charId={charId} />

      <InitInput charId={charId} />
    </ParentBox>
  )
}

export default CharacterSlotRight
