import { useState } from 'react'

const usePopover = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handlePopoverOpen = (e : any ) => { //question
    setAnchorEl(e.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id : 'simple-popover' | undefined = open ? 'simple-popover' : undefined

  return { id, open, anchorEl, handlePopoverOpen, handlePopoverClose }
}

export { usePopover }
