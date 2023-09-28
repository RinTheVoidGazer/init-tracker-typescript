import React, { Dispatch, PropsWithChildren , SetStateAction, useMemo, useState} from 'react'

import characterData, { CharacterData } from "../data/characterData"

const CombatantsContext = React.createContext<{combatants : CharacterData[], setCombatants : Dispatch<SetStateAction<CharacterData[]>>, activeCombatant : number, setActiveCombatant : Dispatch<SetStateAction<number>>} | undefined>(undefined)

function CombatantsProvider(props : PropsWithChildren) {
  const [combatants, setCombatants] = useState([...characterData])
  const [activeCombatant, setActiveCombatant] = useState(0)

  const value = useMemo(() => ({combatants, setCombatants, activeCombatant, setActiveCombatant}), [combatants, activeCombatant])
  return <CombatantsContext.Provider value={value} {...props} />
}

function useCombatants() {
  const context = React.useContext(CombatantsContext)
  if (!context) {
    throw new Error(`useCombatants must be used within a CombatantsProvider`)
  }
  return context
}

export {CombatantsProvider, useCombatants}
