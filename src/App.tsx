import CssBaseline from "@mui/material/CssBaseline";
import AppTheme from "./theme/AppTheme";
import AppAppBar from "./components/AppAppBar";

import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes/Routes";
import Footer from "./components/Footer";

export default function App(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Router>
        <AppAppBar />
        <AppRoutes />
        <Footer />
      </Router>
    </AppTheme>
  );
}
