import Header from "./features/global/header";
import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"

const App = () => {
  const [theme, colorMode] = useMode();

  return(
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
      </ThemeProvider>
    </ColorModeContext.Provider>
    )
}

export default App