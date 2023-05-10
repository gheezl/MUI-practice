import DashBoard from "./features/dashboard";
import Header from "./features/global/Header";
import Sidebar from "./features/global/Sidebar";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { useState } from "react";

const App = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return(
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Sidebar isSidebar={isSidebar} />
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