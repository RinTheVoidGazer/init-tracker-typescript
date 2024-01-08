// React
import { useCallback } from 'react'
import { useCombatants } from '../../../combatants/CombatantsContext'

const useTurnCount = () => {
  const { turnCount, setTurnCount } = useCombatants()

  const incrementTurnCount = useCallback(() => {
    setTurnCount((prevState: number) => {
      return prevState + 1
    })
  }, [setTurnCount])

  return { turnCount, incrementTurnCount }
}

export { useTurnCount }
