interface TurnDisplayProps {
  turnCount: number
}

const TurnDisplay = ({ turnCount } : TurnDisplayProps) => {
  return <span>{turnCount}</span>
}

export default TurnDisplay
