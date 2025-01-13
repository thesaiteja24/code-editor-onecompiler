import React from "react";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { ThemeProvider } from "./ThemeContext";
import NavBar from "./components/NavBar";
import CodeEditor from "./components/CodeEditor";
import { useTheme } from "./ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <MuiThemeProviderWrapper>
        <CssBaseline />
        <NavBar />
        <CodeEditor />
      </MuiThemeProviderWrapper>
    </ThemeProvider>
  );
};

// Wrapper for MUI's ThemeProvider
const MuiThemeProviderWrapper = ({ children }) => {
  const { isDarkMode } = useTheme();
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default App;
