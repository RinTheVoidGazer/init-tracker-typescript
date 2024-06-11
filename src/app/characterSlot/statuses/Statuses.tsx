// React
import { useState } from 'react'

// MUI
import { Button, Chip, Fab, Tooltip } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import AddIcon from '@mui/icons-material/Add'
import Popover from '@mui/material/Popover'
import { TextField } from '@mui/material'

// Components
import ParentBox from '../../globalComponents/layout/ParentBox'

// Hooks
import { useStatusManagement } from './hooks/useStatusManagement'
import { useCombatantInfo } from '../../combatants/hooks/useCombatantInfo'

// Data
import { CharacterStatuses } from '../../data/characterData'

interface StatusesProps {
  charId: string
}

const Statuses = ({ charId }: StatusesProps) => {
  const { getCharacterProp } = useCombatantInfo()
  const {
    name,
    setName,
    duration,
    setDuration,
    handleAddNewStatus,
    handleStatusDeletion,
  } = useStatusManagement()

  // Popover Values
  const [anchorEl, setAnchorEl] = useState(null) // meep?
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const handleAddStatusClick = (event: any) => {
    // meep?
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <ParentBox gap="5px" alignItems="center">
      <Tooltip title="Add a Status">
        <Fab
          size="small"
          tabIndex={6}
          color="primary"
          aria-describedby={id}
          aria-label="add a status"
          onClick={handleAddStatusClick}
        >
          <AddIcon />
        </Fab>
      </Tooltip>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <ParentBox flexDirection="column" padding="3px">
          <TextField
            size="small"
            value={name}
            variant="standard"
            label="Status Name"
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            size="small"
            type="number"
            value={duration}
            variant="standard"
            label="Status Duration"
            onChange={(e) => setDuration(e.target.value)}
          />

          <Button
            variant="contained"
            aria-label="add status"
            disabled={!name || !duration}
            onClick={() => handleAddNewStatus(charId)}
          >
            Add Status
          </Button>
        </ParentBox>
      </Popover>

      {(getCharacterProp(charId, 'statuses')! as CharacterStatuses[]).map(
        (status: CharacterStatuses, index) => {
          return (
            <Chip
            label={status.name}
              key={`${status.name}${charId}`}
              aria-label={`${status.name}${charId}`}
              avatar={<Avatar>{status.duration}</Avatar>}
              onDelete={(e) => handleStatusDeletion(charId, index)}
            />
          )
        }
      )}
    </ParentBox>
  )
}

export default Statuses
