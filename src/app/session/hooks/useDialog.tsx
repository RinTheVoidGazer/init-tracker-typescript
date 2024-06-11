import { useState } from 'react'

const useDialog = () => {
  const [diagOpen, setDiagOpen] = useState(false)

  const handleDiagClose = () => {
    setDiagOpen(false)
  }

  return { diagOpen, setDiagOpen, handleDiagClose }
}

export { useDialog }
