// MUI
import { Fab, Tooltip } from "@mui/material"
import NextCombatantIcon from "@mui/icons-material/NavigateNext"

// State
import { useCombatants } from "../../../combatants/CombatantsContext"

// Data
import { CharacterData } from "../../../data/characterData"

interface NextCombatantButtonProps {
  turnCount : number
  setTurnCount : (value : number) => void
}

const NextCombatantButton = ({
  setTurnCount,
  turnCount,
} : NextCombatantButtonProps) => {
  const {combatants, setCombatants, activeCombatant, setActiveCombatant} = useCombatants()


  const handleNextCombatant = () => {
    let tempActiveCombatant =
      activeCombatant === combatants.length - 1 || combatants.length === 0
        ? 0
        : activeCombatant + 1

    setActiveCombatant(
      activeCombatant === combatants.length - 1 || combatants.length === 0
        ? 0
        : activeCombatant + 1
    )

    // Turn Count Increment
    if (activeCombatant === combatants.length - 1) {
      setTurnCount(turnCount + 1)
    }

    //--------------------- Status handling
    if (combatants[tempActiveCombatant].statuses.length !== 0) {
    //  meep
      setCombatants((prevState : CharacterData[]) => {
        const newState = prevState.map((obj, index) => {
          if (tempActiveCombatant === index) {
            let newStatusArray = [...obj["statuses"]]

            // Filters out statuses that will end on this turn and then decrements the remaining conditions
            newStatusArray = newStatusArray
              .filter((status) => {
                return status.duration !== 0

                // LOOK INTO HOW TO HANDLE STATUS DECREMENTS/REMOVAL https://www.reddit.com/r/Pathfinder2e/comments/e7crv0/duration_1_round/
              })
              .map((status) => {
                return {
                  name: status.name,
                  duration: status.duration - 1,
                }
              })

            return {
              ...obj,
              statuses: newStatusArray,
            }
          }

          return obj
        })

        return newState
      })
    }
  }

  return (
    <Tooltip title="Next Combatant">
      <Fab
        size="small"
        color="primary"
        aria-label="next combatant"
        onClick={handleNextCombatant}
      >
        <NextCombatantIcon />
      </Fab>
    </Tooltip>
  )
}

export default NextCombatantButton
