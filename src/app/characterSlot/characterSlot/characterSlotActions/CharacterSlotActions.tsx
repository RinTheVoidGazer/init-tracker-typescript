// React
import { Dispatch, SetStateAction } from 'react'
// Components
import ParentBox from '../../../globalComponents/layout/ParentBox'
import RemoveCharacter from './RemoveCharacter'
import DamageInput from '../DamageInput'
import EnemyToggle from '../../EnemyToggle'

// Data
import { CharacterData } from '../../../data/characterData'

interface CharacterSlotActionsProps {
  charIndex : number
  charInfo : CharacterData
  setCombatants : Dispatch<SetStateAction<CharacterData[]>>
}

const CharacterSlotActions = ({ charIndex, charInfo, setCombatants} : CharacterSlotActionsProps) => {
  return (
    <ParentBox
      // name="characterSlotActions"
      flexDirection="column"
      alignItems="center"
      gap="8px"
    >
      <RemoveCharacter charIndex={charIndex} setCombatants={setCombatants} />

      <DamageInput
        objKey="curHp"
        charIndex={charIndex}
        charCurHp={charInfo.curHp}
        setCombatants={setCombatants}
        charMaxHp={charInfo.maxHp}
      />

      <EnemyToggle
        objKey="isEnemy"
        charIndex={charIndex}
        charIsEnemy={charInfo.isEnemy}
        setCombatants={setCombatants}
      />
    </ParentBox>
  )
}

export default CharacterSlotActions
