import { useState } from 'react'
import { useCombatants } from '../../combatants/CombatantsContext'
import { useTurnCount } from '../../tracker/trackerControls/hooks/useTurnCount'
import { useDialog } from './useDialog'

import axios from 'axios'
import apiConfig from '../../config/apiConfig'

const useSession = () => {
  const [sessions, setSessions] = useState()
  const { setCombatants, setActiveCombatant } = useCombatants()
  const { setTurnCount } = useTurnCount()
  const { setDiagOpen } = useDialog()

  const handleGetAllSessions = () => {
    setDiagOpen(true)

    axios.get(apiConfig.local.getAllSessions).then((res) => {
      setSessions(res.data)
    })
  }

  const handleLoadSession = (combatants: any, turnCount: number, activeCombatant: string) => { //question
    setCombatants(combatants)
    setTurnCount(turnCount)
    setActiveCombatant(activeCombatant)
  }

  return { sessions, handleLoadSession, handleGetAllSessions}
}

export { useSession }
