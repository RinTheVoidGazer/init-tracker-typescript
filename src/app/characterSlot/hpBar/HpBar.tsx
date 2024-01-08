// MUI
import { Paper } from '@mui/material'

// Hooks
import { useHpBar } from './hooks/useHpBar'

// Components
import CurrentHpInput from './CurrentHpInput'
import MaxHpInput from './MaxHpInput'

interface HpBarProps {
  charId: string
}

const HpBar = ({ charId }: HpBarProps) => {
  const { hpBarColor, hpBarWidth } = useHpBar(charId)

  return (
    <Paper
      // name="hpBarBG"
      elevation={3}
      style={{ width: '50%', background: 'black', position: 'relative' }}
    >
      <Paper
        // name="hpBarActualBar"
        elevation={0}
        style={{
          zIndex: 0,
          width: hpBarWidth,
          background: hpBarColor,
        }}
      >
        <div
          // name="hpBarNumbers"
          style={{ position: 'absolute', top: 0, left: '45%', color: 'white' }}
          // style={{ display: 'flex', justifyContent: 'center', color: "white" }}
        >
          <div>
            <CurrentHpInput charId={charId} />
            /
            <MaxHpInput charId={charId} />
          </div>
        </div>

        {/* Here to make the actual bar show up as position absolute doesn't count as a child apparently */}
        <span
          style={{
            color: hpBarColor,
          }}
        >
          &nbsp;
        </span>
      </Paper>
    </Paper>
  )
}

export default HpBar
