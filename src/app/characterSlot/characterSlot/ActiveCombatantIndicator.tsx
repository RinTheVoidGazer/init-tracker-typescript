import { PropsWithChildren } from 'react'

// CSS
import '../../styles/ActiveCombatantEffect.css'

interface ActiveCombatanIndicatortProps {
  activeCombatant: number
  index: number
}

const ActiveCombatantIndicator = ({ activeCombatant, index, children } : PropsWithChildren<ActiveCombatanIndicatortProps>) => {
  return (
    <div
      className={
        activeCombatant === index
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
