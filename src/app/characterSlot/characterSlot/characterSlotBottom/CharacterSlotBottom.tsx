// Components
import ParentBox from '../../../globalComponents/layout/ParentBox'
import HpBar from '../../hpBar/HpBar'


interface CharacterSlotBottomProps {
  charId: string
}

const CharacterSlotBottom = ({ charId }: CharacterSlotBottomProps) => {
  return (
    <ParentBox
      // name="characterSlotBottom"
      alignItems="center"
      justifyContent="center"
    >
      <HpBar charId={charId} />
    </ParentBox>
  )
}

export default CharacterSlotBottom
