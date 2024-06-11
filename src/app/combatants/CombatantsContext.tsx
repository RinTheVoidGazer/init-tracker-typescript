import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useMemo,
  useState,
} from 'react'

import characterData, { CharacterData } from '../data/characterData'

const CombatantsContext = React.createContext<
  | {
      combatants: CharacterData[]
      turnCount: number
      setTurnCount: Dispatch<SetStateAction<number>>
      setCombatants: Dispatch<SetStateAction<CharacterData[]>>
      activeCombatant: string
      setActiveCombatant: Dispatch<SetStateAction<string>>
    }
  | undefined
>(undefined)

function CombatantsProvider(props: PropsWithChildren) {
  const [combatants, setCombatants] = useState([...characterData])
  const [activeCombatant, setActiveCombatant] = useState(characterData[0].id)
  const [turnCount, setTurnCount] = useState(1)

  const value = useMemo(
    () => ({
      combatants,
      setCombatants,
      turnCount,
      setTurnCount,
      activeCombatant,
      setActiveCombatant,
    }),
    [combatants, turnCount, activeCombatant]
  )

  return <CombatantsContext.Provider value={value} {...props} />
}

function useCombatants() {
  const context = React.useContext(CombatantsContext)

  if (!context) {
    throw new Error(`useCombatants must be used within a CombatantsProvider`)
  }
  return context
}

export { CombatantsProvider, useCombatants }
