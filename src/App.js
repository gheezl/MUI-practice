import DashBoard from "./features/dashboard";
import Header from "./features/global/Header";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"

const App = () => {
  const [theme, colorMode] = useMode();

  return(
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Header />
            <Routes>
              <Route path="/" element={<DashBoard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    )
}

export default App