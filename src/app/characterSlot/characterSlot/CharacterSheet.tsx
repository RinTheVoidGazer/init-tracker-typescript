// State
import { useCombatants } from "../../combatants/CombatantsContext"

// Components
import CharacterSlot from "./CharacterSlot"


const CharacterSheet = () => {
const {combatants, setCombatants, activeCombatant} = useCombatants()

  return (
    <div className="characterSlotContainer">
      {combatants.map((charInfo, index) => {
        return (
          <CharacterSlot
            key={`${charInfo.id}`}
            charInfo={charInfo}
            charIndex={index}
            setCombatants={setCombatants}
            activeCombatant={activeCombatant}
          />
        )
      })}
    </div>
  )
}

export default CharacterSheet
