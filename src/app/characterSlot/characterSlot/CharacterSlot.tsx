// Components
import ParentBox from "../../globalComponents/layout/ParentBox"
// import CharacterSlotTop from "./characterSlotTop/CharacterSlotTop"
// import CharacterSlotActions from "./characterSlotActions/CharacterSlotActions"
// import CharacterSlotBottom from "./characterSlotBottom/CharacterSlotBottom"
// import ActiveCombatantIndicator from "./ActiveCombatantIndicator"
// import CharacterBanner from "./CharacterBanner.js"

// meep https://mui.com/material-ui/customization/how-to-customize/

type CharacterSlotProps = {
  key: number
  charInfo: {
    name: string
    // statuses: []
    curHp: number
    maxHp: number
    init: number
    ac: number
    isEnemy: boolean
    isMainParty: boolean
    keepAfterClear: boolean
  }
  index: number
  // combatants:
  // setCombatants:
  activeCombatant?: number
}

const CharacterSlot = (props: CharacterSlotProps) => {
  return (
    <ParentBox padding="8px" testId={`characterSlot${props.index}`}>
      test
      {/* <ActiveCombatantIndicator activeCombatant={activeCombatant} index={index}>
        <CharacterBanner charInfo={charInfo}>
          <CharacterSlotTop
            index={index}
            charInfo={charInfo}
            combatants={combatants}
            setCombatants={setCombatants}
          />

          <CharacterSlotBottom
            index={index}
            charInfo={charInfo}
            setCombatants={setCombatants}
          />
        </CharacterBanner>
      </ActiveCombatantIndicator>

      <CharacterSlotActions
        index={index}
        setCombatants={setCombatants}
        charInfo={charInfo}
      /> */}
    </ParentBox>
  )
}

export default CharacterSlot
