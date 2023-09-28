// MUI
import { Fab, Tooltip } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"

// Data
import { CharacterData, CharacterStatuses } from "../../data/characterData"

// Utils
import { createUniqueId } from "../../utils/functions/createUniqueId"
import { useCombatants } from "../../combatants/CombatantsContext"


const AddCharacter = () => {
  const {setCombatants} = useCombatants()

  const handleAddCharacter = () => {

    let newCharacter : CharacterData = {
      id: createUniqueId(),
      name: "",
      statuses: [] as CharacterStatuses[],
      curHp: 0,
      maxHp: 0,
      init: 0,
      ac: 0,
      isEnemy: false,
      isMainParty: false, // TODO Flag that always excludes character from the Clear Combatants button
      keepAfterClear: false, // TODO Flag to exclude character from the Clear Combatants button
    }

    setCombatants((prevState : CharacterData[]) => {
      return [...prevState, newCharacter]
    })
  }

  return (
    <Tooltip title="Add Character">
      <Fab
        size="small"
        color="primary"
        name='addCharacterButton'
        aria-label="add character"
        onClick={handleAddCharacter}
        data-testid="addCharacterButton"
      >
        <AddIcon />
      </Fab>
    </Tooltip>
  )
}

export default AddCharacter
