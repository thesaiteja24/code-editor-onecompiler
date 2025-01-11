import React, { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import NabBar from "./components/NavBar";
import { lightTheme, darkTheme } from "./theme";
import ActionButtons from "./components/ActionButtons";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  const [language, setLanguage] = useState("html");

  const handleRunClick = () => {
    console.log("Run button clicked");
  };

  const handleFormatClick = () => {
    console.log("Format button clicked");
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <NabBar toggleTheme={toggleTheme} />
      <ActionButtons
        language={language}
        onRunClick={handleRunClick}
        onFormatClick={handleFormatClick}
        onLanguageChange={handleLanguageChange}
      />
    </ThemeProvider>
  );
};

export default App;
