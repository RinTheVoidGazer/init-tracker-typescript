// React
import { useState } from "react"

// Styles
import "./Tracker.css"
import Theme from "../styles/Theme"

// MUI
import { Paper } from "@mui/material"

// State
import { CombatantsProvider } from "../combatants/CombatantsContext"

// Components
// import ManageData from "../session/ManageData"
import TurnDisplay from "./trackerControls/TurnDisplay"
import AddCharacter from "./trackerControls/AddCharacter"
import NextCombatant from "./trackerControls/NextCombatant"
import CharacterSheet from "../characterSlot/characterSlot/CharacterSheet"

const Tracker = () => {
  const [turnCount, setTurnCount] = useState(1)
  


  return (
    <Theme>
      <div className="App">
        <div className="App-header">
          <Paper
            elevation={5}
            className="trackerCard"
            style={
              {
                // borderRadius: "5px",
                // background: "rgb(20, 20, 20)",
                // display: "flex",
                // flexDirection: "column",
                // width: "90vw",
                // height: "80vh",
                // padding: "8px",
                // position: "relative",
              }
            }
          >
            <CombatantsProvider>
              <CharacterSheet />
            
            <div className="trackerControlsContainer addCharacterButtonContainer">
              <AddCharacter />
            </div>

            <div className="trackerControlsContainer nextCombatantButtonContainer">
              <NextCombatant
                setTurnCount={setTurnCount}
                turnCount={turnCount}
              />
            </div>
            </CombatantsProvider>

            <div className="trackerControlsContainer turnDisplayTextContainer">
              <TurnDisplay turnCount={turnCount} />
            </div>
          </Paper>
        </div>
      </div>
    </Theme>
  )
}

export default Tracker
