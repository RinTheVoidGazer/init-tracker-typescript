// React
import { Dispatch, SetStateAction } from "react"

// MUI
import { Paper } from "@mui/material"
import { CharacterData } from "../../data/characterData"

// Components
import CurrentHpInput from "./CurrentHpInput"
import MaxHpInput from "./MaxHpInput"

interface HpBarProps {
  charIndex : number
  charCurHp : number
  charMaxHp : number
  setCombatants : Dispatch<SetStateAction<CharacterData[]>>
}

const HpBar = ({ charIndex, charCurHp, charMaxHp, setCombatants } : HpBarProps) => {
  let hpBarColor =
    (charCurHp / charMaxHp) * 100 >= 80
      ? "green"
      : (charCurHp / charMaxHp) * 100 >= 30
      ? "orange"
      : charCurHp <= 0
      ? "black"
      : "red"

  return (
    <Paper
      // name="hpBarBG"
      elevation={3}
      style={{ width: "50%", background: "black", position: "relative" }}
    >
      <Paper
        // name="hpBarActualBar"
        elevation={0}
        style={{
          zIndex: 0,
          width: `${(charCurHp / charMaxHp) * 100}%`,
          background: hpBarColor,
        }}
      >
        <div
          // name="hpBarNumbers"
          style={{ position: "absolute", top: 0, left: "45%", color: "white" }}
          // style={{ display: 'flex', justifyContent: 'center', color: "white" }}
        >
          <div>
            <CurrentHpInput
              charIndex={charIndex}
              charCurHp={charCurHp}
              charMaxHp={charMaxHp}
              setCombatants={setCombatants}
            />
            /
            <MaxHpInput
              charIndex={charIndex}
              charCurHp={charCurHp}
              charMaxHp={charMaxHp}
              setCombatants={setCombatants}
            />
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
