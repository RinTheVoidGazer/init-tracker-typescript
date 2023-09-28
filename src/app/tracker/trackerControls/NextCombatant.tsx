
// Compontents
import NextCombatantButton from "./nextCombatant/NextCombatantButton"

interface NextCombatantProps {
  turnCount : number
  setTurnCount : (value : number) => void
}

const NextCombatant = ({turnCount, setTurnCount} : NextCombatantProps) => {

  return(
    <NextCombatantButton
    setTurnCount={setTurnCount}
    turnCount={turnCount}
    />
  )
}

export default NextCombatant