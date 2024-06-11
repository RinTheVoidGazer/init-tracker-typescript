// MUI
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import DataIcon from '@mui/icons-material/Save'

// Components
// import LoadSession from "./loadSession/LoadSession"
import SaveSession from './SaveSession'
import LoadSession from './loadSession/LoadSession'

const ManageData = () => {
  const actions = [
    {
      icon: <SaveSession />,
      name: 'Save Session',
    },
    // {
    //   icon: (
    //     <LoadSession />
    //   ),
    //   name: "Load Session",
    // },
  ]

  return (
    <SpeedDial
      ariaLabel="Session Menu"
      sx={{ position: 'absolute', top: 10, left: 10 }}
      direction="right"
      icon={<DataIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          aria-label={action.name}
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  )
}

export default ManageData
