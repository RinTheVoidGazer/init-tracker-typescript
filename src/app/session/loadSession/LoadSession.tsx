import { useState } from "react"

// MUI
import LoadIcon from "@mui/icons-material/Download"

// config
import apiConfig from "../../config/apiConfig"

// axios
import axios from "axios"

// Components
// import DialogComp from "./DialogComp"
// import SessionSelection from "./SessionSelection"
import { useDialog } from "../hooks/useDialog"
import { useSession } from "../hooks/useSession"

const LoadSession = () => {
const {diagOpen, handleDiagClose} = useDialog()
const {handleGetAllSessions} = useSession()

  return (
    <>
      {/* <DialogComp
        diagTitle="Select a Session"
        open={diagOpen}
        onClose={handleDiagClose}
      >
        <SessionSelection />
      </DialogComp> */}

      <LoadIcon onClick={handleGetAllSessions} />
    </>
  )
}

export default LoadSession
