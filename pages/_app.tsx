import React from "react"
import { ThemeProvider } from "styled-components"
import Navbar from "../src/components/Navbar"
import "../styles/globals.css"
import { theme } from "../styles/styled-components"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </div>
  )
}

export default App
