// React
import { useState } from "react"

// Styles
import "./Tracker.css"
import Theme from "../styles/Theme"

//Material-Ui
import { Paper } from "@mui/material"

// Components
// import ManageData from "../session/ManageData"
import characterData from "../data/characterData"
// import TurnDisplay from "./trackerControls/TurnDisplay"
// import AddCharacter from "./trackerControls/AddCharacter"
import CharacterSlot from "../characterSlot/characterSlot/CharacterSlot"
// import NextCombatant from "./trackerControls/NextCombatant"

const Tracker = () => {
  const [combatants, setCombatants] = useState([...characterData])
  //   const [turnCount, setTurnCount] = useState(1)
  //   const [activeCombatant, setActiveCombatant] = useState(0)

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
            <div className="characterSlotContainer">
              {combatants.map((charInfo, index) => {
                return (
                  <CharacterSlot
                    key={index}
                    charInfo={charInfo}
                    index={index}
                    // combatants={combatants}
                    // setCombatants={setCombatants}
                    // activeCombatant={activeCombatant}
                  />
                )
              })}
            </div>
            {/* 
            <div className="trackerControlsContainer addCharacterButtonContainer">
              <AddCharacter setCombatants={setCombatants} />
            </div> */}

            {/* <div className="trackerControlsContainer nextCombatantButtonContainer">
              <NextCombatant
                combatants={combatants}
                activeCombatant={activeCombatant}
                setCombatants={setCombatants}
                setActiveCombatant={setActiveCombatant}
                setTurnCount={setTurnCount}
                turnCount={turnCount}
              />
            </div> */}

            {/* <div className="trackerControlsContainer turnDisplayTextContainer">
              <TurnDisplay turnCount={turnCount} />
            </div> */}
          </Paper>
        </div>
      </div>
    </Theme>
  )
}

export default Tracker
