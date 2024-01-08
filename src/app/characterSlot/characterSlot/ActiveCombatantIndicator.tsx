// React
import { PropsWithChildren } from 'react'

// CSS
import '../../styles/ActiveCombatantEffect.css'

// Hooks
import { useCombatants } from '../../combatants/CombatantsContext'
import { useCombatantInfo } from '../../combatants/hooks/useCombatantInfo'

interface ActiveCombatanIndicatortProps {
  charId: string
}

const ActiveCombatantIndicator = ({
  charId,
  children,
}: PropsWithChildren<ActiveCombatanIndicatortProps>) => {
  const { activeCombatant } = useCombatants()
  const { getCharacterProp } = useCombatantInfo()

  return (
    <div
      className={
        getCharacterProp(charId, 'id') === activeCombatant
          ? 'useBliinker characterBanner'
          : 'characterBanner'
      }
      style={{ flex: 1 }}
    >
      {children}
    </div>
  )
}

export default ActiveCombatantIndicator
