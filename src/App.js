import DashBoard from "./features/dashboard";
import Topbar from "./features/global/Topbar";
import Sidebar from "./features/global/Sidebar";
import Team from "./features/team";
import Contacts from "./features/contacts";
import Invoices from "./features/invoices";
import Form from "./features/form"
import Calendar from "./features/calendar";
import Faq from "./features/faq";
import Bar from "./features/bar";
import Pie from "./features/pie";
import Line from "./features/line";
import Geo from "./features/geo";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

const App = () => {
  const [theme, colorMode] = useMode();

  return(
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar  />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geo" element={<Geo />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    )
}

export default App