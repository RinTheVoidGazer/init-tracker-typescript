import { useTurnCount } from './hooks/useTurnCount'

const TurnDisplay = () => {
const {turnCount} = useTurnCount()

  return <span>{turnCount}</span>
}

export default TurnDisplay
