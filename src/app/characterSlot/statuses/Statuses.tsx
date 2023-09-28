import { Dispatch, SetStateAction, useCallback, useState } from 'react'

// MUI
import { Button, Chip, Fab, Tooltip } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import AddIcon from '@mui/icons-material/Add'
import Popover from '@mui/material/Popover'
import { TextField } from '@mui/material'

// Components
import ParentBox from '../../globalComponents/layout/ParentBox'

// Functions
import handleAddNewStatus from './handleAddNewStatus'
import handleStatusDeletion from './handleStatusDeletion'

// Data
import { CharacterData } from '../../data/characterData'
import { CharacterStatuses } from '../../data/characterData'


interface StatusesProps {
  charEditIndex: number
  charStatuses: CharacterStatuses[]
  setCombatants:  Dispatch<SetStateAction<CharacterData[]>>
}

const useNewStatus = ({setCombatants, charEditIndex}: Omit<StatusesProps, 'charStatuses'>) => {
  const [name, setName] = useState('')
  const [duration, setDuration] = useState('')

  const handleAdd = useCallback(() =>
  handleAddNewStatus(
    setCombatants,
    charEditIndex,
    name,
    duration,
    setName,
    setDuration
  ),[charEditIndex, duration, name, setCombatants])

  return {name, setName, duration, setDuration, handleAdd}
}

const Statuses = ({ charEditIndex, charStatuses, setCombatants } : StatusesProps) => {
  const { name, duration, setName, setDuration, handleAdd } = useNewStatus({setCombatants, charEditIndex})

  // Popover Values
  const [anchorEl, setAnchorEl] = useState(null) // meep?
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const handleAddStatusClick = (event : any) => { // meep?
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <ParentBox gap="5px" alignItems="center">
      <Tooltip title="Add a Status">
        <Fab
          aria-describedby={id}
          size="small"
          color="primary"
          tabIndex={6}
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
            label="Status Name"
            variant="standard"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            label="Status Duration"
            variant="standard"
            type="number"
            size="small"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />

          <Button
            disabled={!name || !duration}
            variant="contained"
            aria-label="add status"
            onClick={handleAdd}
          >
            Add Status
          </Button>
        </ParentBox>
      </Popover>

      {charStatuses.map((status, index) => {
        return (
          <Chip
            aria-label={`${status.name}${charEditIndex}`}
            key={`${status.name}${charEditIndex}`}
            avatar={<Avatar>{status.duration}</Avatar>}
            label={status.name}
            onDelete={() =>
              handleStatusDeletion(index, setCombatants, charEditIndex)
            }
          />
        )
      })}
    </ParentBox>
  )
}

export default Statuses
