import { PropsWithChildren } from 'react'

// MUI
import Popover, { PopoverVirtualElement } from '@mui/material/Popover'
import Typography from '@mui/material/Typography'

interface PopoverCompProps {
  id: 'simple-popover' | undefined
  open: boolean
  anchorEl: Element | (() => Element) | PopoverVirtualElement | (() => PopoverVirtualElement) | null | undefined //question
  handleClose : () => void
  anchorOrigin: { vertical: 'top' | 'bottom'; horizontal: 'left' | 'right' }
}

const PopoverComp = ({
  id,
  open,
  anchorEl,
  children,
  handleClose,
  anchorOrigin,
}: PropsWithChildren<PopoverCompProps>) => {

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
      >
        <Typography sx={{ p: 2 }}>{children}</Typography>
      </Popover>
    </div>
  )
}

export default PopoverComp
