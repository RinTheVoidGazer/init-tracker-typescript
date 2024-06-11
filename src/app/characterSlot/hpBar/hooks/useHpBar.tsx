// React
import { useCallback } from 'react'

// Hooks
import { useCombatantInfo } from '../../../combatants/hooks/useCombatantInfo'

const useHpBar = (charId: string) => {
  const { getCharacterById } = useCombatantInfo()
  const { curHp, maxHp } = getCharacterById(charId)
  // const curHp = getCharacterProp(charId, 'curHp')
  // const maxHp = getCharacterProp(charId, 'maxHp')

  const calcHpBarColor = useCallback(() => {
    let hpBarColor =
      (curHp / maxHp) * 100 >= 80
        ? 'green'
        : (curHp / maxHp) * 100 >= 30
        ? 'orange'
        : curHp <= 0
        ? 'black'
        : 'red'

    return hpBarColor
  }, [curHp, maxHp])

  const calcHpBarWidth = useCallback(() => {
    return `${(curHp / maxHp) * 100}%`
  }, [curHp, maxHp])

  const hpBarColor = calcHpBarColor()
  const hpBarWidth = calcHpBarWidth()

  return { hpBarColor, hpBarWidth }
}

export { useHpBar }
