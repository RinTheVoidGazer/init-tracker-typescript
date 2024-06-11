// Components
import ParentBox from '../../../globalComponents/layout/ParentBox'
import RemoveCharacter from './RemoveCharacter'
import DamageInput from './DamageInput'
import EnemyToggle from '../../EnemyToggle'
import ActiveCharacterSelector from './ActiveCharacterSelector'

interface CharacterSlotActionsProps {
  charId: string
}

const CharacterSlotActions = ({ charId }: CharacterSlotActionsProps) => {
  return (
    <ParentBox
      // name="characterSlotActions"
      flexDirection="column"
      alignItems="center"
      gap="8px"
    >
      <ParentBox>
        <RemoveCharacter charId={charId} />

        <ActiveCharacterSelector charId={charId} />
      </ParentBox>

      <DamageInput charId={charId} />

      <EnemyToggle charId={charId} />
    </ParentBox>
  )
}

export default CharacterSlotActions
