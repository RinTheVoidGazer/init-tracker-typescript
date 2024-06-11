// Styles
import './Tracker.css'
import Theme from '../styles/Theme'

// MUI
import { Paper } from '@mui/material'

// State
import { CombatantsProvider } from '../combatants/CombatantsContext'

// Components
import ManageData from '../session/ManageData'
import TurnDisplay from './trackerControls/TurnDisplay'
import AddCharacter from './trackerControls/AddCharacter'
import NextCombatant from './trackerControls/NextCombatant'
import CharacterSheet from '../characterSlot/characterSlot/CharacterSheet'

// mock service worker (msw)

const Tracker = () => {
  return (
    <Theme>
      <div className="App">
        <div className="App-header">
          <CombatantsProvider>
            <ManageData />

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
              <CharacterSheet />

              <div className="trackerControlsContainer addCharacterButtonContainer">
                <AddCharacter />
              </div>

              <div className="trackerControlsContainer nextCombatantButtonContainer">
                <NextCombatant />
              </div>

              <div className="trackerControlsContainer turnDisplayTextContainer">
                <TurnDisplay />
              </div>
            </Paper>
          </CombatantsProvider>
        </div>
      </div>
    </Theme>
  )
}

export default Tracker
