import { useState } from 'react'

// MUI
import SaveIcon from '@mui/icons-material/Upload'
import { Button, TextField, Typography } from '@mui/material'
import PopoverComp from './PopoverComp'
import { usePopover } from './hooks/usePopover'

// config
import apiConfig from '../config/apiConfig'

// axios
import axios from 'axios'
import { useCombatants } from '../combatants/CombatantsContext'
import { useTurnCount } from '../tracker/trackerControls/hooks/useTurnCount'

// Functions
// import handleSaveSession from "../functions/handleSaveSession"
// import PopoverComp from "../reusableComps/PopoverComp"

const SaveSession = () => {
  const { handlePopoverOpen, handlePopoverClose, id, open, anchorEl } =
    usePopover()
  const { combatants, activeCombatant } = useCombatants()
  const { turnCount } = useTurnCount()
  const [sessionName, setSessionName] = useState('')

  interface sessionData {
    sessionName: string
    turnCount: number
    activeCombatant: string
    characterInfo: typeof combatants
  }

  const handleSaveSessionClick = () => {
    let sessionInfo = {
      sessionName: sessionName,
      turnCount: turnCount,
      activeCombatant: activeCombatant,
      characterInfo: combatants,
    }

    handleSaveSession(sessionInfo)
  }

  const handleSaveSession = (sessionInfo: sessionData) => {
    axios.post(apiConfig.local.addSession, sessionInfo).then((resp) => {
      console.log('save session', resp.data)
    })
  }

  return (
    <>
      <SaveIcon onClick={handlePopoverOpen} />

      <PopoverComp
        id={id}
        open={open}
        anchorEl={anchorEl}
        handleClose={handlePopoverClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Typography>Enter a Session Name:</Typography>

          <TextField
            label="Session Name"
            aria-label='Session Name'
            onChange={(e) => setSessionName(e.target.value)}
          />

          <Button onClick={handleSaveSessionClick} variant="contained">
            Save Session
          </Button>
        </div>
      </PopoverComp>
    </>
  )
}

export default SaveSession
