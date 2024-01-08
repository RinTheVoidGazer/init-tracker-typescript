// MUI
import { Fab, Tooltip } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

// Hooks
import { usePartyManagement } from './hooks/usePartyManagement'

const AddCharacter = () => {
  const { handleAddNewCharacter } = usePartyManagement()

  return (
    <Tooltip title="Add Character">
      <Fab
        size="small"
        color="primary"
        name="addCharacterButton"
        aria-label="add character"
        onClick={() => handleAddNewCharacter()}
      >
        <AddIcon />
      </Fab>
    </Tooltip>
  )
}

export default AddCharacter
