// Hooks
import { useCombatants } from '../../combatants/CombatantsContext'

// Components
import CharacterSlot from './CharacterSlot'

const CharacterSheet = () => {
  const { combatants } = useCombatants()
  
  return (
    <div className="characterSlotContainer">
      {combatants.map((charInfo) => {
        return (
          <CharacterSlot
            key={`${charInfo.id}`}
            charId={charInfo.id}
          />
        )
      })}
    </div>
  )
}

export default CharacterSheet
