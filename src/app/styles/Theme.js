import * as React from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    // primary: {
    //   main: red[500],
    //   color: red[500],
    // },
    mode: "dark",
    // text: {
    //   primary: "white",
    // },
  },
})

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
